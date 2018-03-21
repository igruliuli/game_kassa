<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
    use ckeditor\CKEditor;
    use yii\helpers\Url;
?>

<h2>О фестивале</h2>

<?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off']]); ?>
<?php //echo $form->field($model, 'tickets_sold')->textInput(); ?>
<?php echo $form->field($model, 'about_text')->widget(
    CKEditor::className(),
    [
        'editorOptions' => [
            'language' => 'ru',
            'extraPlugins' => 'justify,youtube',
            'filebrowserImageUploadUrl' => Url::toRoute(['/admin/zone-activity/upload']),
            'toolbar' => [
                ["Bold","Link"],
                ["BulletedList"]
            ]
        ]
    ]
); ?>
<?php echo $form->field($model, 'buy_ticket')->widget(
    CKEditor::className(),
    [
        'editorOptions' => [
            'language' => 'ru',
            'extraPlugins' => 'justify,youtube',
            'filebrowserImageUploadUrl' => Url::toRoute(['/admin/zone-activity/upload']),
            'toolbar' => [
                ["Bold","Link"],
                ["BulletedList"]
            ]
        ]
    ]
); ?>
<?php
//echo $form->field($model, 'event_us')->widget(
//    CKEditor::className(),
//    [
//        'editorOptions' => [
//            'language' => 'ru',
//            'extraPlugins' => 'justify,youtube',
//            'filebrowserImageUploadUrl' => Url::toRoute(['/admin/zone-activity/upload']),
//            'toolbar' => [
//                ["Bold","Link"],
//                ["BulletedList"]
//            ]
//        ]
//    ]
//);
?>
<?php
//echo $form->field($model, 'smi')->widget(
//    CKEditor::className(),
//    [
//        'editorOptions' => [
//            'language' => 'ru',
//            'extraPlugins' => 'justify,youtube',
//            'filebrowserImageUploadUrl' => Url::toRoute(['/admin/zone-activity/upload']),
//            'toolbar' => [
//                ["Bold","Link"],
//                ["BulletedList"]
//            ]
//        ]
//    ]
//);
?>
<?php echo $form->field($model, 'meta_title')->textInput(); ?>
<?php echo $form->field($model, 'meta_description')->textarea(['rows' => 5]); ?>
<?php echo Html::submitButton(Yii::t('admin', 'Save'), ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
<?php ActiveForm::end(); ?>
