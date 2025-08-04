<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\Severity;

class BugReport extends Model
{
    protected $casts = [
        'severity' => Severity::class,
    ];
    protected $fillable = ['title', 'description', 'severity'];
}
