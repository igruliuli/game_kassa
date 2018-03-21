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
class BetController extends Controller
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

    public function actionSave()
    {
        $request = \Yii::$app->request;
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();

        $post = $request->post();

        // how to accept game_id = 6_6_6_6
        // they are store fortune bets each separately? hm

        $gameId = $post['game_id'];

        if (strpos($gameId, '_')) {
            $gameId = substr($gameId, 0, strpos($gameId, '_'));
        }

        $game = Game::getGameById($gameId);

        $roundId = $post['round_id'];
        $userBet = $game->prepareBet($post['bet']);

        $operations = $game->createBetOperations($post);

        $bet = new Bet();
        $amount = $bet->getAmountFromOperations($operations);

        $bet->amount = $amount;
        $bet->user_id = $user->id;
        $bet->user_bet = json_encode($userBet);
        $bet->round_id = $roundId;
        $bet->game_id = $gameId;
        $bet->save();

        $bet->saveOperations($operations);

        $user->account->decreaseBalance($amount);

        // bet 5.00 Fortune Live
        // {
        //  "status":"success",
        //  "key":149369816,
        //  "st":"Ставки приняты",
        //  "fiscalsum":0,
        //  "code":"1471735035734",
        //  "bt":"0",
        //  "da":"25.01.2017 18:52:14",
        //  "sicbo":{"max":"0"},"rulinbet":{"max":"0"},"kenoinbet":{"max":"0"},"keno2inbet":{"max":"0"},"kenoblue":{"max":"0"},"kenoem3":{"max":"0"},"dog6":{"max":"0"},"rulem":{"max":"0"},"rulem2":{"max":"0"},
        //  "rul":{"bet":{"0":{"lp":0,"jp":0,"lgt":0,"tir":573400,"dact":"25.01.2017 18:52:14","nm":"36", "cf":"3600","sm":"500","wn":"0", "st":"1","id":"147173503","dp":"-"}},"max":"1"},
        //  "poker1":{"max":"0"},"poker2":{"max":"0"},"poker3":{"max":"0"},"keno":{"max":"0"},"kenoem2":{"max":"0"},"kenoem":{"max":"0"},"kenog":{"max":"0"},
        //  "cltbal":0,
        //  "limit":"8000","cassir":"131769","user":"-","bw":"0","as":"500","aw":"0","trslt":"Не окончен","inf":"-",
        //  "tb":"1","mb":"1"}

        $gamesBets = [];

        foreach (Game::getGamesAbbrs() as $abbr) {
            if ($game->getAbbr() == $abbr) {
                $gamesBets[$abbr] = [
                    "bet" => [$bet->getCheckData()],
                    "max" => 1
                ];
            } else {
                $gamesBets[$abbr] = ['max' => 0];
            }
        }

        return $this->createResponse(array_merge($gamesBets, [
            'status' => 'success',
            'tb' => 1,
            'bt' => 0,
            'currency' => $user->account->currency,
            'fiscalsum' => 0,
            "st" => "Ставки приняты",
            "code" => (string)($bet->id),
            "da" => (new \DateTime($bet->created_at))->format('d.m.Y H:i:s'),
            "cltbal" => 0,
            "limit" => $user->account->balance * 100,
            "as" => $bet->amount * 100,
            // TODO:
            "aw" => 0, // общий выигрыш
            "cassir" => $user->login,
            // TODO:
            "trslt" => "Не окончен",
            "mb" => 1
        ]));
    }

    public function actionPay()
    {
        $request = \Yii::$app->request;
        $betId = (int)$request->post('bet_id');
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();
        $account = $user->account;

        /** @var Bet $bet */
        $bet = Bet::findOne($betId);

        \Yii::info(var_export($request, 1), 'debug');

        \Yii::info(var_export($bet, 1), 'debug');

        if (is_null($bet) || $bet->user->account_id != $user->account_id) {

            if (!is_null($bet) && $bet->user->account_id != $user->account_id) {
                $message = "Attempt to pay check {$betId} from wrong account {$user->account_id}";
                \Yii::info($message, 'debug');
                \Yii::error($message);
            }

            return $this->createResponse(['st' => 'critical']);
        }

        if ($bet->status == Bet::STATUS_PAID || $bet->result != Bet::RESULT_WIN) {

            $message = "Attempt to pay wrong bet {$bet->id}";

            \Yii::info($message, 'debug');
            \Yii::error($message);

            return $this->createResponse(['st' => 'critical']);
        }

        $bet->pay($user);

        $game = Game::getGameById($bet->game_id);

        $gamesBets = [];
        foreach (Game::getGamesAbbrs() as $abbr) {
            if ($game->getAbbr() == $abbr) {
                $gamesBets[$abbr] = [
                    "bet" => [$bet->getCheckData()],
                    "max" => 1
                ];
            } else {
                $gamesBets[$abbr] = ['max' => 0];
            }
        }

        return $this->createResponse(array_merge([
            'currency' => $account->currency,
            'status' => 'success',
            'code' => $bet->getFormattedCode(),
            'da' => (new \DateTime($bet->created_at))->format('d.m.y  H:i:s'),
            "st" => 'Info',
            "fiscaltyp" => 0,
            "fiscalsum" => 0,
            "cltbal" => 0,
            'limit' => $user->account->balance * 100,
            "cassir" => $user->id,
            "faststate" => 3,
            "bw" => 1,
            'as' => $bet->amount * 100,
            "np" => '0',
            "aw" => '0', // общий выигрыш
            "trslt" => "0",
            // TODO: result str
            "inf" => "",
            "tb" => 1,
            "mb" => 1
        ], $gamesBets));
    }

    public function actionCancel()
    {
        // TODO: implement cancel logic
    }
}