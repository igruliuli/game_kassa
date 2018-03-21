<?php
	/** @var \app\modules\user\models\User $user */
	use yii\helpers\Html;
	use yii\helpers\Url;
	$url = Url::toRoute(['/user/auth/activation', 'key' => $user->key, 'email' => $user->email], true);
?>

Для активации аккаунта перейдите по ссылке <?php echo Html::a($url, $url, ['_target' => 'blank']); ?>