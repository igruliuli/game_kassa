<?php
    use yii\helpers\Html;
    use yii\bootstrap\ActiveForm;

    /** @var \app\models\Product $model */

    $this->title = 'Техника';
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

<?php echo $activeForm->field($model, 'name')->textInput(); ?>
<?php echo $activeForm->field($model, 'url')->textInput(); ?>

<?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'save-button']); ?>

<?php ActiveForm::end(); ?>