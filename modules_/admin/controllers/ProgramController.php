<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use app\models\ProgramItem;
use app\models\ProgramSearch;
use app\models\Zone;
use yii\helpers\Html;
use admin\components\actions\ListAction;

class ProgramController extends BaseAdminController
{
    public function actions()
    {
        return [
            'index' => [
                'class' => ListAction::className(),
                'query' => ProgramItem::find()->with('zone'),
                'searchModel' => new ProgramSearch(),
                'title' => 'Программа',
                'columns' => [
                    [
                        'class' => 'yii\grid\SerialColumn',
                        'options' => [
                            'style' => 'width: 10px;'
                        ]
                    ],
                    'name',
                    [
                        'attribute' => 'zone_id',
                        'value' => function($model) {
                            return $model->zone->name;
                        },
                        'filter' => Zone::getList()
                    ],
                    [
                        'attribute' => 'day',
                        'filter' => array_combine(range(1, 3), range(1, 3))
                    ],
                    'time',
                    [
                        'class' => 'yii\grid\ActionColumn',
                        'options' => [
                            'style' => 'width: 75px; text-align: center;'
                        ],
                        'template' => '{manage} {delete}',
                        'buttons' => [
                            'manage' => function ($url, $model) {
                                return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                                    'title' => \Yii::t('yii', 'Update'),
                                    'data-pjax' => '0',
                                ]);
                            }
                        ]
                    ]
                ],
                'buttons' => [
                    [
                        'text' => 'Добавить',
                        'url' => '/admin/program/manage',
                        'options' => ['class' => 'btn btn-primary']
                    ]
                ]
            ],
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => ProgramItem::className(),
                'view' => 'manage'
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => ProgramItem::className(),
            ],
        ];
    }
}