<?php

namespace app\controllers;

use app\libraries\api\ApiService;
use app\libraries\api\Bet;
use app\libraries\kassa\KassaAgentService;
use app\models\GameRounds;
use yii\web\Controller;

class KassaController extends Controller
{
    public $layout = 'kassa';

    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionServer()
    {
        $request = \Yii::$app->request;
        $query = \Yii::$app->request->queryString;
        $method = \Yii::$app->request->method;
        $getParams = $request->get();
        $operation = $getParams['oper'];

        if ($operation == 'bet') {
            $betModel = new Bet();
            $response = $betModel->recordBet($getParams['stv'], $getParams['sum'], $getParams['itr'], $getParams['sid']);

            $decoded = json_decode($response);
            $decoded->key = $getParams['key'];
            return json_encode($decoded);
        }

        /**
         *
         * Request
         * 2016-12-06 14:31:18 [192.168.119.1][-][-][info][debug] array (
         * 'ul' => '',
         * 'up' => '',
         * 'oper' => 'bet',
         * 'stp' => '1',
         * // number in bet
         * 'stv' => '39',
         * 'coe' => '0',
         * // bet sum * 100
         * 'sum' => '500',
         * 'itr' => '354838',
         * 'tri' => '1',
         * 'sid' => '7',
         * 'che' => '',
         * 'key' => '123642329',
         * )
         * Response
         * 2016-12-06 14:31:20 [192.168.119.1][-][-][info][debug] '{"status":"success","key":127345817,"st":"Ставки приняты","fiscalsum":0,"code":"1239836623548","bt":"0","da":"06.12.2016 17:31:24","sicbo":{"max":"0"},"rulinbet":{"max":"0"},"kenoinbet":{"max":"0"},"keno2inbet":{"max":"0"},"kenoblue":{"max":"0"},"kenoem3":{"max":"0"},"dog6":{"max":"0"},"rulem":{"max":"0"},"rulem2":{"max":"0"},"rul":{"max":"0"},"poker1":{"max":"0"},"poker2":{"max":"0"},"poker3":{"max":"0"},"keno":{"bet":{"0":{"lp":0,"jp":0,"lgt":0,"tir":354838,"dact":"06.12.2016 17:31:24","nm":"39;", "cf":"0","sm":"500","wn":"0", "st":"1","id":"123983662","dp":"-"}},"max":"1"},"kenoem2":{"max":"0"},"kenoem":{"max":"0"},"kenog":{"max":"0"},"cltbal":0,"limit":"18000","cassir":"131769","user":"-","bw":"0","as":"500","aw":"0","trslt":"Не окончен","inf":"-","tb":"1","mb":"1"}'
         */
        // Operation pay
        // http://91.192.116.108:3301/srvloto.ashx?ul=&up=&key=116466999&dt1=2017-01-01+07%3A00%3A00&dt2=2017-02-02+23%3A59%3A00&che=1508564745774&oper=pay&payel=allwin&isnon=1
        /**
         * ul:
         * up:
         * key:116466999
         * dt1:2017-01-01 07:00:00
         * dt2:2017-02-02 23:59:00
         * che:1508564745774
         * oper:pay
         * payel:allwin
         * isnon:1
         */
        // Response
        /**
         * {
         *  "status":"success","key":169493187,"code":"1508564745774","bt":"1","da":"02.02.17  11:06:40",
         *  "sicbo":{"max":"0"},"kenoblue":{"max":"0"},"rulinbet":{"max":"0"},"kenoinbet":{"max":"0"},"keno2inbet":{"max":"0"},"dog6":{"max":"0"},"rulem":{"max":"0"},"rulem2":{"max":"0"},
         *  "rul":{
         *      "bet":{
         *          "0":{"lp":"","jp":0,"lgt":0,"code":1508564745774,"tir":577445,"dact":"02.02.17  11:06:40","nm":"39", "cf":"300","sm":"500","wn":"0", "st":"2","id":"150856474","dp":"-"},
         *          "1":{"lp":"","jp":0,"lgt":0,"code":1508564745774,"tir":577445,"dact":"02.02.17  11:06:40","nm":"37", "cf":"300","sm":"500","wn":"0", "st":"2","id":"150856476","dp":"-"},
         *          "2":{"lp":"t1740k01","jp":0,"lgt":1,"code":1508564745774,"tir":577445,"dact":"02.02.17  11:06:40","nm":"38", "cf":"300","sm":"500","wn":"1500", "st":"3","id":"150856475","dp":"02.02.17  11:15:33"}
         *      },
         *      "max":"3"},"poker1":{"max":"0"},"poker2":{"max":"0"},"poker3":{"max":"0"},"kenoem3":{"max":"0"},"kenoem":{"max":"0"},"kenoem2":{"max":"0"},"keno":{"max":"0"},"kenog":{"max":"0"},
         *  "fiscaltyp":0,"fiscalsum":0,"cltbal":0,"limit":"8000","cassir":"131769","user":"-","faststate":3,"bw":"1","as":"1500","np":0,"aw":"1500","trslt":"8 Черное","inf":"","st":"Info","tb":"3","mb":"3"}
         */
        if ($operation == 'pay') {
            $apiService = new ApiService();
            $response = $apiService->payCheck($request->get('che'));
            $decoded = json_decode($response);
            $decoded->key = $getParams['key'];
            return json_encode($decoded);
        }
        // auth operation
        if ($operation == 'autz') {
            $apiService = new ApiService();
            if (!$apiService->login($request->get('login'), $request->get('password'))) {
                return 'error';
            }
            return "success0";
        }
        // operation info
        if ($operation == 'info') {

            // TODO: implement single check view
            // http://91.192.116.108:3301/srvloto.ashx?ul=&up=&key=130353786&dt1=2017-02-08+11%3A00%3A00&dt2=2017-02-08+23%3A59%3A00&che=1537693585805&oper=info&payel=allwin&isnon=0
            /**
             *
             * ul:
             * up:
             * key:130353786
             * dt1:2017-02-08 11:00:00
             * dt2:2017-02-08 23:59:00
             * che:1537693585805
             * oper:info
             * payel:allwin
             * isnon:0
             */

            /**
             * Response
             * {"status":"success","key":0,"code":"1537693585805","bt":"1","da":"08.02.17  15:58:01","sicbo":{"max":"0"},"kenoblue":{"max":"0"},"rulinbet":{"max":"0"},"kenoinbet":{"max":"0"},"keno2inbet":{"max":"0"},"dog6":{"max":"0"},"rulem":{"max":"0"},"rulem2":{"max":"0"},"rul":{"bet":{"0":{"lp":"","jp":0,"lgt":0,"code":1537693585805,"tir":580569,"dact":"08.02.17  15:58:01","nm":"38", "cf":"300","sm":"500","wn":"0", "st":"2","id":"153769358","dp":"-"}},"max":"1"},"poker1":{"max":"0"},"poker2":{"max":"0"},"poker3":{"max":"0"},"kenoem3":{"max":"0"},"kenoem":{"max":"0"},"kenoem2":{"max":"0"},"keno":{"max":"0"},"kenog":{"max":"0"},"fiscaltyp":0,"fiscalsum":0,"cltbal":0,"limit":"5000","cassir":"131769","user":"-","faststate":1,"bw":"0","as":"500","np":0,"aw":"0","trslt":"34 Красное","inf":"","st":"Info","tb":"1","mb":"1"}
             */
            $apiService = new ApiService();
            if ($request->get('che', '') != '-' && $request->get('che', '') != '') {
                return $apiService->getCheckInfo($request->get('che'));
            } else {
                return $apiService->getInfo($request->get('dt1'), $request->get('dt2'));
            }
        }
        if ($operation == "update") {
            // TODO: complete
            // sample response
            // {
            //  "name_en":"TJS","fiscaltyp":0,"fiscalsum":0,"addr":"","mode":"0","id_cur":7,"billpay":1,"isHttps":0,
            //  "srv25":"ida=1&idh=0&ps=qwerty&trans=1","srv30":"ida=1740&idh=0&ps=qwerty&trans=1&idsrv=30","srv19":"ida=1740&idh=0&ps=qwerty&trans=1","srv234":"ida=1&idh=0&ps=qwerty","srv6":"ida=1&idh=0&ps=qww","srv7":"ida=1740&idh=0&ps=qwert&trans=1","srv8":"ida=1&idh=0&ps=qww","srv9":"ida=1&idh=0&ps=qwert","srv10":"ida=1740&idh=0&ps=qwert&trans=1","srv11":"ida=1740&idh=0&ps=qwerty&trans=1","srv12":"ida=1&idh=0&ps=qww","srv13":"ida=1&idh=0&ps=qww",
            //  "kenoemon":1,"rulemon":1,"rulon":1,"pokon":1,"kenoon":1,"kenogon":1,"t_bill":1,"tmz":"+5","st":"success","cfrulmin":500,"cfrulmax":100000,"coin6":"","cfkenomin":500,"cfkenomax":100000,"coin7":"","cfkenogmin":500,"cfkenogmax":100000,"coin10":"","cfpokmin":500,"cfpokmax":100000,"coin234":"","cfrulemmin":500,"cfrulemmax":100000,"coin8":"","cfkenoemmin":500,"cfkenoemmax":100000,"coin9":"",
            //  "hall":"1740","lgn":"t1740k01","pwd":"a2214",
            //  // balance
            //  "limit":"13000",
            //  "nick":"00131769","type":"0","key":"964983141"
            // }

            $apiService = new ApiService();
            return $apiService->getStatus();
        }
        if ($operation == "logout"){
            $cookies = \Yii::$app->response->cookies;
            $cookies->remove("token");

            $response = \Yii::$app->response;
            $response->format = \yii\web\Response::FORMAT_JSON;
            return ['status' => 'logout'];
        }
        // Отчет касира 1 запрос
        if ($operation == "gtst"){
            $apiService = new ApiService();
            $data = $apiService->getReport();

            return $data;
        }
        // Отчет касира 2 запрос
        if ($operation == "gtoh"){
            return '{"st":"none"}';
        }
        return '';
    }

