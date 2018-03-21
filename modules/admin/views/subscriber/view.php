<?php
    /** @var \app\models\Subscriber $model */
    use \yii\helpers\Html;
?>
<h1>Subscriber Details</h1>

<ul class="list-group">
    <li class="list-group-item">
        <dl>
            <dt>Subscribe Date</dt>
            <dd><?php echo Html::encode($model->subscribe_date); ?></dd>
        </dl>
    </li>
    <li class="list-group-item">
        <dl>
            <dt>Email</dt>
            <dd><?php echo Html::encode($model->email); ?></dd>
        </dl>
    </li>
    <li class="list-group-item">
        <dl>
            <dt>Phone</dt>
            <dd><?php echo Html::encode($model->phone); ?></dd>
        </dl>
    </li>
    <li class="list-group-item">
        <dl>
            <dt>First Name</dt>
            <dd><?php echo Html::encode($model->first_name); ?></dd>
        </dl>
    </li>
    <li class="list-group-item">
        <dl>
            <dt>Last Name</dt>
            <dd><?php echo Html::encode($model->last_name); ?></dd>
        </dl>
    </li>
    <li class="list-group-item">
        <dl>
            <dt>Country</dt>
            <dd><?php echo Html::encode($model->country); ?></dd>
        </dl>
    </li>
    <li class="list-group-item">
        <dl>
            <dt>Company</dt>
            <dd><?php echo Html::encode($model->company); ?></dd>
        </dl>
    </li>
</ul>
