<?php

namespace app\modules\admin\controllers;

use admin\components\BaseAdminController;
use app\models\MapImage;
use config\Config;

class MapController extends BaseAdminController
{
    public function actionIndex()
    {
        $request = \Yii::$app->request;

        $mapCenter = Config::getValue('map_center');
        $mapZoom = Config::getValue('map_zoom');

        $mapImage = new MapImage();

        if ($request->isPost) {
            $mapZoom = $request->post('zoom');
            $mapCenter = $request->post('center');

            $mapImage->load($request->post());
            $mapImage->save();

            Config::saveValue('map_center', $mapCenter);
            Config::saveValue('map_zoom', $mapZoom);
        }

        return $this->render('index', ['center' => $mapCenter, 'zoom' => $mapZoom, 'mapImage' => $mapImage]);
    }
}