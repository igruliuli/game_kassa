<div class="container marg">
    <div class="row marg">
        <?php

            $widget = \yii\widgets\ListView::begin([
                'dataProvider' => $news,
                'itemView' => '_news-item',
                'layout' => '{items}',
                'pager' => [
                    'nextPageLabel' => '<span>&gt;</span>',
                    'prevPageLabel' => '<span>&lt;</span>'
                ]
            ]);

            \yii\widgets\ListView::end();

        ?>
    </div>

    <div class="row right-text">
        <?php echo $widget->renderPager(); ?>
    </div>

    <?php foreach ($news->getModels() as $item): ?>
        <div class="news-content container marg" id="news<?php echo $item->id ?>">
            <div class="row news">
                <div class="date-yellow-news"></div>
                <div class="date-white-news text3">
                    <h3><?php echo $item->title; ?></h3>
                    <h4><?php echo $item->text; ?></h4>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
