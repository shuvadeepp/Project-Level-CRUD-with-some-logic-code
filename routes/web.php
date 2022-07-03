<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::match(['get', 'post'], '{controller}/{action?}/{params?}', function ($controller, $action = 'index', $params = '') {
    $params = explode('/', $params);
    $app = app();
    $controller = $app->make("\App\Http\Controllers\\" . ucwords($controller) . 'Controller',['action' => $action]);
    return $controller->callAction($action, $params);
});