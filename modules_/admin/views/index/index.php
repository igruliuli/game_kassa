<?php
	/** @var \yii\web\View $this */
	use yii\helpers\Html;
	/* @var $form yii\bootstrap\ActiveForm */
	use yii\bootstrap\ActiveForm;

	\app\assets\DateTimePickerAsset::register($this);
?>

<div class="panel panel-primary">
	<div class="panel-heading">До феста осталось:</div>
	<div class="panel-body">
        <div class="col-sm-10">
            <?php if ($interval): ?>
		        <h2><?php echo sprintf('%d дней %d часов %d минут', $interval->days, $interval->h, $interval->i); ?></h2>
            <?php endif; ?>
        </div>
        <div class="col-sm-4">
            <form action="<?php echo \yii\helpers\Url::toRoute(['save-timer']); ?>" method="post">
                <div class="form-group">
                    <label for="datetimepicker" class="control-label">Установить дату</label>
                    <div class="input-group date" id='datetimepicker'>
                        <?php echo Html::input('text', 'time', $time, ['class' => 'form-control']); ?>
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
                <div class="form-group">
                    <?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'submit-button']) ?>
                </div>
            </form>
        </div>
	</div>
</div>

<div class="panel panel-primary">
    <div class="panel-heading">Управление разделами</div>
    <div class="panel-body">
        <div class="col-sm-4">
            <form action="<?php echo \yii\helpers\Url::toRoute(['save-blocks']); ?>" method="post">
                <div class="form-group">
                    <label for="program" class="control-label">Отметьте нужные пункты</label>
                    <div class="input-group date" id='program'>
                        <?php echo Html::checkbox('program', \config\Config::getValue('program_status'), ['label' => 'Программа']); ?><br/>
                        <?php echo Html::checkbox('lektory', \config\Config::getValue('lektory_status'), ['label' => 'Лекторий']); ?>
                    </div>
                </div>
                <div class="form-group">
                    <?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'submit-button']) ?>
                </div>
            </form>
        </div>
    </div>
</div>