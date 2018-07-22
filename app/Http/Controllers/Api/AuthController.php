<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    /**
     * Create a login request.
     *
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function login(Request $request)
    {
        // Form request validation.
        $this->validate($request, [
            'email'    => 'required|string|email',
            'password' => 'required|string',
        ]);

        // Check if a user with the specified email exists.
        $user = User::whereEmail($request->input('email'))->first();
        if (! $user) {
            return $this->jsonValidationError('此邮箱不存在');
        }

        // If a user with the email was found - check if the
        // specified password belongs to this user.
        if (! auth()->validate($request->only(['email', 'password']))) {
            return $this->jsonValidationError('密码错误');
        }

        return $this->attemptIssuingToken($request, $user);
    }

    /**
     * Try issuing a password token.
     *
     * @param Request $request
     * @param         $user
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     * @throws \Exception
     */
    private function attemptIssuingToken(Request $request, $user)
    {
        $data = [
            'grant_type'    => 'password',
            'client_id'     => config('auth.oauth.client_id'),
            'client_secret' => config('auth.oauth.client_secret'),
            'username'      => $request->input('email'),
            'password'      => $request->input('password'),
        ];

        // Send API request to issue token.
        $request = Request::create('/oauth/token', 'POST', $data);

        $response = app()->handle($request);

        // Check if the request was successful
        if ($response->getStatusCode() != Response::HTTP_OK) {
            return $this->jsonValidationError('用户名或密码验证失败');
        }

        // Get the data from the response
        $data = json_decode($response->getContent());

        // Format the final response in a desirable format
        return $this->jsonResponse([
            'token' => $data->access_token,
            'user'  => $user,
        ]);
    }

    /**
     * Log the user out.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $accessToken = auth()->user()->token();

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json(['status' => 200]);
    }
}