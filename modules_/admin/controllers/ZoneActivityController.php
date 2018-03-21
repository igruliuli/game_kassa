<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use app\models\ZoneActivity;
use sortablelist\SortableListAction;
use app\models\Zone;

class ZoneActivityController extends BaseAdminController
{
    public function actions()
    {
        $request = \Yii::$app->request;

        return [
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => ZoneActivity::className(),
                'viewParams' => [
                    'zone' => Zone::findOne($request->get('zone_id'))
                ],
                'view' => 'manage',
                'redirect' => ['/admin/zone-activity/list', 'zone_id' => $request->get('zone_id')]
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => ZoneActivity::className(),
                'redirect' => function ($model) {
                    return ['list', 'zone_id' => $model->zone_id];
                }
            ],
            'sort' => [
                'class' => SortableListAction::className(),
                'modelName' => ZoneActivity::className(),
            ],
        ];
    }

    public function actionList()
    {
        $request = \Yii::$app->request;

        $id = $request->get('zone_id');

        $query = ZoneActivity::find()->where(['zone_id' => $id]);

        return $this->render('list', ['query' => $query, 'zone_id' => $id]);
    }
}