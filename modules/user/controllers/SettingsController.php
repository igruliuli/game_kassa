<?php
/**
 * Created by PhpStorm.
 * User: Dmitriy
 * Date: 06.06.2017
 * Time: 10:28
 */

namespace app\modules\user\controllers;
use app\libraries\behaviors\JsonResponseBehavior;
use app\modules\user\models\Sourses;
use yii\filters\AccessControl;
use yii\web\Controller;


class SettingsController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@']
                    ],
                    ['allow' => false]
                ]
            ],
            'jsonResponse' => [
                'class' => JsonResponseBehavior::className(),
            ]
        ];
    }

    public function actionIndex(){

        $data = Sourses::getSourses();

        return $this->createResponse(['sources' => $data]);
    }

    public function actionAmount(){
        $request = \Yii::$app->request;

        $source = new Sourses();
        $source->setBets($request->post('source'),$request->post('min'),$request->post('max'),$request->post('all'));

        return $this->createResponse(['result' => 'success']);
    }

    public function actionPercent(){
        $request = \Yii::$app->request;

        $source = new Sourses();
        $source->setPercent($request->post('source'),$request->post('percent'),$request->post('all'));

        return $this->createResponse(['result' => 'success']);
    }

    public function actionToggle(){
        $request = \Yii::$app->request;

        $source = new Sourses();
        $source->setToggle($request->post('source'),$request->post('oldValue'));

        return $this->createResponse(['result' => 'success']);
    }

    public function actionSwitchAll(){
        $request = \Yii::$app->request;

        $source = new Sourses();
        $source->switchAll($request->get('toggle'));

        return $this->createResponse(['result' => 'success']);
    }

}