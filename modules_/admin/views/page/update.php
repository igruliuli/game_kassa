<?php
    use yii\helpers\Html;
    use yii\bootstrap\ActiveForm;

    /** @var \app\models\PageUrl $model */

    $this->title = 'Страница';
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

<?php echo $activeForm->field($model, 'url')->textInput(); ?>
<?php echo $activeForm->field($model, 'region'); ?>
<?php echo $activeForm->field($model, 'model'); ?>

<?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'save-button']); ?>

<?php ActiveForm::end(); ?>