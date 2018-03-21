<?php
    use googlemap\Map;
?>

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
        <div class="chapter"><a name="down8">Карта фестиваля</a></div>
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

<div class="container" style="padding-top: 50px;">
    <div class="row">
        <div>
            <?php echo \yii\helpers\Html::img($map->getImageFileUrl('image'), ['class' => 'map']); ?>
        </div>
    </div>
    <div class="row center-text marg">
        <div class="admin-row">
            <?php
                $zoom = \config\Config::getValue('map_zoom');
                $center = \config\Config::getValue('map_center');
                echo Map::widget([
                    'zoom' => $zoom ? : 8,
                    'markerDraggable' => false,
                    'center' => !empty($center) ? explode(',', $center) : [41, 56],
                    'width' => '100%',
                    'height' => 400,
                    'mapType' => Map::MAP_TYPE_ROADMAP,
                    'markers' => [['id' => 1, 'position' => $center ? explode(',', $center) : [41, 56]]],
                    'onClickMarker' => new \yii\web\JsExpression('function(id, marker,map, infowindow){
                            var content = \'<div jstcache="3" class="title full-width">Парк Развлечений Лавина</div><div class="address"> <div jstcache="4" jsinstance="0" class="address-line full-width">вулиця Космічна, 20</div><div jstcache="4" jsinstance="1" class="address-line full-width">Дніпро́</div><div jstcache="4" jsinstance="2" class="address-line full-width">Дніпропетровська область, Украина</div><div jstcache="4" jsinstance="*3" class="address-line full-width">49000</div> </div>\';
                            content += \'<div>\' + marker.getPosition().lat() + \',\' + marker.getPosition().lng() + \'</div>\';
                          infowindow.setContent(content);
                          infowindow.open(map, marker);
                    }'),
                ]);
            ?>
        </div>
    </div>
</div>