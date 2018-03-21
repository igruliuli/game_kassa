<?php

namespace app\modules\user\controllers;

use yii\web\Controller;
use yii\filters\AccessControl;
use app\libraries\behaviors\JsonResponseBehavior;

/**
 * @method  createResponse(array $data = [])
 */
class CafeController extends Controller
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

    public function actionExchangeRates()
    {
        $data = json_decode('[{"code":"ALL","name":"Албанский Лек","rate":0.5245},{"code":"AMD","name":"Армянских драмов","rate":0.137925},{"code":"ARS","name":"Аргентинское песо","rate":4.2773},{"code":"AUD","name":"Австралийский доллар","rate":49.7039},{"code":"AZN","name":"Азербайджанский манат","rate":38.366},{"code":"BGN","name":"Болгарский лев","rate":36.2162},{"code":"BRL","name":"Бразильский реал","rate":19.4189},{"code":"BYN","name":"Белорусский рубль","rate":33.6875},{"code":"BYR","name":"Белорусских рублей","rate":0.0032000702},{"code":"CAD","name":"Канадский доллар","rate":48.54},{"code":"CHF","name":"Швейцарский франк","rate":66.1967},{"code":"CLP","name":"Чилийское Песо","rate":0.0984},{"code":"CNY","name":"Китайских юаней","rate":9.62768},{"code":"COP","name":"Колумбийское песо","rate":0.0212},{"code":"CZK","name":"Чешских крон","rate":2.62246},{"code":"DKK","name":"Датских крон","rate":9.518721},{"code":"EUR","name":"Евро","rate":71.0488},{"code":"GBP","name":"Фунт стерлингов Соединенного королевства","rate":82.3239},{"code":"GEL","name":"Грузинские лари","rate":26.6075},{"code":"GHS","name":"Ганский седи","rate":16.7543},{"code":"HUF","name":"Венгерских форинтов","rate":0.228836},{"code":"INR","name":"Индийских рупий","rate":0.972571},{"code":"IQD","name":"Иракский динар","rate":0.057},{"code":"JPY","name":"Японских иен","rate":0.611023},{"code":"KES","name":"Кеннийский шиллинг","rate":0.6497},{"code":"KGS","name":"Киргизских сомов","rate":0.954895},{"code":"KRW","name":"Вон Республики Корея","rate":0.0560381},{"code":"KZT","name":"Казахских тенге","rate":0.191473},{"code":"LTL","name":"Литовский лит","rate":19.8421},{"code":"LVL","name":"Латвийский лат","rate":64.4366},{"code":"MDL","name":"Молдавских леев","rate":3.28638},{"code":"MXN","name":"Мексиканское песо","rate":3.188},{"code":"NGN","name":"Нигерийская найра","rate":0.2152},{"code":"NOK","name":"Норвежских крон","rate":7.78559},{"code":"PEN","name":"Перуанский новый соль","rate":19.3373},{"code":"PKR","name":"Пакистанская рупия","rate":0.6307},{"code":"PLN","name":"Польских злотых","rate":16.0926},{"code":"PYG","name":"Парагвайский гуарани","rate":0.0115},{"code":"RON","name":"Новых румынских леев","rate":15.6916},{"code":"RUR","name":"Российский рубль","rate":1},{"code":"RWF","name":"Руандийский франк","rate":0.0816},{"code":"SEK","name":"Шведских крон","rate":7.20543},{"code":"SGD","name":"Сингапурский доллар","rate":46.4844},{"code":"SLL","name":"Сьерра Леонcкая леоне","rate":0.0119},{"code":"TJS","name":"Таджикских сомони","rate":8.34187},{"code":"TMT","name":"Новый туркменский манат","rate":18.7933},{"code":"TRY","name":"Турецкая лира","rate":20.0729},{"code":"TZS","name":"Танзанийский шиллинг","rate":0.0301},{"code":"UAH","name":"Украинских гривен","rate":2.57061},{"code":"UGX","name":"Угандийский шиллинг","rate":0.0186},{"code":"USD","name":"Доллар США","rate":65.8591},{"code":"UYU","name":"Уругвайский песо","rate":2.3515},{"code":"UZS","name":"Узбекских сумов","rate":0.0209813},{"code":"VEF","name":"Венесуэльский боливар","rate":6.5633},{"code":"XAF","name":"Центрально-африканский Франк","rate":0.1078},{"code":"XDR","name":"СДР (специальные права заимствования)","rate":90.4035},{"code":"ZAR","name":"Южноафриканских рэндов","rate":4.54866},{"code":"ZMW","name":"Замбийская квача","rate":6.7302},{"code":"ZWL","name":"Доллар Зимбабве","rate":0.2031}]');

        return $this->createResponse($data);
    }
}