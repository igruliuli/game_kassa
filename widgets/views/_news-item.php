<?php $picture = $model->getThumbFileUrl('picture', 'normal'); ?>
<div class="col-md-4 col-sm-6  no-padding">
    <div class="news center-text">
        <?php echo \yii\helpers\Html::img($picture); ?>
    </div>
    <div class="news">
        <a href="#news<?php echo $model->id ?>" class="to-news">
            <div class="news-title text"><?php echo $model->title; ?></div>
        </a>
    </div>
</div>