    /**
     * Accepts requests like: clnt.ashx?*
     *  fFupdateFortuneEM();
     * fFupdateKenoEm();
     * fFupdateKenoEm3();
     * fPokerUpdate();
     */
    public function actionClient($server)
    {
        $query = \Yii::$app->request->queryString;
        $method = \Yii::$app->request->method;
        $get = \Yii::$app->request->get();

        if ($get['ida'] == '1' || isset($get['callback']) || $get['ida'] == '1740') {
            $callback = null;
            if (isset($get['callback'])) {
                $callback = $get['callback'];
            }

            $gameRound = GameRounds::find()->where('server_number = ' . $server)->orderBy('id DESC')->asArray()->limit(10)->all();
            $lastResults = json_decode($gameRound[0]['results'], 1);


            $lastTir = $lastResults['tir'];
            $roundTime = $lastResults['t2'];
            $startTime = $gameRound[0]['end_time'];
            $leftTime = $startTime + $roundTime - time();
            if ($server == 3309)
                $leftTime = $startTime + $roundTime + 13 - time();
            if ($server == 3310)
                $leftTime = $startTime + $roundTime + 120 - time();
            if ($server == 3308)
                $leftTime = $startTime + $roundTime + 135 - time();
            if ($server == 3307)
                $leftTime = $startTime + $roundTime - time();
            if ($server == 3313 || $server == 3303 || $server == 3307) {
                $lastBall = $lastResults['ball'];

                if ($leftTime < 7)
                    $lastBall = 99;

                return '{"tir":' . $lastTir . ',"ball":' . $lastBall . ',"t2":' . $leftTime . ',"fb":34,"v1":1,"fs":1,"bf":0, "m1n":"14", "m2n":"12", "m3n":"12", "m4n":"12", "m5n":"12", "m6n":"11", "m1c":"11", "m2c":"25", "m3c":"31", "m4c":"33", "m5c":"35","m6c":"3","mn1n":"3", "mn2n":"3", "mn3n":"3", "mn4n":"4", "mn5n":"4","mn6n":"5","mn1c":"20", "mn2c":"21", "mn3c":"32", "mn4c":"16", "mn5c":"22","mn6c":"6","b120":{"0":9,"1":8,"2":9,"3":11,"4":8,"5":8,"6":5,"7":7,"8":6,"9":9,"10":11,"11":14,"12":8,"13":7,"14":9,"15":6,"16":4,"17":11,"18":7,"19":8,"20":3,"21":3,"22":4,"23":10,"24":9,"25":12,"26":6,"27":6,"28":10,"29":7,"30":7,"31":12,"32":3,"33":12,"34":10,"35":12,"36":9},"jp1":"-","jp2":"-"}';
            } else {

                $lastResults['t2'] = $leftTime;
                if ($leftTime < 0) {
                    for ($i = 1; $i < 21; $i++) {
                        $lastResults['b' . $i] = 99;
                    }
                }

                if (isset($lastResults['betoff']))
                        $lastResults['betoff'] = ($leftTime > 7) ? 0 : 1;

                        return json_encode($lastResults);
                        //return '{"tir":' . $lastTir . ',"b1":56,"b2":79,"b3":22,"b4":43,"b5":42,"b6":99,"b7":99,"b8":99,"b9":99,"b10":99,"b11":99,"b12":99,"b13":99,"b14":99,"b15":99,"b16":99,"b17":99,"b18":99,"b19":99,"b20":99,"t2":' . $leftTime . ',"v1":0,"betoff":1,"tk":-1508318182,"str":0,"idv":0,"jp1sw":0,"jp1":300000,"jps1":3,"cold":{"0":[52,18],"1":[1,20],"2":[15,21],"3":[49,21],"4":[32,22],"5":[42,22],"6":[17,23],"7":[33,23],"8":[19,24],"9":[24,24]},"hot":{"0":[74,38],"1":[65,38],"2":[47,38],"3":[56,37],"4":[3,37],"5":[63,36],"6":[58,36],"7":[46,36],"8":[39,36],"9":[38,35]}}';
                    }

            }
        }

