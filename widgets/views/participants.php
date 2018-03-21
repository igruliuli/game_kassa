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
        <div class="chapter"><a name="down7">УЧАСТНИКИ</a></div>
        <div class="slesh">
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </div>
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

<?php
/** @var \app\models\Partner[] $list */
$listZise = count($list);
$page = 0;
?>

<div id="participantCarousel" class="partner-carousel partner-carousel-fix carousel slide marg" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
        <?php while ($page * 12 < $listZise): ?>
            <?php $sublist = array_slice($list, $page * 12, 12); ?>
            <?php $subpage = 0; ?>
            <div class="row marg2 item second-slide <?php echo $page == 0 ? 'active' : ''; ?>">
                <?php while ($subpage * 6 < count($sublist)): ?>
                    <div class="row marg">
                        <?php foreach (array_slice($sublist, $subpage * 6, 6) as $item): ?>
                            <div class="col-md-2 col-sm-4 col-xs-6 center-text">
                                <a href="<?php echo $item->url; ?>" target="_blank" rel="nofollow">
                                    <?php echo \yii\helpers\Html::img($item->getThumbFileUrl('picture', 'normal'), ['class' => 'patner']); ?>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <?php $subpage++; ?>
                <?php endwhile; ?>
            </div>
            <?php $page++; ?>
        <?php endwhile; ?>
    </div>
    <a class="left carousel-control yelow-control " href="/#participantCarousel"
       role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control yelow-control " href="/#participantCarousel"
       role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

<div class="row marg">
    <div class="gform2 text"><a class="t-blank" href="<?php echo $doc->participant_form; ?>" target="_blank">Стать
            участником</a></div>
</div>