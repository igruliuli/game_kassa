<?php
    use sortablelist\SortableListView;
    use yii\helpers\Html;
?>

<h2>Зоны феста</h2>

<div class="admin-row">
    <?php echo Html::a('Добавить', ['/admin/zone/manage'], ['class' => 'btn btn-primary']); ?>
</div>

<div class="row">
    <?php
        echo SortableListView::widget([
                'dataProvider' => new \yii\data\ActiveDataProvider([
                    'query' => \app\models\Zone::find()->orderBy('order')
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
