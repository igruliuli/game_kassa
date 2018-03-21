<?php

use yii\grid\GridView;
use yii\helpers\Html;

/* @var $dataProvider yii\data\ActiveDataProvider */
?>

<?php if (!empty($title)): ?>
	<h2><?php echo $title; ?></h2>
<?php endif; ?>

<div class="admin-row">
	<?php
		foreach ($buttons as $button) {
			echo Html::a($button['text'], $button['url'], isset($button['options']) ? $button['options'] : []);
		}
	?>
</div>

<?php

echo GridView::widget([
	'dataProvider' => $dataProvider,
	'id' => 'list-action-grid',
	'filterModel' => $searchModel,
	'options' => ['class' => 'detail-grid-view'],
	'columns' => $columns,
]);