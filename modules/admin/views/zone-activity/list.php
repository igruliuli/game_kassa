<?php
    use yii\helpers\Html;
    use sortablelist\SortableListView;
?>

<h2>Активности зон</h2>

<div class="admin-row">
    <?php echo Html::a('Добавить', ['/admin/zone-activity/manage', 'zone_id' => $zone_id], ['class' => 'btn btn-primary']); ?>
</div>

<div class="row">
    <?php
        echo SortableListView::widget([
            'dataProvider' => new \yii\data\ActiveDataProvider([
                'query' => $query
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