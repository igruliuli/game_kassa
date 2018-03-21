<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
?>

<h2>Текст на главной</h2>

<?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off']]); ?>
<?php echo $form->field($model, 'right_top_block')->textarea(['rows' => 5]); ?>
<?php echo $form->field($model, 'text_on_button')->textInput(); ?>
<?php echo $form->field($model, 'day')->textInput(); ?>
<?php echo $form->field($model, 'date')->textInput(); ?>
<?php echo $form->field($model, 'lektory_text')->textarea(['rows' => 5]); ?>
<?php echo $form->field($model, 'city')->textInput(); ?>
<?php echo $form->field($model, 'contacts')->textarea(['rows' => 3]); ?>
<?php echo Html::submitButton(Yii::t('admin', 'Save'), ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
<?php ActiveForm::end(); ?>