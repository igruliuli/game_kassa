<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use app\models\LecturerSearch;
use app\models\LecturerSection;
use yii\helpers\Html;
use admin\components\actions\ListAction;
use sortablelist\SortableListAction;

class LecturerSectionController extends BaseAdminController
{
    public function actions()
    {
        return [
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => LecturerSection::className(),
                'view' => 'manage',
                'redirect' => ['list']
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => LecturerSection::className(),
                'redirect' => ['list']
            ],
            'sort' => [
                'class' => SortableListAction::className(),
                'modelName' => LecturerSection::className(),
            ],
        ];
    }

    public function actionList()
    {
        $request = \Yii::$app->request;

        $id = $request->get('zone_id');

        $query = LecturerSection::find()->orderBy('order');

        return $this->render('list', ['query' => $query, 'zone_id' => $id]);
    }
}