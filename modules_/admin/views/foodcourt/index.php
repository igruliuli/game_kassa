<?php
    /* @var $form yii\bootstrap\ActiveForm */
    use sortablelist\SortableListView;
    use yii\bootstrap\ActiveForm;
    use yii\helpers\Html;
?>

<h2>Фудкорт</h2>

<div class="admin-row">
    <?php $form = ActiveForm::begin(['id' => 'manage-form', 'options' => ['autocomplete' => 'off', 'enctype' => 'multipart/form-data']]); ?>
    <?php echo $form->field($text, 'text')->textarea(['rows' => 5]); ?>
    <?php echo Html::submitButton('Сохранить', ['class' => 'btn btn-primary', 'name' => 'submit-button']) ?>
    <?php ActiveForm::end(); ?>
</div>


<div class="admin-row">
    <?php echo Html::a('Добавить', ['/admin/foodcourt/manage'], ['class' => 'btn btn-primary']); ?>
</div>

<div class="row">
    <?php
        echo SortableListView::widget([
            'dataProvider' => new \yii\data\ActiveDataProvider([
                'query' => \app\models\Foodcourt::find()->orderBy('order'),
                'pagination' => false
            ]),
            'layout' => '{items}',
            'itemView' => '_item',
            'options' => [
                'class' => 'zone-list'
            ],
            'itemOptions' => [
                'class' => 'col-md-3 sortable-item'
            ]
        ]);
    ?>
</div>
