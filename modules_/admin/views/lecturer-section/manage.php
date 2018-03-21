<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
    use kartik\file\FileInput;
    use yii\helpers\Url;
?>
<div class="col-md-8 col-md-offset-2">
    <h1>Добавить / Сохранить Секцию лектория</h1>
    <?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>
    <?php echo $form->field($model, 'name')->textInput(['maxlength' => 35]); ?>
    <?php echo $form->field($model, 'day')->dropDownList(['' => ''] + array_combine(range(1, 3), range(1, 3))); ?>
    <?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'submit-button']) ?>
    <?php ActiveForm::end(); ?>
</div>
