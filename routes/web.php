<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('BugReport', [
        'severities' => App\Enums\Severity::labels(), 
    ]);
});

Route::post('/bug-report', [App\Http\Controllers\BugReportController::class, 'store']);
