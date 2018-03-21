<?php

namespace app\modules\user\controllers;

use app\modules\user\models\Account;
use app\modules\user\models\User;
use Yii;
use yii\web\Controller;
use yii\filters\AccessControl;
use app\libraries\behaviors\JsonResponseBehavior;

/**
 * @method  createResponse(array $data = [])
 */
class AccountController extends Controller
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

	public function actionIndex()
	{
		/** @var User $user */
		$user = Yii::$app->user->getIdentity();

		$request = Yii::$app->request;

		$form = new Account();

		if ($request->isPost) {
			if ($form->load($request->post()) && $form->validate()) {
				$attributes = $form->getAttributes(['name', 'phone', 'email']);
				if (!empty($form->new_password)) {
					$attributes['password'] = $form->new_password;
				}
				$user->load($attributes, '');
				$user->save(false, array_keys($attributes));
			}
		} else {
			$form->load($user->getAttributes(['name', 'phone', 'email']), '');
		}

		return $this->render('index', ['form' => $form]);
	}

	public function actionAccounts()
    {
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();
        $parentAccount = $user->account;



        /** @var \app\modules\user\models\Account[] $accounts */
        $accounts = $parentAccount->getTree();

        $data = [];

        foreach ($accounts as $account) {
            if ($account != null)
                $data[] = [
                $account->id, // id
                $account->name, // name
                1, // status
                $account->parent_id, // parent_id
                $account->parent_id ? $account->parent->name : null, // parent_name
                $account->getRelativeLevel($parentAccount->getHierarchyLevel()), // level
                $account->note, // note
                $account->balance, // balance
                $account->currency // currency
            ];
        }


        // TODO: return accounts
        // // [[21568,"testkassakirill",1,13464,"ua_inbet_k",0,"",2500.5,"KZT"],[41060,"test_katya_kz",1,21568,"testkassakirill",1,null,100000,"KZT"],[42389,"kz_vova",1,41060,"test_katya_kz",2,"БИН: 679708757897    РЕГ.ККМ: 67543  ЗН: 679676798800  ФП: рку7239823ло-67в7-6723-3762-7634982о9832   г. Алматы, ул. Кренина 15а, перекресток с ул. Сефулина 7а",-3899,"KZT"]]

        return $this->createResponse($data);
    }

    public function actionPath()
    {
        /** @var User $user */
        $user = Yii::$app->user->getIdentity();

        // {"id":21568,"path":"/1/31/13464/21568"}

        return $this->createResponse([
            'id' => $user->id,
            'path' => '/1'
        ]);
    }

    /**
     * @param integer $id - account id
     */
    public function actionUsers($id)
    {
        /** @var User $currentUser */
        $currentUser = Yii::$app->user->getIdentity();

        $data = [];

        $users = User::findAll(['account_id' => $id]);

        foreach ($users as $user) {
            $data[] = [
                'id' => $user->id,
                'login' => $user->login,
                'name' => $user->name,
                'realm' => $user->realm
            ];
        }

        // [{"id":30247,"login":"kassirkirill123","name":".","realm":"betting","restricted":0,"online":0,"geoInfo":null},{"id":46336,"login":"testadmin21568","name":".","realm":"system","restricted":0,"online":0,"geoInfo":null},{"id":64335,"login":"cash21568","name":"k","realm":"betting","restricted":0,"online":0,"geoInfo":null},{"id":67950,"login":"KIrill26371","name":"k","realm":"betting","restricted":0,"online":0,"geoInfo":null},{"id":75416,"login":"flexius","name":"flex","realm":"system","restricted":0,"online":0,"geoInfo":null}]

        // TODO: return all users' list

        return $this->createResponse($data);
    }

    public function actionCheckName($name)
    {
        $account = \app\modules\user\models\Account::findOne(['name' => $name]);

        return $this->createResponse([
            'exists' => !is_null($account)
        ]);
    }

    public function actionCreate()
    {
        $request = \Yii::$app->request;
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();

        if (!$user->account->can_change_accounts) {
            return 'not_allowed';
        }

        $account = new \app\modules\user\models\Account();
        $account->name = $request->post('name');
        $account->parent_id = $request->post('parent');
        $account->note = $request->post('note');
        $account->currency = $user->account->currency;

        $account->save();

        return 'success';
    }

    public function actionDelete()
    {
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();
        $request = \Yii::$app->request;

        $accountId = $request->post('accId');

        $account = \app\modules\user\models\Account::findOne($accountId);

        if (!is_null($account)) {

            if (!$user->account->isChildAccount($accountId)) {
                return 'not_allowed';
            }

            $account->delete();
            return 'success';
        } else {
            return 'error';
        }
    }

    public function actionStatus()
    {
        /** @var User $user */
        $user = \Yii::$app->user->getIdentity();

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

         $data = json_decode('{
          "name_en":"TJS",
          "fiscaltyp":0,"fiscalsum":0,"addr":"","mode":"0","id_cur":7,"billpay":1,"isHttps":0,
          "srv25":"ida=1&idh=0&ps=qwerty&trans=1","srv30":"ida=1740&idh=0&ps=qwerty&trans=1&idsrv=30","srv19":"ida=1740&idh=0&ps=qwerty&trans=1","srv234":"ida=1&idh=0&ps=qwerty","srv6":"ida=1&idh=0&ps=qww","srv7":"ida=1740&idh=0&ps=qwert&trans=1","srv8":"ida=1&idh=0&ps=qww","srv9":"ida=1&idh=0&ps=qwert","srv10":"ida=1740&idh=0&ps=qwert&trans=1","srv11":"ida=1740&idh=0&ps=qwerty&trans=1","srv12":"ida=1&idh=0&ps=qww","srv13":"ida=1&idh=0&ps=qww",
          "kenoemon":1,"rulemon":1,"rulon":1,"pokon":1,"kenoon":1,"kenogon":1,"t_bill":1,"tmz":"+5","st":"success","cfrulmin":500,"cfrulmax":100000,"coin6":"","cfkenomin":500,"cfkenomax":100000,"coin7":"","cfkenogmin":500,"cfkenogmax":100000,"coin10":"","cfpokmin":500,"cfpokmax":100000,"coin234":"","cfrulemmin":500,"cfrulemmax":100000,"coin8":"","cfkenoemmin":500,"cfkenoemmax":100000,"coin9":"",
          "hall":"1740","lgn":"t1740k01","pwd":"a2214",
          "limit":"13000",
          "nick":"00131769","type":"0","key":"964983141"
         }');

        $data = (array)$data;

        $data['limit'] = round($user->account->balance * 100);
        $data['lng'] = $user->login;
        $data['nick'] = $user->name;
        $data['name_en'] = $user->account->currency;

        return $this->createResponse($data);
    }
}