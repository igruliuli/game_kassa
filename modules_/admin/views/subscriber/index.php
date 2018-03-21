<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    use yii\grid\GridView;
    use app\models\Subscriber;
    use yii\helpers\Html;
    use kartik\export\ExportMenu;
?>

<h2>Subscribers</h2>

<div class="admin-row">
    <a class="btn btn-success" href="/admin/subscriber/export">Export</a>
</div>

<?php

echo GridView::widget([
    'dataProvider' => $dataProvider,
    'id' => 'list-action-grid',
    'options' => ['class' => 'detail-grid-view'],
    'columns' =>  [
        [
            'attribute' => 'id',
            'options' => [
                'style' => 'width: 10px;'
            ]
        ],
        'email',
        'subscribe_date',
        [
            'attribute' => 'status',
            'label' => 'Confirmed?',
            'value' => function ($model) {
                return $model->status == Subscriber::STATUS_CONFIRMED ? 'Yes' : 'No';
            }
        ],
        [
            'class' => 'yii\grid\ActionColumn',
            'options' => [
                'style' => 'width: 75px; text-align: center;'
            ],
            'template' => '{view} {delete}',
            'buttons' => [
                'manage' => function ($url, $model) {
                    return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                        'title' => \Yii::t('yii', 'Update'),
                        'data-pjax' => '0',
                    ]);
                }
            ]
        ],
    ]
]);
