<?php
	use yii\helpers\Html;
	use yii\bootstrap\ActiveForm;
	/** @var \yii\web\View $this */
	//$this->registerCssFile('/css/form.css');
	//$this->registerCssFile('/css/login.css');
?>

<div class="login-page col-md-offset-3 col-md-6">
	<h2 class="col-lg-offset-2 col-lg-10">Войти</h2>
	<?php $activeForm = ActiveForm::begin([
		'id' => 'login-form',
		'options' => ['class' => 'form-horizontal'],
		'fieldConfig' => [
			'template' => "{label}\n<div class=\"col-lg-6\">{input}</div>\n<div class=\"col-lg-4\">{error}</div>",
			'labelOptions' => ['class' => 'col-lg-2 control-label'],
		],
	]); ?>

	<?= $activeForm->field($form, 'email'); ?>
	<?= $activeForm->field($form, 'password')->passwordInput(); ?>

	<div class="form-group">
		<div class="col-lg-offset-2 col-lg-10">
			<?= Html::submitButton('Войти', ['class' => 'btn btn-primary', 'name' => 'login-button']) ?>
		</div>
	</div>

	<?php ActiveForm::end(); ?>
</div>