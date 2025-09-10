<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // or whatever your main blade view is
})->where('any', '.*');
