<?php

require(__DIR__ . '/../vendor/autoload.php');

// comment out the following two lines when deployed to production

    defined('YII_DEBUG') or define('YII_DEBUG', true);
    defined('YII_ENV') or define('YII_ENV', 'live');

require(__DIR__ . '/../vendor/yiisoft/yii2/Yii.php');

$config = \yii\helpers\ArrayHelper::merge(
    require(dirname(__FILE__).'/../config/web.php'),
    require(dirname(__FILE__).'/../config/' . YII_ENV . '.php')
);

(new yii\web\Application($config))->run();
