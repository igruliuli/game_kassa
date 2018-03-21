<?php

$params = require(__DIR__ . '/params.php');
$basePath = dirname(__DIR__);

$extensionsFile = $basePath . '/vendor/yiisoft/extensions.php';

$extensions = is_file($extensionsFile) ? include($extensionsFile) : [];

$config = [
    'id' => 'kassa',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'language' => 'ru',
    'defaultRoute' => 'index',
    'timeZone' => 'Europe/Kiev',
    'extensions' => array_merge($extensions, [
        'sortablelistview' => [
            'name' => 'sortablelistview',
            'version' => '1.0.0',
            'alias' => [
                '@sortablelist' => dirname(__DIR__) . '/extensions/sortable-list-view'
            ]
        ],
        'config' => [
            'name' => 'config',
            'version' => '1.0.0',
            'alias' => [
                '@config' => dirname(__DIR__) . '/extensions/config'
            ]
        ],
        'googlemap' => [
            'name' => 'google map',
            'version' => '1.0.0',
            'alias' => [
                '@googlemap' => dirname(__DIR__) . '/extensions/googlemap'
            ]
        ],
        'ckeditor' => [
            'name' => 'ckeditor',
            'version' => '1',
            'alias' => [
                '@ckeditor' => dirname(__DIR__) . '/extensions/ckeditor'
            ]
        ],
    ]),
    'components' => [
        'request' => [
            'baseUrl'=> '',
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'CN3b1WqnYzhPuHFxv-ob1aZAQcwdoGKi',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'loginUrl' => '/login',
            'identityClass' => 'app\modules\user\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'index/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
                [
                    'class' => 'app\libraries\log\DebugTarget',
                    'levels' => ['info'],
                    'categories' => ['debug']
                ]
            ],
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                'srvloto.ashx' => 'kassa/server',
                '<server>/history.ashx' => 'kassa/history',
                'default.aspx' => 'kassa/index',
                '<server>/clnt.ashx' => 'kassa/client',
                'login.aspx' => 'kassa/login'
            ]
        ],
        //'db' => require(__DIR__ . '/db.php'),
        /*
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
        */
        'i18n' => [
            'class' => 'yii\i18n\I18N',
            'translations' => [
                'user' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                    'basePath' => '@app/modules/user/messages',
                ]
            ]
        ],
    ],
    'modules' => [
        'user' => 'app\modules\user\Module',
        'admin' => 'app\modules\admin\Module',
        //'textpage' => 'app\modules\textpage\Module',
    ],
    'params' => $params,
];

if (YII_DEBUG) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        'allowedIPs' => ['194.183.179.239'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        'allowedIPs' => ['194.183.179.239'],
    ];
}

return $config;
