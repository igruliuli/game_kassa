<?php

namespace app\modules\api\libraries;

class ApiErrorHandler extends \yii\web\ErrorHandler
{
    /** @inheritdoc */
    public static function convertExceptionToString($exception)
    {
        return $exception->getMessage();
    }

    protected function convertExceptionToArray($exception)
    {
        return [
            'error' => $exception->getMessage(),
            'code' => $exception->getCode()
        ];
    }
}