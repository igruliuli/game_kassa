<div class="row">
    <div class="col-sm-3 footer-row hide-col">
        <div class="footer-col">
            <div class="footer-point"></div>
        </div>
        <div class="footer-col">
            <div class="footer-point"></div>
        </div>
        <div class="footer-col">
            <div class="footer-point"></div>
        </div>
    </div>
    <div class="col-sm-6 footer-row footer-stroke-white">
        <div class="chapter"><a name="down6">ЛЕКТОРИЙ</a></div>
        <div class="slesh">////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</div>
        <div></div>
    </div>
    <div class="col-sm-3 footer-row visible hide-col">
        <div class="footer-col2">
            <div class="footer-point2"></div>
            <div class="footer-point2"></div>
        </div>
        <div class="point-holder">
            <div class="footer-point2"></div>
            <div class="footer-point2"></div>
            <div class="footer-point2"></div>
            <div class="footer-point2"></div>
            <div class="footer-point2"></div>
            <div class="footer-point2"></div>
        </div>
    </div>
</div>

    <div class="container marg">
        <div id="fourthCarousel" class="marg carousel slide" data-ride="carousel" data-interval="false">
            <div class="col-md-12 pop-up2 carousel-inner" role="listbox">
                <div class="col-xs-2 no-padding prev-but" id="prev-but3">
                    <a class="slide-zone big-text2 left carousel-control" href="#fourthCarousel" role="button" data-slide="prev"><</a>
                </div>
                <div class="col-xs-2 no-padding next-but" id="next-but3">
                    <a class="slide-zone big-text2 right carousel-control" href="#fourthCarousel" role="button" data-slide="next">></a>
                </div>

                <?php $activeItem = true; ?>
                <?php
                    /** @var \app\models\Lecturer[] $items */
                    $dayDates = [
                        '17 сентября',
                        '18 сентября',
                    ];
                ?>
                <?php foreach ($list as $day => $sections): ?>
                    <div class="row marg item <?php echo $activeItem ? 'active' : ''; ?>">
                        <div class="wrapper-head-carousel">
                            <div class="col-xs-2 visible no-padding">
                                <div class="button-point-holder left">
                                    <?php echo $this->render('//index/_points', ['num' => 49]); ?>
                                    <div style="clear:left"></div>
                                </div>
                            </div>
                            <div class="col-xs-8  no-padding">
                                <div class="chapter-zone"><?php echo $day; ?>-Й ДЕНЬ, <?php echo $dayDates[$day-1]; ?></div>
                            </div>
                            <div class="col-xs-2 visible no-padding">
                                <div class="button-point-holder right">
                                    <?php echo $this->render('//index/_points', ['num' => 49]); ?>
                                    <div style="clear:left"></div>
                                </div>
                            </div>
                        </div>

                        <div class="lecturer-list">
                            <?php foreach ($sections as $section): ?>
                                <div class="col-md-12 chapter" style="margin-top:20px"><?php echo \yii\helpers\Html::encode($section->name); ?> <hr></div>
                                <div class="row">
                                    <?php
                                        $items = $section->lecturers;
                                        $columnSize = ceil(count($items) / 2);
                                    ?>
                                    <?php $offset = 0; ?>
                                    <?php while ($chunk = array_slice($items, $offset, $columnSize)): ?>
                                        <div class="col-md-6 col-sm-12 lecturer-item">
                                            <?php foreach ($chunk as $item): ?>
                                                <div class="row marg">
                                                    <div class="col-sm-2 center-text">
                                                        <div class="big-text3"><?php echo $item->time; ?></div>
                                                    </div>
                                                    <div class="col-sm-10 center-pogram">
                                                        <div class="left">
                                                            <div class="speaker-tem"><?php echo \yii\helpers\Html::encode($item->topic); ?></div>
                                                            <div class="speaker-name"><?php echo \yii\helpers\Html::encode($item->name); ?></div>
                                                            <div><?php echo \yii\helpers\Html::encode($item->position); ?></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <?php endforeach; ?>
                                        </div>
                                        <?php $offset += $columnSize; ?>
                                    <?php endwhile; ?>
                                </div>
                            <?php endforeach; ?>

                        </div>

                        <div class="wrapper-head-carousel">
                            <div class="col-xs-2 visible no-padding">
                                <div class="button-point-holder left">
                                    <?php echo $this->render('//index/_points', ['num' => 49]); ?>
                                    <div style="clear:left"></div>
                                </div>
                            </div>
                            <div class="col-xs-8  no-padding">
                                <div class="chapter-zone"><?php echo $day; ?>-Й ДЕНЬ, <?php echo $dayDates[$day-1]; ?></div>
                            </div>
                            <div class="col-xs-2 visible no-padding">
                                <div class="button-point-holder right">
                                    <?php echo $this->render('//index/_points', ['num' => 49]); ?>
                                    <div style="clear:left"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php $activeItem = false; ?>
                <?php endforeach; ?>
                <div class="col-xs-2 no-padding prev-but bottom-nav">
                    <a class="slide-zone big-text2 left carousel-control" href="#fourthCarousel" role="button" data-slide="prev"><</a>
                </div>
                <div class="col-xs-2 no-padding next-but bottom-nav">
                    <a class="slide-zone big-text2 right carousel-control" href="#fourthCarousel" role="button" data-slide="next">></a>
                </div>
            </div>
        </div>
    </div>