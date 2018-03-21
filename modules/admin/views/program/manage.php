<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    // http://demos.krajee.com/widget-details/fileinput
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;

    \app\assets\DateTimePickerAsset::register($this);

    $zones = \app\models\Zone::find()->asArray()->all();
    $zones = \yii\helpers\ArrayHelper::map($zones, 'id', 'name');
?>
<div class="col-md-8 col-md-offset-2">
    <h2><?php echo $model->isNewRecord ? 'Добавить' : 'Сохранить'; ?> запись в программе</h2>
    <?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>
    <?php echo $form->field($model, 'name')->textInput(['maxlength' => 50]); ?>
    <?php echo $form->field($model, 'time')->textInput(['maxlength' => 50]); ?>
    <?php echo $form->field($model, 'day')->dropDownList(array_combine(range(1, 3), range(1, 3))); ?>
    <?php echo $form->field($model, 'zone_id')->dropDownList($zones); ?>
    <?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'submit-button']) ?>
    <?php ActiveForm::end(); ?>
</div>
