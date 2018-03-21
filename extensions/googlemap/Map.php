<?php

namespace googlemap;

use Yii;

class Map extends \yii\base\Widget {

    const MAP_TYPE_ROADMAP = 'ROADMAP';
    const MAP_TYPE_HYBRID = 'HYBRID';
    const MAP_TYPE_SATELLITE = 'SATELLITE';
    const MAP_TYPE_TERRAIN = 'TERRAIN';
    const UNITS_PX = 'px';
    const UNITS_PERCENT = '%';
    const UNITS_EM = 'em';
    const UNITS_REM = 'rem';
    const UNITS_VH = 'vh';
    const UNITS_VW = 'vw';


    public $sensor = false;
    public $width = 600;
    public $height = 600;
    public $widthUnits = self::UNITS_PX;
    public $heightUnits = self::UNITS_PX;
    public $center = 'Mexico';
    public $zoom = 16;
    public $mapType = 'ROADMAP';
    public $markers = [];
    public $apiKey = null;
    public $markerFitBounds = false;
    public $markerDraggable = true;
    public $isAjax = false;
    public $onClickMarker =null;
    public $onZoomChanged =null;
    public $onDragEnd =null;
    public $onMarkerDragEnd =null;
    public $markerClustererOptions=null;

    public function init() {
        if ($this->apiKey === null) {
            $this->apiKey = Yii::$app->params['GOOGLE_API_KEY'];
        }
        $this->sensor = $this->sensor ? 'true' : 'false';
        parent::init();
    }

    public function run() {
        //MapAsset::register($this->getView());

        return $this->render('map');
    }

}
