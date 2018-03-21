<?php
    use yii\helpers\Html;
    use sortablelist\SortableListView;
?>

<h2>Секции Лектория</h2>

<div class="admin-row">
    <?php echo Html::a('Добавить', ['/admin/lecturer-section/manage', 'day' => $zone_id], ['class' => 'btn btn-primary']); ?>
</div>

<?php foreach ([null, 1,2,3] as $dayNumber): ?>
    <div class="row">
        <?php
            $itemQuery = clone $query;
            $itemQuery->where(['day' => $dayNumber]);

            $dataProvider = new \yii\data\ActiveDataProvider([
                'query' => $itemQuery
            ]);

            if ($dataProvider->totalCount == 0) {
                continue;
            }
        ?>

        <h2><?php echo $dayNumber == null ? 'Без дня' : 'День №' . $dayNumber; ?></h2>

         <?php
            echo SortableListView::widget([
                'dataProvider' => $dataProvider,
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
<?php endforeach; ?>
