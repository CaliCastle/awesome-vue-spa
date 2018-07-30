<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    /**
     * Show index web app.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showApp()
    {
        return view('index')->with($this->getAppSettings());
    }
    /**
     * Show admin web app.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showAdminApp()
    {
        return view('admin')->with($this->getAppSettings(true));
    }
    /**
     * Get app setting attributes.
     *
     * @param bool $isAdmin
     *
     * @return array
     */
    protected function getAppSettings(bool $isAdmin = false)
    {
        $mainConfig = [
            'appConfig' => [
                'name'       => config('app.name'),
                'apiBaseUrl' => route('api.base'),
            ]
        ];
        if ($isAdmin) {
            $mainConfig = array_merge_recursive([
                'appConfig' => [
                    'backend_name' => config('app.backend_name'),
                ]
            ], $mainConfig);
        }
        return $mainConfig;
    }
}