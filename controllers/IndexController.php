<?php

namespace app\controllers;

use yii\helpers\Url;
use yii\web\Controller;


class IndexController extends Controller
{
    public $layout = 'login';

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $this->view->title = 'Домашняя';

        if (isset($_COOKIE['token']))
            return \Yii::$app->response->redirect(Url::to('default.aspx'));


        return $this->render('index', [

        ]);
    }
}