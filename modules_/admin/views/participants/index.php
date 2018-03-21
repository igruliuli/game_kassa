<?php
    use sortablelist\SortableListView;
    use yii\helpers\Html;
?>

<h2>Участники</h2>

<div class="admin-row">
    <?php echo Html::a('Добавить', ['/admin/participants/manage'], ['class' => 'btn btn-primary']); ?>
</div>

<div class="row">
    <?php
        echo SortableListView::widget([
            'dataProvider' => new \yii\data\ActiveDataProvider([
                'query' => \app\models\Participant::find()->orderBy('order'),
                'pagination' => false
            ]),
            'layout' => '{items}',
            'itemView' => '_item',
            'options' => [
                'class' => 'zone-list'
            ],
            'itemOptions' => [
                'class' => 'col-md-3 sortable-item'
            ]
        ]);
    ?>
</div>
