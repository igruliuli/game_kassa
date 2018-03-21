<?php
/* @var $this \yii\web\View */
/* @var $content string */
/* @var \app\models\Zone[] $zones */

use yii\helpers\Html;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
    <head>
        <meta charset="<?= Yii::$app->charset ?>">
        <?= Html::csrfMetaTags() ?>
        <title><?php echo Html::encode(\config\Config::getValue('meta_title')); ?></title>
        <meta property="og:image" content="http://techfest.interpipe.biz/image/ogimage.jpg">
        <meta name="description" content="<?php echo Html::encode(\config\Config::getValue('meta_description')); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php $this->head() ?>
        <script type="text/javascript" src="//vk.com/js/api/openapi.js?125"></script>
        <script type="text/javascript">
            VK.init({
                apiId: 5565959,
                onlyWidgets: true
            });
        </script>
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript">
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter39121115 = new Ya.Metrika({
                            id:39121115,
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                        });
                    } catch(e) { }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://mc.yandex.ru/metrika/watch.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
            })(document, window, "yandex_metrika_callbacks");
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/39121115" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
    </head>
    <body>
        <div id="fb-root"></div>
        <script>
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.7";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
        <?php $this->beginBody() ?>

        <div class="row">
            <nav class="navbar navbar-default navbar-static-top"">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="#down4">О фестивале</a></li>
                            <li><a href="#down1">Локации</a></li>
                            <?php if (\config\Config::getValue('program_status') == 1): ?>
                            <li><a href="#down5">Программа</a></li>
                            <?php endif; ?>
                            <?php if (\config\Config::getValue('lektory_status') == 1): ?>
                            <li><a href="#down6">Лекторий</a></li>
                            <?php endif; ?>
                            <li><a href="#" data-toggle="modal" data-target="#buyTicketModal">Купить билет</a></li>
                            <li><a href="#down7">Участники</a></li>
                            <li><a href="#down10">Партнеры</a></li>
                            <li><a href="#down3">Новости</a></li>
                            <li><a href="#down9">Фуд-корт</a></li>
                            <li><a href="#down8">Карта</a></li>
                            <li><a href="javascript:;" data-toggle="modal" data-target="#contactModal">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="modal fade" id="contactModal" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button class="close" type="button" data-dismiss="modal">&times;</button>
                            <h3 class="modal-title" id="myModalLabel">Контакты</h3>
                        </div>
                        <div class="modal-body">
                            <?php echo \config\Config::getValue('contacts_text'); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php echo $content; ?>

        <?php $this->endBody() ?>

        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-82213619-1', 'auto');
            ga('send', 'pageview');
        </script>

        <!-- Facebook Pixel Code -->
        <script>
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1011062082347317');
            fbq('track', "PageView");
        </script>
        <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=1011062082347317&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Facebook Pixel Code -->
    </body>
</html>
<?php $this->endPage() ?>
