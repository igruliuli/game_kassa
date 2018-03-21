<?php

namespace app\modules\api\controllers;

use app\libraries\games\Game;
use app\models\Bet;
use app\modules\user\models\User;
use yii\web\Controller;
use yii\filters\AccessControl;
use app\libraries\behaviors\JsonResponseBehavior;
use yii\web\ForbiddenHttpException;

/**
 * @method  createResponse(array $data = [])
 */
class InfoController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        return [
            'jsonResponse' => [
                'class' => JsonResponseBehavior::className(),
            ],
            'access' => [
                'class' => AccessControl::className(),
                'denyCallback' => function($rule, $action) {
                    throw new ForbiddenHttpException('Требуется авторизация', 403);
                },
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@']
                    ],
                    ['allow' => false]
                ]
            ],
        ];
    }

    public function actionInfo()
    {
        $request = \Yii::$app->request;
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();

        $id = $user->id;

        $dateStartStr = $request->get('dt1');
        $dateEndStr = $request->get('dt2');
        $code = $request->get('code');

        $query = Bet::find()
            ->where(['user_id' => $user->id]);

        if ($code) {
            $query->andWhere(['id' => $code]);
        } else {
            $query->andWhere(['between', 'created_at', $dateStartStr, $dateEndStr]);
        }

        /** @var Bet[] $bets */
        $bets = $query->all();

        $gamesBets = [];

        foreach (Game::getGamesAbbrs() as $abbr) {
            $gamesBets[$abbr] = [
                'bet' => [],
                'max' => 0
            ];
        }

        foreach ($bets as $i => $bet) {
            $game = Game::getGameById($bet->game_id);

            $gamesBets[$game->getAbbr()]['bet'] = array_merge($bet->getOperationsInfo(), $gamesBets[$game->getAbbr()]['bet']);
            $gamesBets[$game->getAbbr()]['max'] = count($bet->operations) + $gamesBets[$game->getAbbr()]['max'];
        }

        return $this->createResponse(array_merge([
            'status' => 'success',
            'key' => 0,
            "code" => "-",
            'bt' => "1",
            // TODO: wtf?
            'da' => '01.01.-10  00:00:00',
            "st" => 'Info',
            "fiscaltyp" => 0,
            "fiscalsum" => 0,
            "cltbal" => 0,
            "limit" => $user->account->balance * 100,
            "cassir" => $user->id,
            "user" => '-',
            "faststate" => 1,
            "bw" => "0",
            "as" => "1000",
            "np" => '0',
            "aw" => '0',
            "trslt" => "0",
            "inf" => "",
            "tb" => count($bets),
            "mb" => count($bets)
        ], $gamesBets));
    }
}