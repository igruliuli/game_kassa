<?php
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model yii\db\ActiveRecord */
use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
use ckeditor\CKEditor;
use yii\helpers\Url;
?>

<?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off']]); ?>
<?php echo $form->field($model, 'text')->widget(
    CKEditor::className(),
    [
        'editorOptions' => [
            'language' => 'ru',
            'extraPlugins' => 'justify,youtube',
            'toolbar' => [
                ["Bold","Link"],
                ["BulletedList"]
            ]
        ]
    ]
); ?>
<?php echo Html::submitButton(Yii::t('admin', 'Save'), ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
<?php ActiveForm::end(); ?>
