<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use sortablelist\SortableListAction;
use app\models\Partner;

class PartnerController extends BaseAdminController
{
    public function actions()
    {
        return [
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => Partner::className(),
                'view' => 'manage'
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => Partner::className()
            ],
            'sort' => [
                'class' => SortableListAction::className(),
                'modelName' => Partner::className(),
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }
}