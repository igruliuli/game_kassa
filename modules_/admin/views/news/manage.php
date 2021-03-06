<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    // http://demos.krajee.com/widget-details/fileinput
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
    use kartik\file\FileInput;
    use ckeditor\CKEditor;
    use yii\helpers\Url;

    $picture = $model->getUploadedFileUrl('picture');
    $inputPluginOptions = [
        'showUpload' => false,
        'browseLabel' => 'Выбрать',
        //'removeLabel' => '',
        //'showPreview' => false,
        'showCaption' => false,
        'initialPreviewAsData'=>true,
        'elCaptionText' => '#customCaption',
        //'overwriteInitial'=>false
        //'mainClass' => 'input-group-lg'
    ];

    if ($picture) {
        $inputPluginOptions['initialPreview'] = [$picture];
    }

    $pluginEvents = [
        "fileclear" => 'function(e) {console.log($(e.target)); $("#picture_remove").attr("value", "1")}',
        "change" => 'function(e) {console.log("change"); $("#picture_remove").attr("value", "0");}',
    ];
?>
<div class="col-md-8 col-md-offset-2">
    <h1>Добавить / Сохранить Новость</h1>
    <?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>
    <?php echo $form->field($model, 'title')->textInput(['maxlength' => 40]); ?>
    <?php
        echo $form->field($model, 'picture')->widget(FileInput::className(), [
        'options' => ['accept' => 'image/*'],
        'pluginOptions' => $inputPluginOptions,
        'pluginEvents' => $pluginEvents
    ]);
    ?>
    <?php echo $form->field($model, 'text')->widget(
        CKEditor::className(),
        [
            'editorOptions' => [
                'language' => 'ru',
                'extraPlugins' => 'justify,youtube',
                'filebrowserImageUploadUrl' => Url::toRoute(['/admin/news/upload']),
                'toolbar' => [
                    ["Source","-","Bold","Italic","Link"],
                    ["BulletedList","NumberedList"],
                    ['JustifyLeft', "JustifyCenter", 'JustifyRight', 'JustifyBlock'],
                    ["Format"],["Image"],["Youtube"]
                ]
            ]
        ]
    ); ?>
    
    <?php echo $form->field($model, 'picture_remove')->label(false)->hiddenInput(['id' => 'picture_remove']); ?>
    <?php echo Html::submitButton('Save', ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
    <?php ActiveForm::end(); ?>
</div>
