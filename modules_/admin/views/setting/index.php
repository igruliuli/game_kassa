<?php
	/* @var $form yii\bootstrap\ActiveForm */
	use yii\helpers\Html;
	use yii\bootstrap\ActiveForm;

	$this->title = 'Настройки';
?>

<div class="col-md-8 col-md-offset-2">
	<h1><?php echo $this->title; ?></h1>

	<h4>Настройки аккаунта администратора</h4>

	<?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>
		<?php echo $form->field($user, 'email')->textInput(); ?>
		<?php echo $form->field($user, 'new_password')->passwordInput(); ?>
		<?php echo $form->field($user, 'new_password_repeat')->passwordInput(); ?>
		<?php echo Html::submitButton('Save', ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
	<?php ActiveForm::end(); ?>
</div>
