<?php

namespace app\modules\user\controllers;

use app\modules\user\exceptions\NotEnoughMoney;
use app\modules\user\models\Account;
use app\modules\user\models\BillHistory;
use app\modules\user\models\User;
use yii\web\Controller;
use yii\filters\AccessControl;
use app\libraries\behaviors\JsonResponseBehavior;

/**
 * @method  createResponse(array $data = [])
 */
class AccountingController extends Controller
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

    public function actionIndex($account_id)
    {
        // {
        // "balance":2000,
        //  "acc_path":"/1/31/13464/21568/42933/43007",
        //  "acc_type":1,
        //  "tax_scheme":0,
        //  "slipType":105,
        //  "license":0,
        //  "printing":0,
        //  "sms":0,
        //  "bets_count":1500,"bets_volume":2000000,"cashdesk_profit":250000,"parimatch":"",
        //  "can_create_accs":0,"can_permit_to_create_accs":1,"can_edit_min_max":0,"can_permit_to_edit_minmax":1,"can_edit_bets_limits":0,"dont_restrict_cashiers_number":0,"can_cancel_bets":0,"can_edit_jackpots":0,"can_edit_presets":0,
        //  "texas_pin_code":0,"lima_rfid":0,"cashier_session":0,"lima_slip_type":0,"remove_all_tabs":0,"no_additional_windows":0,"dont_show_devices":0,"restrict_kz":0,"turn_off_multilogin":0,"domain_restriction":0,
        //  "bets_softlimit":null,"bets_phones":null,"currency_name":"KZT",
        //  "sources":[{"id":0,"name":"Собачьи бега","percent":null},{"id":1,"name":"Английская линия","percent":null},{"id":3,"name":"Русская линия","percent":null},{"id":4,"name":"Будущие события","percent":null},{"id":5,"name":"Американская линия","percent":null},{"id":6,"name":"Русская линия(2)","percent":null},{"id":7,"name":"Немецкая линия","percent":null},{"id":47,"name":"Чемпионаты, статистика","percent":null},{"id":555,"name":"Тотализатор","percent":null},{"id":777,"name":"Расширенная линия","percent":null},{"id":778,"name":"Собаки Extreme","percent":null},{"id":779,"name":"Лошади Extreme","percent":null},{"id":780,"name":"Собаки-8","percent":null},{"id":781,"name":"Лошади-8","percent":null},{"id":885,"name":"Baccarat","percent":null},{"id":886,"name":"Blackjack","percent":null},{"id":887,"name":"B-Poker","percent":null},{"id":888,"name":"Покер","percent":null},{"id":889,"name":"Омаха покер","percent":null},{"id":890,"name":"Poker Ext. #1","percent":null},{"id":891,"name":"Poker Ext. #2","percent":null},{"id":892,"name":"Poker Ext. #3","percent":null},{"id":900,"name":"PIN Sale","percent":null},{"id":901,"name":"ПАБК","percent":null},{"id":995,"name":"Keno-Ext","percent":null},{"id":997,"name":"Ka-Boom","percent":null},{"id":998,"name":"Бинго","percent":null},{"id":999,"name":"Кено","percent":null},{"id":1001,"name":"i-Games","percent":null},{"id":1003,"name":"Fortuna","percent":null},{"id":1004,"name":"TV roulette","percent":null},{"id":1005,"name":"TV Poker","percent":null},{"id":1007,"name":"F-Games","percent":null},{"id":1009,"name":"Bingo37","percent":null},{"id":1010,"name":"РусскийLive2","percent":null},{"id":1012,"name":"sport","percent":null},{"id":1013,"name":"Fortuna18","percent":null},{"id":1014,"name":"Lucky Six","percent":null},{"id":1015,"name":"TV Poker II 6-1","percent":null},{"id":1016,"name":"TV Poker II 6-1 Legacy","percent":null},{"id":1017,"name":"Fortuna Black","percent":null},{"id":1018,"name":"BetGG Fortuna Classic","percent":null},{"id":1019,"name":"BetGG Fortuna Black","percent":null},{"id":1020,"name":"BetGG KaBoom","percent":null},{"id":7771,"name":"Английская линия (ext.)","percent":null},{"id":9999,"name":"TV Bingo37","percent":null},{"id":99901,"name":"Кено 5 мин","percent":null},{"id":99902,"name":"XKeno","percent":null}],"slipTypes":[{"id":63,"note":"1xBet BukPub RUR"},{"id":54,"note":"alfa RUR"},{"id":44,"note":"BK Olimp RUR"},{"id":37,"note":"bk Panorama RUR"},{"id":20,"note":"bkleader RUR"},{"id":36,"note":"bkLeader-2 RUR"},{"id":11,"note":"bmpub RUR"},{"id":1,"note":"chance RUR"},{"id":0,"note":"default RUR"},{"id":43,"note":"Euromir"},{"id":33,"note":"fon png RUR"},{"id":30,"note":"fon RUR"},{"id":26,"note":"Invest RUR"},{"id":12,"note":"irsol RUR"},{"id":50,"note":"KKM RUR"},{"id":18,"note":"loto new RUR"},{"id":2,"note":"loto RUR"},{"id":52,"note":"NEW default RUR"},{"id":7,"note":"old RUR"},{"id":56,"note":"ooo Alfa RUR"},{"id":60,"note":"ooo Mega RUR"},{"id":34,"note":"Panorama RUR"},{"id":13,"note":"RFK RUR"},{"id":25,"note":"x-bet.cc"},{"id":5,"note":"zenith RUR"},{"id":3,"note":"default UAH"},{"id":62,"note":"Favbet UAH"},{"id":16,"note":"favorit UAH"},{"id":57,"note":"FavoritSport UAH"},{"id":42,"note":"FavoritToto UAH"},{"id":104,"note":"favoritUkrtoto in UAH"},{"id":88,"note":"MSL UAH"},{"id":51,"note":"olimp UAH"},{"id":99,"note":"totoUAH"},{"id":86,"note":"default TJS"},{"id":24,"note":"golbet.tj TJS"},{"id":75,"note":"idorai in TJS"},{"id":8,"note":"irsol TJS"},{"id":14,"note":"old TJS"},{"id":35,"note":"Raksh.TJ TJS"},{"id":82,"note":"Tochvar in TJS"},{"id":19,"note":"Tojbet"},{"id":46,"note":"TojVar TJ"},{"id":70,"note":"! DO NOT USE PariMatch in KZT"},{"id":79,"note":"! DO NOT USE WTF loto in KZT"},{"id":98,"note":"block KZ"},{"id":17,"note":"captial KZT"},{"id":9,"note":"default KZT"},{"id":74,"note":"INBET-loto in KZT"},{"id":105,"note":"LotoExquisite KZT"},{"id":6,"note":"old KZT"},{"id":41,"note":"olimp.kz KZT"},{"id":90,"note":"Seul Slots KZT"},{"id":15,"note":"vulcanslip KZT"},{"id":10,"note":"zenith KZT"},{"id":4,"note":"default BYR"},{"id":21,"note":"default GEL"},{"id":29,"note":"marat GEL"},{"id":48,"note":"norakidze GEL"},{"id":22,"note":"default AZN"},{"id":40,"note":"bk Eldorado MDL"},{"id":23,"note":"default MDL"},{"id":45,"note":"NEW default MDL"},{"id":71,"note":"! DO NOT USE PTS usa"},{"id":27,"note":"default USD"},{"id":58,"note":"eng USD"},{"id":72,"note":"USDPIN"},{"id":28,"note":"default TYR"},{"id":67,"note":"TRY in Turkish"},{"id":47,"note":"default AMD"},{"id":31,"note":"fon AMD"},{"id":32,"note":"default UDX"},{"id":38,"note":"default KGS"},{"id":85,"note":"INBET-loto in KGS"},{"id":39,"note":"default CZK"},{"id":55,"note":"dominicana DOP"},{"id":49,"note":"MobiGames DOP"},{"id":53,"note":"default EUR"},{"id":64,"note":"EUR in english"},{"id":91,"note":"EUR in Lithuanian"},{"id":59,"note":"Columbia COP"},{"id":95,"note":"BestWinningBet in NGN"},{"id":61,"note":"Nigeria NGN"},{"id":96,"note":"SpurBet in NGN"},{"id":100,"note":"WesternBet NGN"},{"id":65,"note":"BAM in english"},{"id":66,"note":"GHS in english"},{"id":81,"note":"Sportsbet GHS in english"},{"id":80,"note":"SUNBET GHS in english"},{"id":69,"note":"! DO NOT USE NIO in Spanish"},{"id":68,"note":"UYU in Spanish"},{"id":73,"note":"CLP in Spanish"},{"id":76,"note":"! DO NOT USE SOL in Spanish"},{"id":77,"note":"PEN (PERU) in Spanish"},{"id":78,"note":"IQD (Iraq) in English"},{"id":83,"note":"default TZS"},{"id":84,"note":"default UZS"},{"id":87,"note":"default PKR"},{"id":89,"note":"default ZWL"},{"id":93,"note":"PHP in English"},{"id":92,"note":"BOB in Spanish"},{"id":94,"note":"HTG in English"},{"id":97,"note":"default ZMW"},{"id":101,"note":"default PYG"},{"id":102,"note":"default XAF"},{"id":103,"note":"default ARS"},{"id":106,"note":"default ZAR"}],"parentLicenses":[],"domains":[{"id":1,"domain":"bm.idraw.kz"},{"id":2,"domain":"bm.trade-box.cc"},{"id":3,"domain":"bm.inbet-loto.kz"}],
        //  "mode":"prepaid",
        //  "taxSchemes":[{"name":"Нет отчислений","code":398000},{"name":"Отчисление НДФЛ от операций с наличными по картам (10%)","code":398001},{"name":"Отчисление НДФЛ от выигрышей по ставкам (10%)","code":398002}],"limaSlipTypes":[{"id":0,"name":"Выключен","available":true},{"id":1,"name":"ООО \"Эффектум\"","available":true},{"id":2,"name":"ООО \"Икском\"","available":true},{"id":3,"name":"INBET-loto.kz","available":true},{"id":4,"name":"BNLoto","available":true},{"id":5,"name":"ООО \"Забота\"","available":true},{"id":6,"name":"ТОО Ассирия","available":true},{"id":7,"name":"Аналитик","available":true},{"id":8,"name":"23bet","available":true},{"id":9,"name":"default","available":true},{"id":10,"name":"Джони","available":true},{"id":11,"name":"ООО «Забота - Автофин»","available":true}],
        //  "minSoftLimit":15000
        //  }

        // TODO: check access to account
        /** @var Account $account */
        $account = Account::findOne($account_id);

        $bet_settings = $account->bet_settings;

        if (empty($bet_settings)) {
            $bet_settings = Account::betSettingsDefault();
        }

        return $this->createResponse([
            'balance' => $account->balance,
            'acc_path' => '1/31/13464/21568/42933/43007',
            'acc_type' => 1,
            'tax_scheme' => 0,
            'bets_count' => $bet_settings['count'],
            'bets_volume' => $bet_settings['volume'],
            'cashdesk_profit' => $bet_settings['profit'],
            'bets_softlimit' => $bet_settings['softlimit'],
            'bets_phones' => $bet_settings['phones'],
            'mode' => 'prepaid',
            'can_create_accs' => $account->can_change_accounts,
            'can_edit_min_max' => $account->can_change_minmax
        ]);
    }

    public function actionOperations($account_id)
    {
        $request = \Yii::$app->request;


        $data = BillHistory::getRecords($request->get('account_id'),$request->get('start'),$request->get('end'));

        foreach ($data as $k => $d){
            $new_data[$k]['id'] = $d['id'];
            if ($d['op_type'] == '1'){
                $new_data[$k]['note'] = 'списание баланса администратором счета '. $d['who_add'] .' для счета ' .$d['account_id'] ;
            }else{
                $new_data[$k]['note'] = 'пополнение баланса администратором счета '. $d['who_add'] .' для счета ' .$d['account_id'] ;
            }

            if ($d['op_type'] == '1'){
                $new_data[$k]['amount'] = 0 - $d['amount'];
            }else{
                $new_data[$k]['amount'] = $d['amount'];
            }
            $date = new \DateTime($d['date']);
            $new_data[$k]['stamp'] = $date->format('Y-m-d H:i:s');
            $new_data[$k]['op_type'] = $d['op_type'];
        }

        return $this->createResponse($new_data);
    }

    // Add or take balance
    public function actionTransfer($account_id)
    {
        $request = \Yii::$app->request;
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();
        $action = $request->post('action');
        $sum = $request->post('sum');

        if (!$user->account->isChildAccount($account_id)) {
            return 'not_allowed';
        }

        $account = Account::findOne($account_id);

        if ($action == 'add') {
            $account->addBalance($sum);
            BillHistory::addRecord($sum, 'add', $account_id, $user->account_id);
        }

        if ($action == 'sub') {
            try {
                $account->decreaseBalance($sum);
                BillHistory::addRecord($sum, 'sub', $account_id, $user->account_id);
            } catch (NotEnoughMoney $ex) {
                return $ex->getMessage();
            }
        }

        return 'success';
    }

    // Permission actions

    public function actionChangeMinmaxPermission($account_id)
    {
        $request = \Yii::$app->request;
        $value = $request->post('value');
        $account = Account::findOne($account_id);

        // TODO: check permissions to account
        $account->can_change_minmax = $value;
        $account->save();

        return 'success';
    }

    public function actionChangeAccountsPermission($account_id)
    {
        $request = \Yii::$app->request;
        $value = $request->post('value');
        $account = Account::findOne($account_id);

        // TODO: check permissions to account
        $account->can_change_accounts = $value;
        $account->save();

        return 'success';
    }

    public function actionChangeBetSettings($account_id)
    {
        // input: {count: "123", volume: "321", profit: "12314", softlimit: "", phones: ""}
        $request = \Yii::$app->request;
        $account = Account::findOne($account_id);

        $account->bet_settings = $request->post();
        $account->save();
    }
}