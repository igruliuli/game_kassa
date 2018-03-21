<?php

namespace app\modules\api\controllers;

use app\libraries\kassa\KassaAgentService;
use app\models\GameRound;
use yii\web\Controller;
use app\libraries\behaviors\JsonResponseBehavior;

/**
 * @method  createResponse(array $data = [])
 */
class RoundController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'jsonResponse' => [
                'class' => JsonResponseBehavior::className(),
            ],
        ];
    }

    public function actionResults($game_id = null)
    {
        $request = \Yii::$app->request;
        $server = $request->get('game_id');
        $data = json_decode($request->post('data'));
        if ($request->isPost) {
            $date = new \DateTime();
            /*            $request->getRawBody();
                        $request->getUrl();

                        \Yii::info("datetime: " . $date->format('Y-m-d H:i:s'), 'debug');
                        \Yii::info("url: " . $request->getUrl(), 'debug');
                        \Yii::info("body: " . $request->getRawBody(), 'debug');

                        return $request->getRawBody();*/

            GameRound::createNew($server, $data, $date);
        }



        /** @var GameRound $result */
        //$result = GameRound::getActiveResult($server);

        return $this->createResponse(is_null($result) ? [] : $result->getData());
    }
}