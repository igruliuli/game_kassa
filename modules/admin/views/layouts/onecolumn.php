<?php
use yii\helpers\Url;
use yii\helpers\Html;
use yii\widgets\Breadcrumbs;
/** @var \yii\base\View $this */

$controllerName = Yii::$app->controller->id;
?>

<?php $this->beginContent('@admin/views/layouts/admin.php'); ?>
    <?= Breadcrumbs::widget([
        'homeLink' => ['url' => Yii::$app->urlManager->createUrl('/admin'), 'label' => Yii::t('yii', 'Home')],
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]) ?>
    <?php echo $content; ?>
<?php $this->endContent(); ?>