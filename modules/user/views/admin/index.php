<?php

use yii\grid\GridView;
use yii\helpers\Html;

/* @var $dataProvider yii\data\ActiveDataProvider */

echo Html::a('Добавить', '/user/admin/manage', ['class' => 'btn btn-primary']);

echo GridView::widget([
	'dataProvider' => $dataProvider,
	'id' => 'list-action-grid',
	'options' => ['class' => 'detail-grid-view'],
	'columns' => [
		[
			'class' => 'yii\grid\SerialColumn',
			'options' => [
				'style' => 'width: 10px;'
			]
		],
		'email',
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
	],
]);