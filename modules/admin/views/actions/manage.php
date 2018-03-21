<?php
	/* @var $form yii\bootstrap\ActiveForm */
	/* @var array $elements  */
	/* @var $model yii\db\ActiveRecord */
	use yii\bootstrap\ActiveForm;
	use yii\helpers\Html;
?>
<h1>
	<?php echo Html::encode($title); ?>
</h1>
<?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off']]); ?>
	<?php foreach ($elements as $attribute => $element): ?>
		<?php
			$field = $form->field($model, $attribute);
			echo call_user_func_array([$field, $element['type']], isset($element['config']) ? $element['config'] : []);
		?>
	<?php endforeach; ?>
	<?php echo Html::submitButton('Save', ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
<?php ActiveForm::end(); ?>