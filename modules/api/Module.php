<?php

namespace app\modules\api;

use Yii;
use yii\web\Response;
use app\modules\api\libraries\ApiErrorHandler;

class Module extends \yii\base\Module
{
    public function init()
    {
        parent::init();

        // use specific error handler
        $apiHandler = new ApiErrorHandler();
        \Yii::$app->set('errorHandler', $apiHandler);
        $apiHandler->register();

        $response = \Yii::$app->getResponse();
        $response->format = Response::FORMAT_JSON;

        Yii::setAlias('@api', $this->getBasePath());
    }
}