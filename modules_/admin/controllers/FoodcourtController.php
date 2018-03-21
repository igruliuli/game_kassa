<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use app\modules\admin\forms\FoodcourtText;
use config\Config;
use sortablelist\SortableListAction;
use app\models\Foodcourt;

class FoodcourtController extends BaseAdminController
{
    public function actions()
    {
        return [
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => Foodcourt::className(),
                'view' => 'manage'
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => Foodcourt::className()
            ],
            'sort' => [
                'class' => SortableListAction::className(),
                'modelName' => Foodcourt::className(),
            ],
        ];
    }

    public function actionIndex()
    {
        $request = \Yii::$app->request;
        $model = new FoodcourtText();
        $model->text = Config::getValue('foodcourt_text');

        if ($request->isPost) {
            $model->load($request->post());

            if ($model->validate()) {
                Config::saveValue('foodcourt_text', $model->text);
            }
        }

        return $this->render('index', ['text' => $model]);
    }
}