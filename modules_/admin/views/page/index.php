<?php

use yii\grid\GridView;
use yii\helpers\Html;

$this->title = 'Страницы';
$this->params['breadcrumbs'][] = $this->title;
?>

<p>
    <?php echo Html::a('Создать', ['/admin/page/create'], ['class' => 'btn btn-primary']); ?>
</p>

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
        'url',
        [
            'contentOptions' => [
                'style' => 'width: 70px;'
            ],
            'class' => 'yii\grid\ActionColumn',
            'template' => '{update} {delete}',
        ],
    ],
]);