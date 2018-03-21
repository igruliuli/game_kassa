<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use sortablelist\SortableListAction;
use app\models\Zone;

class ZoneController extends BaseAdminController
{
    public function actions()
    {
        return [
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => Zone::className(),
                'view' => 'manage'
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => Zone::className(),
            ],
            'sort' => [
                'class' => SortableListAction::className(),
                'modelName' => Zone::className(),
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }
}