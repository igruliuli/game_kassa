<?php
	use yii\helpers\Html;
	use admin\assets\AdminAsset;
	use yii\bootstrap\Nav;
	use yii\bootstrap\NavBar;

	AdminAsset::register($this);
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" ng-app="FxApp">
	<head>
		<meta charset="<?= Yii::$app->charset ?>"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?= Html::csrfMetaTags() ?>
		<title><?= Html::encode($this->title) ?></title>
		<script src="/js/angular.min.js"></script>
		<script src="/js/ui-bootstrap-tpls-0.12.0.min.js"></script>
		<script src="/js/fx/angular.js"></script>
		<script type="text/javascript">
			fxAngular.inject('ui.bootstrap');
		</script>
		<?php $this->head() ?>
	</head>
	<body style="padding-top: 65px;">
		<?php $this->beginBody() ?>
		<?php
			NavBar::begin([
				'brandLabel' => Yii::$app->params['appName'],
				'brandUrl' => Yii::$app->homeUrl,
				'brandOptions' => [
					'target' => '_blank'
				],
				'options' => [
					'class' => 'navbar navbar-default navbar-fixed-top',
				],
			]);
				echo Nav::widget([
					'options' => ['class' => 'navbar-nav'],
					'activateParents' => true,
					'items' => [
						['label' => 'Главная', 'url' => ['/admin/index/index']],
						['label' => 'Зоны', 'url' => ['/admin/zone/index']],
						['label' => 'Программа', 'url' => ['/admin/program/index']],
						[
							'label' => 'Лекторий',
							'url' => ['#'],
							'items' => [
								[
									'url' => ['/admin/lecturer/index'],
									'label' => 'Программа'
								],
								[
									'url' => ['/admin/lecturer-section/list'],
									'label' => 'Блоки'
								]
							]
						],
						['label' => 'Партнёры', 'url' => ['/admin/partner/index']],
						['label' => 'Участники', 'url' => ['/admin/participants/index']],
						['label' => 'Фудкорт', 'url' => ['/admin/foodcourt/index']],
						['label' => 'Карта', 'url' => ['/admin/map/index']],
						[
							'label' => 'Содержимое',
							'url' => ['#'],
							'items' => [
								[
									'label' => 'Карусель',
									'url' => ['/admin/carousel/index']
								],
								[
									'label' => 'Новости',
									'url' => ['/admin/news/index']
								],
								[
									'label' => 'О фестивале',
									'url' => ['/admin/about/index']
								],
								[
									'label' => 'Текст на главной',
									'url' => ['/admin/main/index']
								],
								[
									'label' => 'Документы и ссылки',
									'url' => ['/admin/links/index']
								],
								[
									'label' => 'Контакты',
									'url' => ['/admin/contact/index']
								],
							]
						],
                        ['label' => 'Настройки', 'url' => ['/admin/setting/index']],
                        ['label' => 'Выйти', 'url' => ['/user/auth/logout'], 'linkOptions' => ['data-method' => 'post']],
					],
				]);
			NavBar::end();
		?>
		<div class="container">
			<?php echo $content ?>
		</div>
		<?php $this->endBody() ?>
	</body>
</html>
<?php $this->endPage() ?>