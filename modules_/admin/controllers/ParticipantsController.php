<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use sortablelist\SortableListAction;
use app\models\Participant;

class ParticipantsController extends BaseAdminController
{
    public function actions()
    {
        return [
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => Participant::className(),
                'view' => 'manage'
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => Participant::className()
            ],
            'sort' => [
                'class' => SortableListAction::className(),
                'modelName' => Participant::className(),
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }
}