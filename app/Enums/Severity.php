<?php
namespace App\Enums;

enum Severity: string
{
    case Low = 'low';
    case Medium = 'medium';
    case High = 'high';

    public static function labels(): array
    {
        return [
            self::Low->value => 'Low',
            self::Medium->value => 'Medium',
            self::High->value => 'High',
        ];
    }
}