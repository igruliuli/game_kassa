<?php

namespace app\modules\user\controllers;

use app\libraries\games\Game;
use app\libraries\helpers\DateTimeHelper;
use app\models\Bet;
use app\modules\user\models\Account;
use app\modules\user\models\User;
use yii\helpers\ArrayHelper;
use yii\web\Controller;
use yii\filters\AccessControl;
use app\libraries\behaviors\JsonResponseBehavior;

/**
 * @method  createResponse(array $data = [])
 */
class ReportsController extends Controller
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

    public function actionOverall()
    {
        $request = \Yii::$app->request;
        $post = $request->post();

        // TODO: check for accounts accessibility
        $accounts = explode(',', $post['account']);
        $end = $post['end'];
        $start = $post['start'];

        //

        $bets = Bet::getReport($accounts, $start, $end);

        $result = [];

        foreach ($bets as $bet) {
            $result[] = [
                'date' => (new \DateTime($bet['date']))->format('Y-m-d'),
                'active_accs' => 1,
                'balBeg' => 0,
                'betsPlus' => (float)$bet['bet_sum'],
                'betsPlusCnt' => (int)$bet['bet_count'],
                'betsMinus' => (float)$bet['paid_sum'],
                'betsMinusCnt' => (int)$bet['paid_count'],
                'otherPlus' => 0,
                'otherMinus' => 0,
                'delta' => (float)$bet['bet_sum'] - abs((float)$bet['paid_sum'])
            ];
        }

        $data = json_decode('[
            {
            "date":"2016-11-09",
            "active_accs":1,
            "balBeg":0,
            "betsPlus":21710,
            "betsPlusCnt":13,
            "betsMinus":-20304,
            "betsMinusCnt":4,
            "otherPlus":0,
            "otherMinus":0,
            "delta":1406
            },
            {"date":"2016-11-05","active_accs":1,"balBeg":0,"betsPlus":3000,"betsPlusCnt":6,"betsMinus":0,"betsMinusCnt":0,"otherPlus":0,"otherMinus":0,"delta":3000},
            {"date":"2016-10-26","active_accs":1,"balBeg":0,"betsPlus":2000,"betsPlusCnt":1,"betsMinus":0,"betsMinusCnt":0,"otherPlus":0,"otherMinus":0,"delta":2000},
            {"date":"2016-10-22","active_accs":1,"balBeg":0,"betsPlus":500,"betsPlusCnt":1,"betsMinus":0,"betsMinusCnt":0,"otherPlus":0,"otherMinus":0,"delta":500}
        ]');

        return $this->createResponse($result);
    }

    public function actionDaily()
    {
        $request = \Yii::$app->request;
        $post = $request->post();

        // TODO: check for accounts accessibility
        $accounts = explode(',', $post['account']);
        $end = $post['end'];
        $start = $post['start'];

        // TODO: complete timezones
        $timeZone = $post['tz'];

        $startDT = (new \DateTime($start));
        $endDT = (new \DateTime($end));

        $startDT = DateTimeHelper::applyDateTimeOffset($startDT, $timeZone);
        $endDT = DateTimeHelper::applyDateTimeOffset($endDT, $timeZone);

        //\Yii::info("Start time: " . $startDT->format('Y-m-d H:i:s'), 'debug');
        //\Yii::info("End time: " . $endDT->format('Y-m-d H:i:s'), 'debug');

        /** @var Bet[] $bets */
        $bets = Bet::find()
            ->joinWith('user')
            ->where(['in', 'users.account_id', $accounts])
            ->orderBy(['created_at' => SORT_DESC])
            ->andWhere(['between', 'created_at', $startDT->format('Y-m-d H:i:s'), $endDT->format('Y-m-d H:i:s')])
            ->all();

        $users = ArrayHelper::map(
            $bets,
            function($item) {
                return $item->user->id;
            },
            function($item) {
                return $item->user->login;
            }
        );

        $betsData = [];

        $paidCount = 0;
        $totalAmount = 0;
        $paidAmount = 0;

        foreach ($bets as $bet) {
            $betsData[] = $bet->getReportData($timeZone);

            $totalAmount += $bet->amount;

            if ($bet->status == Bet::STATUS_PAID) {
                $paidCount++;
                $paidAmount += $bet->win_amount;
            }
        }

        $data = [
            "report" => $betsData,
            'totals' => [
                "totalCount" =>count($betsData),
                "paidCount" => $paidCount,
                "amount" => $totalAmount,
                "toPayTheory" => 0,
                "toPayAmount" => 0,
                "paidAmount" => $paidAmount
            ],
            'users' => $users
        ];

        //$data = json_decode('{
        //"report":[{
        //      "id":1062583631,
        //      "stamp":"2016-11-09 20:09:04",
        //      "pay_amount":"",
        //      "pay_stamp":"",
        //      "cid":0,
        //      "uid":30247,
        //      "puid":"",
        //      "client_id":0,
        //      "acc_id":21568,"betAmount":3,"possibleWin":0,"realWin":"not_ready"},{"id":430240805,"stamp":"2016-11-09 19:55:10","pay_amount":4,"pay_stamp":"","cid":0,"uid":30247,"puid":30247,"client_id":0,"acc_id":21568,"betAmount":4,"possibleWin":0,"class":"green","realWin":"canceled"},{"id":959694775,"stamp":"2016-11-09 19:46:03","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":1,"possibleWin":0,"realWin":"not_ready"},{"id":1003480195,"stamp":"2016-11-09 19:43:33","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":1,"possibleWin":0,"realWin":"not_ready"},{"id":1046512987,"stamp":"2016-11-09 19:41:38","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":1,"possibleWin":0,"realWin":"not_ready"},{"id":360598246,"stamp":"2016-11-09 19:40:58","pay_amount":15000,"pay_stamp":"","cid":0,"uid":30247,"puid":30247,"client_id":0,"acc_id":21568,"betAmount":15000,"possibleWin":0,"class":"green","realWin":"canceled"},{"id":728176091,"stamp":"2016-11-09 19:40:24","pay_amount":5000,"pay_stamp":"","cid":0,"uid":30247,"puid":30247,"client_id":0,"acc_id":21568,"betAmount":5000,"possibleWin":0,"class":"green","realWin":"canceled"},{"id":1011834104,"stamp":"2016-11-09 19:40:17","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":200,"possibleWin":0,"realWin":"not_ready"},{"id":253060708,"stamp":"2016-11-09 19:38:38","pay_amount":300,"pay_stamp":"","cid":0,"uid":30247,"puid":30247,"client_id":0,"acc_id":21568,"betAmount":300,"possibleWin":0,"class":"green","realWin":"canceled"},{"id":1042418279,"stamp":"2016-11-09 19:29:23","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":300,"possibleWin":0,"realWin":"not_ready"},{"id":750449793,"stamp":"2016-11-09 19:29:18","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":300,"possibleWin":0,"realWin":"not_ready"},{"id":767796466,"stamp":"2016-11-09 19:29:12","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":300,"possibleWin":0,"realWin":"not_ready"},{"id":709395499,"stamp":"2016-11-09 19:29:08","pay_amount":"","pay_stamp":"","cid":0,"uid":30247,"puid":"","client_id":0,"acc_id":21568,"betAmount":300,"possibleWin":0,"realWin":"not_ready"}],
        //"totals":{"totalCount":13,"paidCount":4,"amount":21710,"toPayTheory":0,"toPayAmount":0,"paidAmount":20304},
        //"users":{"30247":"."}}');

        return $this->createResponse($data);
    }

    public function actionSources()
    {
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();
        $post = \Yii::$app->request->post();

        // TODO: check for accounts accessibility
        $accounts = explode(',', $post['account']);
        $end = $post['end'];
        $start = $post['start'];

        // TODO: complete timezones
        $timeZone = $post['tz'];

        $startDT = (new \DateTime($start));
        $endDT = (new \DateTime($end));
        $endDT->add(new \DateInterval('P1D'));

        $data = json_decode('{
            "reportData":[
                {"source":900,"name":"PIN Sale","total_in":26710,"delta":6406,"currency":"KZT","cnt":20,"perc":0.7601647323099963},
                {"source":999,"name":"Кено","total_in":500,"delta":500,"currency":"KZT","cnt":1,"perc":0}
            ],
            "chartData":[
                {"date":"2016-10-22","name":"Кено","currency":"KZT","delta":500,"total_in":500},
                {"date":"2016-10-26","name":"PIN Sale","currency":"KZT","delta":2000,"total_in":2000},
                {"date":"2016-11-05","name":"PIN Sale","currency":"KZT","delta":3000,"total_in":3000},
                {"date":"2016-11-09","name":"PIN Sale","currency":"KZT","delta":1406,"total_in":21710}
            ]
        }');

        return $this->createResponse([
            'reportData' => Bet::getExtendedReport($accounts, $startDT->format('Y-m-d'), $endDT->format('Y-m-d')),
            'chartData' => Bet::getExtendedChartData($accounts, $startDT->format('Y-m-d'), $endDT->format('Y-m-d'))
        ]);
    }

    public function actionAccounts()
    {
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();

        $post = \Yii::$app->request->post();

        // TODO: check for accounts accessibility
        $accountIds = explode(',', $post['account']);
        $end = $post['end'];
        $start = $post['start'];

        // accounts

        $accs = [];
        $accounts = Account::find()->where(['in', 'id', $accountIds])->all();

        foreach ($accounts as $account) {
            $accs[$account->id] = [
                $account->id,
                $account->name,
                '',
                $account->currency
            ];
        }

        $sources = [];

        $games = Game::getGames();

        foreach ($games as $id => $game) {
            $sources[$id] = Game::getGameById($id)->getName();
        }

        return $this->createResponse([
            'sources' => $sources,
            'accs' => $accs,
            'report' => Bet::getAccountsReport($accountIds, $start, $end)
        ]);
    }
}