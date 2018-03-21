<?php
namespace googlemap;
use yii\web\AssetBundle;
class MapAsset extends AssetBundle
{
    public $sourcePath = '@bower/google-maps-js-marker-clusterer/src';
    public $js = [
        //'http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false',
        'markerclusterer.js',

    ];
    public $css = [

    ];
    public $depends = [

    ];

}
