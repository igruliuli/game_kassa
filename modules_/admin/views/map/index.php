<?php
    /* @var $form yii\bootstrap\ActiveForm */
    use googlemap\Map;
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
    use kartik\file\FileInput;

    $picture = $mapImage->getUploadedFileUrl('image');

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
        "fileclear" => 'function(e) {console.log($(e.target)); $("#image_remove").attr("value", "1")}',
        "change" => 'function(e) {console.log("change"); $("#image_remove").attr("value", "0");}',
    ];
?>

<h2>Карта феста</h2>

<?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>

<div class="admin-row">
    <?php
        echo $form->field($mapImage, 'image')->widget(FileInput::className(), [
            'options' => ['accept' => 'image/*'],
            'pluginOptions' => $inputPluginOptions,
            'pluginEvents' => $pluginEvents
        ]);
    ?>
    <?php echo $form->field($mapImage, 'image_remove')->label(false)->hiddenInput(['id' => 'image_remove']); ?>
</div>

<div class="admin-row">
    <?php echo Html::label('Местоположение феста'); ?>
    <?php
        echo Map::widget([
            'zoom' => $zoom ? : 8,
            'center' => !empty($center) ? explode(',', $center) : [41, 56],
            'width' => '100%',
            'height' => 400,
            'mapType' => Map::MAP_TYPE_ROADMAP,
            'markers' => [['id' => 1, 'position' => $center ? explode(',', $center) : [41, 56]]],
            'onClickMarker'=> new \yii\web\JsExpression('function(id, marker,map, infowindow){
            
                    }'),
            'onZoomChanged' => new \yii\web\JsExpression('function(map) {
                        $("#zoom").val(map.zoom);
                    }'),
            'onDragEnd' => new \yii\web\JsExpression('function() {
            
                    }'),
            'onMarkerDragEnd'=> new \yii\web\JsExpression('function(position) {
                        $("#center").val(position.latLng.lat() + "," + position.latLng.lng());
                    }')
        ]);
    ?>

    <?php echo \yii\bootstrap\Html::hiddenInput('zoom', $zoom, ['id' => 'zoom']); ?>
    <?php echo \yii\bootstrap\Html::hiddenInput('center', $center, ['id' => 'center']); ?>
</div>

<?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'submit-button']); ?>

<?php ActiveForm::end(); ?>
