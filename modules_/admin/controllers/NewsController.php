<?php

namespace app\modules\admin\controllers;

use admin\components\actions\ManageAction;
use admin\components\BaseAdminController;
use admin\components\actions\ListAction;
use app\models\News;
use ckeditor\CKEditorUploadAction;
use yii\helpers\Html;
use yii\web\NotFoundHttpException;
use yii\helpers\Url;

class NewsController extends BaseAdminController
{
    public function actions()
    {
        return [
            'index' => [
                'class' => ListAction::className(),
                'query' => News::find(),
                'title' => 'Новости',
                'buttons' => [
                    [
                        'text' => 'Добавить',
                        'url' => Url::toRoute([\Yii::$app->controller->id . '/manage']),
                        'options' => ['class' => 'btn btn-primary']
                    ]
                ],
                'columns' => [
                    [
                        'class' => 'yii\grid\SerialColumn',
                        'options' => [
                            'style' => 'width: 10px;'
                        ]
                    ],
                    [
                        'value' => function($model) {
                            return Html::img($model->getThumbFileUrl('picture', 'normal'), ['width' => 100]);
                        },
                        'format' => 'raw',
                        'options' => [
                            'style' => 'width: 100px;'
                        ]
                    ],
                    'title',
                    'date',
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
                ]
            ],
            'manage' => [
                'class' => ManageAction::className(),
                'modelClass' => News::className(),
                'view' => 'manage'
            ],
            'upload' => array(
                'class' => CKEditorUploadAction::className(),
                'path' => 'uploads/news/content'
            ),
            'delete' => [
                'class' => 'admin\components\actions\DeleteAction',
                'modelClass' => News::className(),
            ],
        ];
    }
}