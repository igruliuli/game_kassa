<?php
    /** @var \app\models\LecturerSection $model */
    use yii\helpers\Html;
?>


<div class="panel panel-info">
    <div class="panel-heading sortable-handle"><?php echo Html::encode($model->name); ?></div>
    <div class="panel-body">

    </div>
    <div class="panel-footer">
        <a href="<?php echo \yii\helpers\Url::to(['manage', 'id' => $model->id]) ?>" title="Редактировать" class="glyphicon glyphicon-edit"></a>
        <a href="<?php echo \yii\helpers\Url::to(['delete', 'id' => $model->id]) ?>" data-toggle="tooltip" data-confirm="Удалить?" title="Удалить" data-method="post" class="glyphicon glyphicon-remove"></a>
    </div>
</div>