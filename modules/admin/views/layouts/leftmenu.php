<?php
    use yii\helpers\Url;
    use yii\helpers\Html;
    use yii\widgets\Breadcrumbs;
    /** @var \yii\base\View $this */

    $controllerName = Yii::$app->controller->id;
?>

<?php $this->beginContent('@admin/views/layouts/admin.php'); ?>
    <div class="col-md-2 admin-leftmenu">
        <div class="list-group">
            <?php echo Html::a('Заблокированные IP',
                ['/admin/ip/index'],
                ['class' => 'list-group-item' . ($controllerName == 'ip' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Настройки системы',
                ['/admin/setting/index'],
                ['class' => 'list-group-item' . ($controllerName == 'setting' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Шаблоны надписей',
                ['/admin/template/index'],
                ['class' => 'list-group-item' . ($controllerName == 'template' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Ссылки',
                ['/admin/url-rule/index'],
                ['class' => 'list-group-item' . ($controllerName == 'url-rule' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Техника',
                ['/admin/product/index'],
                ['class' => 'list-group-item' . ($controllerName == 'product' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Услуги',
                ['/admin/service/index'],
                ['class' => 'list-group-item' . ($controllerName == 'service' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Регионы',
                ['/admin/region/index'],
                ['class' => 'list-group-item' . ($controllerName == 'region' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Марки',
                ['/admin/model/index'],
                ['class' => 'list-group-item' . ($controllerName == 'model' ? ' active' : '')]
            ); ?>
            <?php echo Html::a('Изменить пароль',
                ['#'],
                ['class' => 'list-group-item' . ($controllerName == 'password' ? ' active' : '')]
            ); ?>
            <?php /* echo Html::a('Настройки текстов',
                ['/admin/content-text/index'],
                ['class' => 'list-group-item' . ($controllerName == 'content-text' ? ' active' : '')]
            ); */ ?>
        </div>
    </div>
    <div class="col-md-10">
        <?= Breadcrumbs::widget([
            'homeLink' => ['url' => Yii::$app->urlManager->createUrl('/admin'), 'label' => Yii::t('yii', 'Home')],
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?php echo $content; ?>
    </div>
<?php $this->endContent(); ?>