<?php

namespace app\libraries\kassa;

use yii\httpclient\Client;
use yii\web\Session;

class KassaAgentService
{
    const LOGIN = 't1740k01';
    const PASSWORD = 'a2214';

    public $port = '3301';

    private $sessionCookieKey = 'agent-cookie';

    /** @var  string Remote server address */
    private $remoteAddress;

    public function __construct()
    {
        $this->remoteAddress = \Yii::$app->params['removeServer'];
    }

    /**
     * Authentication method to remote server
     */
    public function login()
    {
        /** @var Session $session */
/*        $session = \Yii::$app->session;

        $response = $this->_request('srvloto.ashx', 'get', [
            'mode' => 0,
            'login' => self::LOGIN,
            'password' => self::PASSWORD,
            'oper' => 'autz'
        ]);

        $session->set($this->sessionCookieKey, $response->cookies);*/

        //\Yii::info(var_export($response, 1), 'debug');

        //$data = $response->getData();

        //\Yii::info('Login attempt', 'debug');
        //\Yii::info(var_export($data, 1), 'debug');

        //var_dump($data);
    }

    public function isLoggedIn()
    {
        return $this->_getCookies() != null;
    }

    public function sendRequest($url, $method, $data)
    {
        if (!$this->isLoggedIn()) {
            $this->login();
        }

        return $this->_request($url, $method, $data);
    }

    protected function _request($url, $method, $data)
    {
        $client = new Client();
        $request = $client->createRequest()
            ->setMethod($method)
            ->setUrl('http://' . $this->remoteAddress . ':' . $this->port . '/' . $url)
            ->setData($data);

        if ($this->isLoggedIn())  {
            $request->setCookies($this->_getCookies());
        }

        $response = $request->send();

        return $response;
    }

    protected function _getCookies()
    {
        return \Yii::$app->session->get($this->sessionCookieKey, null);
    }
}