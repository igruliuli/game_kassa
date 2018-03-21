<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use app\models\Lecturer;
use app\models\LecturerSearch;
use app\models\LecturerSection;
use yii\helpers\Html;
use admin\components\actions\ListAction;

class LecturerController extends BaseAdminController
{
    public function actions()
    {
        return [
            'index' => [
                'class' => ListAction::className(),
                'query' => Lecturer::find()->with('section'),
                'searchModel' => new LecturerSearch(),
                'title' => 'Лекторий',
                'columns' => [
                    [
                        'attribute' => 'id',
                        'options' => [
                            'style' => 'width: 10px;'
                        ]
                    ],
                    'name',
                    [
                        'header' => 'Блок',
                        'value' => function($model) {
                            return $model->section ? Html::encode($model->section->name) : null;
                        }
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
                        'url' => '/admin/lecturer/manage',
                        'options' => ['class' => 'btn btn-primary']
                    ]
                ]
            ],
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => Lecturer::className(),
                'view' => 'manage'
            ],
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => Lecturer::className(),
            ],
            // sections
            'sections' => [
                'title' => 'Блоки Лектория',
                'class' => ListAction::className(),
                'query' => LecturerSection::find(),
                'columns' => [
                    'id',
                    'name',
                    [
                        'class' => 'yii\grid\ActionColumn',
                        'options' => [
                            'style' => 'width: 75px; text-align: center;'
                        ],
                        'template' => '{manage} {delete}',
                        'buttons' => [
                            'manage' => function ($url, $model) {
                                return Html::a('<span class="glyphicon glyphicon-pencil"></span>', ['manage-section', 'id' => $model->id], [
                                    'title' => \Yii::t('yii', 'Update'),
                                    'data-pjax' => '0',
                                ]);
                            },
                            'delete' => function ($url, $model) {
                                return Html::a('<span class="glyphicon glyphicon-remove"></span>', ['delete-section', 'id' => $model->id], [
                                    'title' => \Yii::t('yii', 'Delete'),
                                    'aria-label' => \Yii::t('yii', 'Delete'),
                                    'data-confirm' => \Yii::t('yii', 'Are you sure you want to delete this item?'),
                                    'data-method' => 'post',
                                    'data-pjax' => '0',
                                ]);
                            },
                        ]
                    ]
                ],
                'buttons' => [
                    [
                        'text' => 'Добавить',
                        'url' => '/admin/lecturer/manage-section',
                        'options' => ['class' => 'btn btn-primary']
                    ]
                ]
            ],
            'manage-section' => [
                'class' => ManageAction::className(),
                'modelClass' => LecturerSection::className(),
                'redirect' => ['sections'],
                'elements' => [
                    'name' => [
                        'type' => 'textInput'
                    ]
                ]
            ],
            'delete-section' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => LecturerSection::className(),
                'redirect' => ['sections'],
            ],
        ];
    }
}