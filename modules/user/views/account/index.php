<?php
	/** @var \yii\web\View $this */
	use app\modules\user\assets\AccountAsset;
	use \yii\widgets\ActiveForm;
	use yii\helpers\Html;

	AccountAsset::register($this);
	$this->registerCssFile('/css/form.css');
?>
<div class="profile main-content">
	<div class="title">
		Профиль пользователя
	</div>
	<?php
		echo Html::errorSummary($form, ['class' => 'form-errors']);
	?>
	<?php
		$activeForm = ActiveForm::begin([
			'options' => [
				'class' => 'form'
			],
			'enableClientValidation' => false
		]);
	?>
		<div class="profile-left">
			<div class="form-row">
				<label>Email</label>
				<?php echo Html::activeTextInput($form, 'email'); ?>
			</div>
			<div class="form-row">
				<label>Имя</label>
				<?php echo Html::activeTextInput($form, 'name'); ?>
			</div>
			<div class="form-row">
				<label>Телефон</label>
				<?php echo Html::activeTextInput($form, 'phone'); ?>
			</div>
			<button class="button">
				Сохранить изменения
			</button>
		</div>
		<div class="profile-right">
			<div class="form-title">
				Изменение пароля
			</div>
			<div class="form-row">
				<label>Старый пароль</label>
				<?php echo Html::activePasswordInput($form, 'password'); ?>
				<div class="hint">Введите свой старый пароль</div>
			</div>
			<div class="form-row">
				<label>Новый пароль</label>
				<?php echo Html::activePasswordInput($form, 'new_password'); ?>
				<div class="hint">Введите свой новый пароль</div>
				<?php echo Html::activePasswordInput($form, 'new_password_repeat'); ?>
				<div class="hint">Повторите свой новый пароль</div>
			</div>
		</div>
	<?php
		ActiveForm::end();
	?>
</div>