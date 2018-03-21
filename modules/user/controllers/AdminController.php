<?php

namespace app\modules\user\controllers;

use Yii;
use admin\components\BaseAdminController;
use app\modules\user\models\User;
use yii\helpers\Html;

class AdminController extends BaseAdminController
{
	public function actions()
	{
		return [
			'index' => [
				'class' => 'admin\components\actions\ListAction',
				'query' => User::find(),
				'title' => 'Пользователи',
				'columns' => [
					[
						'class' => 'yii\grid\SerialColumn',
						'options' => [
							'style' => 'width: 10px;'
						]
					],
					'email',
					[
						'value' => function($model) {
							return $model->status == User::STATUS_ACTIVE ? 'Активный' : 'Неактивный';
						},
						'attribute' => 'status',
					],
					'name',
					[
						'class' => 'yii\grid\ActionColumn',
						'options' => [
							'style' => 'width: 75px; text-align: center;'
						],
						'template' => '{manage} {delete}',
						'buttons' => [
							'manage' => function ($url, $model) {
								return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
									'title' => Yii::t('yii', 'Update'),
									'data-pjax' => '0',
								]);
							}
						]
					]
				]
			],
			'manage' => [
				'class' => 'admin\components\actions\ManageAction',
				'modelClass' => 'app\modules\user\models\User',
				'elements' => [
					'email' => ['type' => 'textInput'],
					'password' => ['type' => 'passwordInput'],
					'name' => ['type' => 'textInput'],
					'phone' => ['type' => 'textInput'],
					'address' => ['type' => 'textInput'],
				]
			],
			'delete' => [
				'class' => 'admin\components\actions\DeleteAction',
				'modelClass' => 'app\modules\user\models\User',
			]
		];
	}
}