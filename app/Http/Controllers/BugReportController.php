<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BugReport;
use App\Enums\Severity;
use Illuminate\Validation\Rules\Enum;
use Inertia\Inertia;

class BugReportController extends Controller
{
        public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:100',
            'description' => 'required|string|max:1000',
            'severity' => ['nullable', new \Illuminate\Validation\Rules\Enum(Severity::class)],
        ]);

        //if severity is not provided, remove it from the data array as the db will default to medium if no value is provided
        if (empty($data['severity'])) {
            unset($data['severity']);
        }

        BugReport::create($data);

        return redirect()->back()->with([
            'success' => true,
            'message' => 'Bug report submitted successfully!',
        ]);
    }

}