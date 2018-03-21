<?php
/** @var \app\models\Request $model */
use yii\helpers\Html;

$this->title = 'Заявка от ' . $model->datetime;
$this->params['breadcrumbs'][] = ['url' => ['/admin/request'], 'label' => 'Заявки'];
$this->params['breadcrumbs'][] = $this->title;
?>

<h2>Заявка от <?php echo Html::encode($model->name); ?></h2>
<p>Дата: <?php echo Html::encode($model->datetime); ?></p>

<table class="table-striped table">
	<tr>
		<th style="width: 200px;">Имя</th>
		<td><?php echo Html::encode($model->name); ?></td>
	</tr>
	<tr>
		<th style="width: 100px;">Номер телефона</th>
		<td><?php echo Html::encode($model->phone); ?></td>
	</tr>
	<tr>
		<th style="width: 100px;">Email</th>
		<td><?php echo Html::encode($model->email); ?></td>
	</tr>
	<tr>
		<th style="width: 100px;">Адрес</th>
		<td><?php echo Html::encode($model->address); ?></td>
	</tr>
	<tr>
		<th style="width: 100px;">Пожелания</th>
		<td><?php echo Html::encode($model->comment); ?></td>
	</tr>
	<tr>
		<th style="width: 100px;">Кондиционеры</th>
		<td>
			<table class="table">
				<thead>
					<tr>
						<th>Тип</th>
						<th>Количество</th>
						<th>Доступ</th>
					</tr>
				</thead>
				<tbody>
					<?php if (is_array($model->conditionerData)): ?>
						<?php foreach ($model->conditionerData as $row): ?>
							<tr>
								<td><?php echo Html::encode($row['type']); ?></td>
								<td><?php echo Html::encode($row['count']); ?></td>
								<td><?php echo Html::encode($row['access']); ?></td>
							</tr>
						<?php endforeach; ?>
					<?php endif; ?>
				</tbody>
			</table>
		</td>
	</tr>
	<tr>
		<th>
			Дата ремонта
		</th>
		<td>
			<?php echo Html::encode($model->work_datetime); ?>
		</td>
	</tr>
	<tr>
		<th>
			Форма оплаты
		</th>
		<td>
			<?php if ($model->payment_type == \app\models\Request::PAYMENT_TYPE_CASH): ?>
				Наличными
			<?php endif; ?>
			<?php if ($model->payment_type == \app\models\Request::PAYMENT_TYPE_ACCOUNT): ?>
				Безналичный расчёт
			<?php endif; ?>
		</td>
	</tr>
	<tr>
		<th>Реквизиты</th>
		<td>
			<?php if ($model->bank_details_file): ?>
				<?php echo Html::a('Скачать', '/uploads/bankdetails/' . $model->bank_details_file); ?>
			<?php endif; ?>
		</td>
	</tr>
	<tr>
		<th>
			Экстренный выезд
		</th>
		<td>
			<?php echo $model->urgent ? 'Да' : 'Нет'; ?>
		</td>
	</tr>
</table>