<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use app\models\CarouselSlide;
use admin\components\actions\ManageAction;
use sortablelist\SortableListAction;

class CarouselController extends BaseAdminController
{
    public function actions()
    {
        return [
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => CarouselSlide::className(),
                'view' => 'manage'
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => CarouselSlide::className(),
            ],
            'sort' => [
                'class' => SortableListAction::className(),
                'modelName' => CarouselSlide::className(),
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }
}