<?php
    /** @var \app\models\Zone $model */
    use yii\helpers\Html;
    $picture = $model->getThumbFileUrl('image', 'normal');
?>


<div class="panel panel-info zone-item">
    <div class="panel-heading sortable-handle"><?php echo Html::encode($model->name); ?></div>
    <div class="panel-body">
        <?php echo \yii\helpers\Html::img($picture); ?>
    </div>
    <div class="panel-footer">
        <a href="<?php echo \yii\helpers\Url::to(['manage', 'id' => $model->id, 'zone_id' => $model->zone_id]) ?>" title="Редактировать" class="glyphicon glyphicon-edit"></a>
        <a href="<?php echo \yii\helpers\Url::to(['delete', 'id' => $model->id]) ?>" data-toggle="tooltip" data-confirm="Удалить?" title="Удалить" data-method="post" class="glyphicon glyphicon-remove"></a>
    </div>
</div>

