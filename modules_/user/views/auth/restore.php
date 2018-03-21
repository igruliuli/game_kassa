<?php
	use \yii\widgets\ActiveForm;
	use app\modules\user\forms\Restore;
	use yii\helpers\Html;
	/** @var ActiveForm $activeForm */
	/** @var Restore $form */
	$this->registerCssFile('/css/form.css');
?>
<div class="page round-pink">
	<?php
		$activeForm = ActiveForm::begin([
			'options' => [
				'class' => 'form'
			],
			'enableClientValidation' => false
		]);
	?>
		<?php
			echo $activeForm->field(
				$form,
				'email',
				[
					'options' => ['class' => 'form-row'],
					'inputOptions' => ['class' => 'form-text'],
					'labelOptions' => ['class' => 'form-label']
				]
			);
		?>
		<?= Html::submitButton('Отправить', ['class' => 'button form-button', 'name' => 'restore-button']) ?>
	<?php
		ActiveForm::end();
	?>
</div>