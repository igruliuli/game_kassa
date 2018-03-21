<?php

namespace app\modules\user\controllers;

use app\models\Bet;
use app\modules\user\models\User;
use Picqer\Barcode\BarcodeGeneratorHTML;
use Picqer\Barcode\BarcodeGeneratorJPG;
use Picqer\Barcode\BarcodeGeneratorPNG;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use yii\filters\AccessControl;
use app\libraries\behaviors\JsonResponseBehavior;
use yii\web\Response;

/**
 * @method  createResponse(array $data = [])
 */
class BetController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@']
                    ],
                    ['allow' => false]
                ]
            ],
            'jsonResponse' => [
                'class' => JsonResponseBehavior::className(),
            ]
        ];
    }

    public function actionDetails($id)
    {
        /** @var Bet $bet */
        $bet = Bet::findOne($id);

        $response = [
            'id' => $bet->id,
            'html' => $this->renderPartial('check', ['bet' => $bet]),
            'info' => [
                'betAmount' => $bet->amount,
                'status' => Bet::getStatusStr($bet->result),
                'possibleWin' => 0
            ],
            'operations' => [
                [
                    'id' => $bet->id,
                    'stamp' => $bet->created_at,
                    'status' => Bet::getStatusStr($bet->result),
                    'amount' => $bet->amount
                ]
            ]
        ];

        return $this->createResponse($response);
    }

    public function actionBarcode($code)
    {
        $response = \Yii::$app->response;
        $response->format = Response::FORMAT_RAW;
        $response->headers->add('Content-Type', 'image/png');

        $generator = new BarcodeGeneratorPNG();
        echo $generator->getBarcode($code, $generator::TYPE_CODE_128, 2, 100);
    }
}