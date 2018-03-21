<?php
    /* @var $form yii\bootstrap\ActiveForm */
    /* @var $model yii\db\ActiveRecord */
    // http://demos.krajee.com/widget-details/fileinput
    /** @var \app\modules\admin\forms\DocForm $docForm */
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
    use kartik\file\FileInput;

    $visiting_rules = $docForm->getUploadedFileUrl('visiting_rules');
    $inputVisitingRulesPluginOptions = [
        'showUpload' => false,
        'browseLabel' => 'Выбрать',
        //'removeLabel' => '',
        'showPreview' => false,
        'showCaption' => true,
        'initialPreviewAsData'=>true,
        //'elCaptionText' => '#customCaptionDoc',
        'overwriteInitial'=>false,
        'maxFileSize'=>5000,
        //'mainClass' => 'input-group-lg',
        'initialPreviewConfig' => [
            'caption' => 'wrwer'
        ]
    ];

    if ($visiting_rules) {
        $inputVisitingRulesPluginOptions['initialPreview'] = [$visiting_rules];
        //$inputDocPluginOptions['initialCaption'] = basename($doc);
    }

    $pluginVisitingRulesEvents = [
        "fileclear" => 'function(e) {console.log($(e.target)); $("#visiting_rules_remove").attr("value", "1")}',
        "change" => 'function(e) {console.log("change"); $("#visiting_rules_remove").attr("value", "0");}',
    ];

    $participation_terms = $docForm->getUploadedFileUrl('participation_terms');
    $inputParticipationTermsPluginOptions = [
        'showUpload' => false,
        'browseLabel' => 'Выбрать',
        //'removeLabel' => '',
        'showPreview' => false,
        'showCaption' => true,
        'initialPreviewAsData'=>true,
        //'elCaptionText' => '#customCaptionDoc',
        'overwriteInitial'=>false,
        'maxFileSize'=>5000,
        //'mainClass' => 'input-group-lg',
        'initialPreviewConfig' => [
            'caption' => 'wrwer'
        ]
    ];

    if ($participation_terms) {
        $inputParticipationTermsPluginOptions['initialPreview'] = [$participation_terms];
        //$inputDocPluginOptions['initialCaption'] = basename($doc);
    }

    $pluginParticipationTermsEvents = [
        "fileclear" => 'function(e) {console.log($(e.target)); $("#participation_terms_remove").attr("value", "1")}',
        "change" => 'function(e) {console.log("change"); $("#participation_terms_remove").attr("value", "0");}',
    ];

    $sponsorship_proposal = $docForm->getUploadedFileUrl('sponsorship_proposal');
    $inputMediaRulesPluginOptions = [
        'showUpload' => false,
        'browseLabel' => 'Выбрать',
        //'removeLabel' => '',
        'showPreview' => false,
        'showCaption' => true,
        'initialPreviewAsData'=>true,
        //'elCaptionText' => '#customCaptionDoc',
        'overwriteInitial'=>false,
        'maxFileSize'=>5000,
        //'mainClass' => 'input-group-lg',
        'initialPreviewConfig' => [
            'caption' => 'wrwer'
        ]
    ];

    if ($sponsorship_proposal) {
        $inputMediaRulesPluginOptions['initialPreview'] = [$sponsorship_proposal];
        //$inputDocPluginOptions['initialCaption'] = basename($media_rules);
    }

    $pluginMediaRulesEvents = [
        "fileclear" => 'function(e) {console.log($(e.target)); $("#sponsorship_proposal_remove").attr("value", "1")}',
        "change" => 'function(e) {console.log("change"); $("#sponsorship_proposal_remove").attr("value", "0");}',
    ];
?>

<?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>

<div class="row">
    <div class="col-md-8 col-md-offset-2">

        <h1>Документы и ссылки</h1>

        <?php
            echo $form->field($docForm, 'visiting_rules')->widget(FileInput::className(), [
                'pluginOptions' => $inputVisitingRulesPluginOptions,
                'pluginEvents' => $pluginVisitingRulesEvents
            ]);
        ?>
        <?php echo $form->field($docForm, 'visiting_rules_remove')->label(false)->hiddenInput(['id' => 'visiting_rules_remove']); ?>
        <?php
//            echo $form->field($docForm, 'participation_terms')->widget(FileInput::className(), [
//                'pluginOptions' => $inputParticipationTermsPluginOptions,
//                'pluginEvents' => $pluginParticipationTermsEvents
//            ]);
        ?>
        <?php echo $form->field($docForm, 'participation_terms_remove')->label(false)->hiddenInput(['id' => 'participation_terms_remove']); ?>
        <?php
//            echo $form->field($docForm, 'sponsorship_proposal')->widget(FileInput::className(), [
//                'pluginOptions' => $inputMediaRulesPluginOptions,
//                'pluginEvents' => $pluginMediaRulesEvents
//            ]);
        ?>
        <?php echo $form->field($docForm, 'sponsorship_proposal_remove')->label(false)->hiddenInput(['id' => 'sponsorship_proposal_remove']); ?>

        <?php echo $form->field($docForm, 'participant_form')->textInput() ?>
        <?php echo $form->field($docForm, 'sponsor_form')->textInput() ?>

        <?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
    </div>
</div>
<?php ActiveForm::end(); ?>
