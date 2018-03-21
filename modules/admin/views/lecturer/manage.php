<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    // http://demos.krajee.com/widget-details/fileinput
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
    use kartik\file\FileInput;

    $picture = $model->getUploadedFileUrl('photo');
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
        "fileclear" => 'function(e) {console.log($(e.target)); $("#photo_remove").attr("value", "1")}',
        "change" => 'function(e) {console.log("change"); $("#photo_remove").attr("value", "0");}',
    ];

    \app\assets\DateTimePickerAsset::register($this);

    $sections = \app\models\LecturerSection::find()->asArray()->all();
    $sections = \yii\helpers\ArrayHelper::map($sections, 'id', function($element) {
        return $element['name'] . ' / День №' . $element['day'];
    });
?>
<div class="col-md-8 col-md-offset-2">
    <h2><?php echo $model->isNewRecord ? 'Добавить' : 'Сохранить'; ?> запись в лектории</h2>
    <?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>
    <?php echo $form->field($model, 'name')->textInput(['maxlength' => 50]); ?>
    <?php echo $form->field($model, 'time')->textInput(['maxlength' => 50]); ?>
    <?php echo $form->field($model, 'section_id')->dropDownList(['' => ''] + $sections); ?>
    <?php echo $form->field($model, 'position')->textInput(['maxlength' => 128]); ?>
    <?php echo $form->field($model, 'topic')->textarea(['rows' => 5, 'maxlength' => 80]); ?>
    <?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'submit-button']) ?>
    <?php ActiveForm::end(); ?>
</div>
