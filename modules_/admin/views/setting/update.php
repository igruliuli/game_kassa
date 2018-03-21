<?php
	use yii\helpers\Html;
	use yii\bootstrap\ActiveForm;

	/** @var \app\modules\admin\forms\SettingForm $form */

	$this->title = 'Изменить настройки';
	$this->params['breadcrumbs'][] = $this->title;
?>

<h1><?php echo $this->title; ?></h1>

<?php
	$activeForm = ActiveForm::begin(
		[
			'id' => 'manage-form',
			'options' => [
				'autocomplete' => 'off',
				'class' => 'admin-form'
			],
		]
	);
?>

<?php echo $activeForm->field($form, 'company_name'); ?>
<?php echo $activeForm->field($form, 'email'); ?>
<?php echo $activeForm->field($form, 'email_notify'); ?>
<?php echo $activeForm->field($form, 'phone'); ?>
<?php echo $activeForm->field($form, 'waiting_days'); ?>

<?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'save-button']); ?>

<?php ActiveForm::end(); ?>