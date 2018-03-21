<?php

namespace app\libraries\api;

use yii\httpclient\Client;
use yii\httpclient\Response;
use yii\web\Cookie;
use yii\web\CookieCollection;
use yii\web\Session;

class ApiService {

    protected $serverUrl = 'http://78.47.242.143:8080/';
    protected $authSessionKey = 'auth-cookies';

    public function __construct()
    {
        if (YII_ENV == 'live') {
            $this->serverUrl = 'http://78.47.242.143:8080/';
        }
    }

    /**
     * @param CookieCollection $cookies
     */
    protected function setAuthCookies($cookies)
    {
        /** @var Session $session */
        $session = \Yii::$app->session;
        $session->set($this->authSessionKey, $cookies->toArray());
    }

    protected function getAuthCookies()
    {
         $cookies = \Yii::$app->session->get($this->authSessionKey, null);

        return new CookieCollection($cookies);
    }

    /**
     * @return Response
     */
    public function request($url, $query, $data, $method = 'get')
    {
        $client = new Client();

        $request = $client->createRequest()
            ->setMethod($method)
            ->setUrl($this->serverUrl . '/' . $url . '?' .  $query)
            ->setData($data);

        $request->setCookies($this->getAuthCookies());
        $request->setCookies([
            [
                'name' => 'token',
                'value' => \Yii::$app->request->cookies->getValue('token')
            ]
        ]);

        $response = $request->send();

        return $response;
    }

    public function getInfo($dateStart, $dateEnd)
    {
        $params = [
            'dt1' => $dateStart,
            'dt2' => $dateEnd
        ];

        $response = $this->secureRequest('api/info/info', http_build_query($params), []);

        $content = $response->getContent();

        return $content;
    }

    /**
     * @return Response
     */
    public function secureRequest($url, $query, $data, $method = 'get')
    {
        $client = new Client();

        if (isset($query)){
            $url = $this->serverUrl . $url . '?' .  $query;
        }else{
            $url = $this->serverUrl . $url;
        }

        $request = $client->createRequest()
            ->setMethod($method)
            ->setUrl($url)
            ->setData($data);

        $request->setCookies($this->getAuthCookies());
        $request->setCookies([
            [
            'name' => 'token',
            'value' => \Yii::$app->request->cookies->getValue('token')
            ]
        ]);

        $response = $request->send();
        $content = $response->getContent();

        $decoded = json_decode($content);

        if (is_object($decoded) && property_exists($decoded, 'error') && $decoded->code == 403) {
            //$this->login();
        }

        return $response;
    }

    public function getReport(){
        $params = \Yii::$app->request->get();
        $response = $this->secureRequest('api/info/kassirreport', http_build_query($params), []);
        $content = $response->getContent();
        return $content;
    }

    /**
     * Authenticate cashier
     */
    public function login($login, $password)
    {
        $response = $this->request('api/user/login', '', [
            'login' => $login,
            'password' => $password
        ], 'post');

        $content = $response->getContent();
        $decoded = json_decode($content);
        if ($decoded->code == 0) {
            return false;
        }
        $this->setAuthCookies($response->cookies);
        \Yii::$app->response->cookies->add(new Cookie([
            'name' => 'token',
            'value' => json_decode($response->content, 1)['user']['token']
        ]));
        return true;
    }

    /**
     * @param integer $server - number of server
     */
    public function getRoundResults($server)
    {
        $response = $this->request('api/round/results', http_build_query([
            'server' => $server
        ]), []);

        return $response->getContent();
    }

    public function getStatus()
    {
        $response = $this->secureRequest('api/account/status', '', []);
        $content = $response->getContent();
        return $content;
    }

    public function getCheckInfo($code)
    {
        $params = [
            'code' => $code
        ];

        $response = $this->secureRequest('api/info/info', http_build_query($params), []);

        $content = $response->getContent();

        return $content;
    }

    /**
     * Pay check for winner
     */
    public function payCheck($code)
    {
        $params = [
            'bet_id' => $code,
        ];

        $response = $this->secureRequest('api/bet/pay', '', $params, 'post');

        $content = $response->getContent();

        return $content;
    }

}