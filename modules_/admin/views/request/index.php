<?php
	use yii\grid\GridView;

	$this->title = 'Заявки';
	$this->params['breadcrumbs'][] = $this->title;
?>

<?= GridView::widget([
	'dataProvider' => $dataProvider,
	//'filterModel' => $searchModel,
	'columns' => [
		[
			'attribute' => 'id',
			'contentOptions' => [
				'style' => 'width: 20px;'
			]
		],
		'name',
		'email',
		'phone',
		'datetime',
		'ip',
		[
			'contentOptions' => [
				'style' => 'width: 70px;'
			],
			'class' => 'yii\grid\ActionColumn',
			'template' => '{view} {delete}',
		],
	],
]); ?>