<?php

namespace App\Library\Traits\Controllers;

use Illuminate\Http\Response;

trait ApiResponse
{
    /**
     * Shortcut for 422 response.
     *
     * @param $attributes
     * @param $to
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|Response
     */
    protected function jsonValidationError($attributes, $to = null)
    {
        return $this->jsonResponse($attributes, Response::HTTP_UNPROCESSABLE_ENTITY, $to);
    }

    /**
     * Wrapper for sending JSON response.
     *
     * @param array|string $attributes
     * @param int          $statusCode
     * @param              $to
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|Response
     */
    protected function jsonResponse($attributes, $statusCode = Response::HTTP_OK, $to = null)
    {
        $json = [];

        if ($this->shouldReturnJson()) {
            $json = $this->createJson($statusCode, $attributes);

            return response()->json($json, $statusCode);
        }

        if ($to) {
            return redirect($to)->with($json);
        }

        return response()->make('You are not allowed to view this page directly.');
    }

    /**
     * Return json data.
     *
     * @param bool         $success
     * @param array|string $attributes
     *
     * @return array
     * @author Cali
     */
    protected function createJson($status, $attributes)
    {
        return is_string($attributes) ? [
            'status'  => $status,
            'message' => $attributes
        ] : array_merge(
            ['status' => $status],
            $attributes
        );
    }

    /**
     * Should return json response or not.
     *
     * @return bool
     * @author Cali
     */
    protected function shouldReturnJson()
    {
        return request()->ajax() || request()->acceptsJson() || request()->expectsJson();
    }
}