        function actionHistory($server)
        {
            $query = \Yii::$app->request->queryString;
            $method = \Yii::$app->request->method;

            $gameRounds = GameRounds::find()->where('server_number = ' . $server)->orderBy('id DESC')->asArray()->limit(11)->all();
            array_shift($gameRounds);
            foreach ($gameRounds as $i => $gameRound) {
                $balls['b' . $i] = json_decode($gameRound['results'], 1)['ball'];
            }


            //\Yii::info(json_decode('{"b0":9,"b1":36,"b2":13,"b3":6,"b4":10,"b5":33,"b6":17,"b7":21,"b8":35,"b9":20,"b10":6,"b11":7,"b12":9,"b13":25,"b14":31,"b15":5,"b16":28,"b17":11,"b18":0,"b19":24,"b20":5,"b21":28,"b22":33}', 1), 'debug');

            return json_encode($balls);
            //return '{"b0":9,"b1":36,"b2":13,"b3":6,"b4":10,"b5":33,"b6":17,"b7":21,"b8":35,"b9":20,"b10":6,"b11":7,"b12":9,"b13":25,"b14":31,"b15":5,"b16":28,"b17":11,"b18":0,"b19":24,"b20":5,"b21":28,"b22":33}';
        }

        public
        function actionLogin()
        {
            $request = \Yii::$app->request;

            /*        $agentService = new KassaAgentService();
                    $agentService->login();*/

            $apiService = new ApiService();
            if (!$apiService->login($request->get('login'), $request->get('pwd'))) {
                return 'error';
            }

            return $this->redirect(['kassa/index']);
        }
    }