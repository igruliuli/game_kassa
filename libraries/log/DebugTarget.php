<?php

namespace app\libraries\log;

use yii\log\FileTarget;
use yii\helpers\VarDumper;
use yii\log\Logger;

class DebugTarget extends FileTarget {

    public $logFile = '@app/runtime/logs/debug.log';

    public function formatMessage($message)
    {
        list($text, $level, $category, $timestamp) = $message;
        $level = Logger::getLevelName($level);
        if (!is_string($text)) {
            // exceptions may not be serializable if in the call stack somewhere is a Closure
            if ($text instanceof \Exception) {
                $text = (string) $text;
            } else {
                $text = VarDumper::export($text);
            }
        }

        $prefix = $this->getMessagePrefix($message);
        return date('Y-m-d H:i:s', $timestamp) . " {$prefix}[$level][$category] $text";
    }

    protected function getContextMessage()
    {
        return '';
    }
}