<?php
    use yii\helpers\Html;
    use admin\assets\AdminAsset;
    use yii\bootstrap\Nav;
    use yii\bootstrap\NavBar;

    AdminAsset::register($this);
?>
<?php $this->beginPage(); ?>
<!DOCTYPE html>
<html lang="ru" ng-app="cashier" ng-strict-di>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title ng-cloak ng-bind="pageTitle">Cashier</title>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="app.png" />
    <link rel="apple-touch-icon-precomposed" href="app.png" />
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<!--[if lt IE 9]>
<SCRIPT LANGUAGE="javascript">
    window.location.assign('/badbrowser.html');
</SCRIPT>
<![endif]-->

<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container-fluid" ng-controller="NavController">
            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="brand" href="/" title="Версия 0.14.4">Cashier</a>
            <div class="nav-collapse collapse">
                <ul class="nav pull-right">
                    <li class="divider-vertical"></li>
                    <li class="dropdown">
                        <a href="javascript://" title="Сменить язык интерфейса" class="dropdown-toggle" data-toggle="dropdown">RU <b class=caret></b></a>
                        <ul class="dropdown-menu" style="min-width:60px;">
                            <li><a ng-click="switchLanguage('ru')" href>RU - Русский</a></li>
                            <li><a ng-click="switchLanguage('en')" href>EN - English</a></li>
                            <li><a ng-click="switchLanguage('es')" href>ES - Español</a></li>
                            <li><a ng-click="switchLanguage('tr')" href>TR - Türkçe</a></li>
                            <li><a ng-click="switchLanguage('cz')" href>CZ - Čeština</a></li>
                            <!--<li><a ng-click="switchLanguage('fr')" href>FR - Français</a></li>-->
                        </ul>
                    </li>
                </ul>

                <ul ng-show="isLoggedIn" class="nav ng-cloak">
                    <li ng-class="{active: routeIs('/')}"><a href="/admin/#/">Главная</a></li>
                    <li ng-class="{active: routeIs('/accounts')}"><a href="/admin/#/accounts">Счета</a></li>
                    <li ng-class="{active: routeIs('/cashdesks')}"><a href="/admin/#/cashdesks">Кассы</a></li>
                    <li ng-class="{active: routeStartWith('/reports')}" class="dropdown">
                        <a href="javascript://" class="dropdown-toggle" data-toggle="dropdown">Отчеты <b class=caret></b></a>
                        <ul class="dropdown-menu">
                            <li class="nav-header">Ставки</li>
                            <li><a href="/admin/#/reports/overall">Обзорный отчет</a></li>
                            <li><a href="/admin/#/reports/sources">Расширенный отчет</a></li>
                            <li><a href="/admin/#/reports/accounts">Отчет по счетам</a></li>
                            <!--
                            <li><a href="/admin/#/reports/sessions">Отчет по сменам кассиров</a></li>
                            <li class="divider"></li>
                            <li class="nav-header">Карты</li>
                            <li><a href="/#/reports/cards">Отчет по картам</a></li>
                            <li><a href="/#/reports/gamer">Отчет по игрокам</a></li>
                            <li class="divider"></li>
                            <li class="nav-header">Устройства</li>
                            <li><a href="/#/reports/devices-income">Отчет по доходности</a></li>
                            <li><a href="/#/reports/games-income">Анализ доходности игр</a></li>
                            <li><a href="/#/reports/pins">Отчет по PIN/RFID</a></li>
                            <li><a href="/#/reports/bets-history">История по ставкам</a></li>
                            <li><a href="/#/reports/jackpots">Джекпоты</a></li>
                            <li><a href="/#/reports/2-ndfl">2-НДФЛ</a></li>
                            <li class="divider"></li>
                            <li class="nav-header">Кафе</li>
                            <li><a href="/#/reports/cafe-users">Отчет по игрокам</a></li>
                            <li><a href="/#/reports/cafe-games">Отчет по играм</a></li>
                            -->
                        </ul>
                    </li>
                    <li ng-class="{active: routeIs('/accounting')}"><a href="/admin/#/accounting">Бухгалтерия</a></li>
                    <li ng-class="{active: routeStartWith('/settings')}" class="dropdown">
                        <a href="javascript://" class="dropdown-toggle" data-toggle="dropdown">Настройки <b class=caret></b></a>
                        <ul class="dropdown-menu">
                            <li ng-class="{active: routeIs('/settings/sources')}"><a href="/admin/#/settings/sources">Источники</a></li>
                            <li ng-class="{active: routeIs('/settings/devices')}">
                               <!-- <a href="/admin/#/settings/devices">Устройства</a>-->
                            </li>
                         <!--   <li ng-class="{active: routeIs('/settings/jackpots')}"><a href="/admin/#/settings/jackpots">Джекпоты</a></li>
                            <li ng-show="hasRoleAdmin" ng-class="{active: routeIs('/settings/community-jackpots')}">
                                <a href="/admin/#/settings/community-jackpots">Коммунити джекпоты</a>
                            </li>-->
                        </ul>
                    </li>
                    <li ng-class="{active: routeStartWith('/cafe') || routeIs('/users') }" class="dropdown">
                        <a href="javascript://" class="dropdown-toggle" data-toggle="dropdown">Прочее <b class=caret></b></a>
                        <ul class="dropdown-menu">
                            <li ng-show="hasRoleMaster" ng-class="{active: routeIs('/users')}"><a href="/admin/#/users">Пользователи</a></li>
                            <li ng-show="hasRoleAdmin" ng-class="{active: routeIs('/users-admin')}"><a href="/admin/#/users-admin">Суперадмины</a></li>
                            <!--<li ng-show="hasRoleMaster" class="divider"></li>
                            <li class="nav-header">Кафе</li>
                            <li><a href="/admin/#/cafe/users">Пользователи</a></li>
                            <li><a href="/admin/#/cafe/money">Электронные деньги</a></li>-->
                        </ul>
                    </li>
                    <li class="navbar-text">v.73</li>
                </ul>
                <ul ng-hide="isLoggedIn" class="nav pull-right">
                    <li ng-class="{active: routeIs('/login')}"><a href="/admin/#/login">Войти</a></li>
                </ul>
                <ul ng-show="isLoggedIn" class="nav ng-cloak pull-right">
                    <!--<li><a ng-bind="login" href></a></li>-->
                    <li class="dropdown ng-cloak">
                        <a href="javascript://" class="dropdown-toggle" data-toggle="dropdown" ng-click="initHash()">{{ login }} <b class=caret></b></a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="input-append" style="margin: 5px 10px;">
                                    <input id="input-acc-code" class="input-xlarge" type="text" ng-model="hash">
                                    <button class="btn" type="button" ng-click="copyToClipboard()">Копировать</button>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><a ng-click="logout()" href>Выйти</a></li>
                </ul>
                <!--<form ng-show="isLoggedIn" class="navbar-search ng-cloak pull-right" ng-submit="search()">
                    <input id="search" type="text" class="search-query"
                           placeholder="Поиск..." ng-model="searchQuery">
                </form>-->
            </div>
        </div>
    </div>
</div>

<div id="acc-panel" class="container-fluid ng-cloak" ng-controller="AccountPanelCtrl" ng-show="uid">
    <div class="row-fluid">
        <form class="form-inline" style="margin-bottom: 10px;">
            <button ng-click="toggleSidebar()" class="btn" ng-class="showSidebar && 'dropup' || ''">
                <span class="caret"></span>
            </button>
            &nbsp;&nbsp;&nbsp;

            Поиск:
            <div class="input-append">
                <input type="text" ng-model="filter" style="width: 70px;">
                <div class="btn-group">
                    <button class="btn dropdown-toggle" data-toggle="dropdown">
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a tabindex="-1" ng-click="searchScope = 'id/name'" class="pointer"
                               ng-class="searchScope == 'id/name' && 'strong'">Номер/название</a>
                        </li>
                        <li><a tabindex="-1" ng-click="searchScope = 'parent'" class="pointer"
                               ng-class="searchScope == 'parent' && 'strong'">Родительский счет</a>
                        </li>
                        <li><a tabindex="-1" ng-click="searchScope = 'note'" class="pointer"
                               ng-class="searchScope == 'note' && 'strong'">Примечание</a>
                        </li>
                    </ul>
                </div>
            </div>
            <span ng-show="filter" class="pointer clear-filter" ng-click="filter = ''">&times;</span>
            &nbsp;&nbsp;&nbsp;

            Счет:
            <span ng-show="selectedAccounts.length == 0" class="label label-important">
                не выбран
            </span>

            <span ng-show="selectedAccounts.length == 1">
                <span ng-repeat="p in selectedAccounts[0].parents">
                    <span class="label">{{ p }}</span> >
                </span>
                <span class="label label-success">{{ selectedAccounts[0].name }} - {{ selectedAccounts[0].id }}</span>
                &nbsp;&nbsp;&nbsp;
            </span>

            <span ng-show="selectedAccounts.length > 1">
                <span class="label label-success">{{ selectedAccounts[0].name }}</span>,
                <span class="label label-success">{{ selectedAccounts[1].name }}</span>
                <span ng-show="selectedAccounts.length > 2">
                    и еще <span class="label label-info">{{ selectedAccounts.length - 2 }}</span>
                </span>
            </span>

            <div style="float: right;margin-top: 5px;" data-loading>
                <!--<img src="img/loader.gif">-->
                <img src="data:image/gif;base64,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"/>
                Загрузка...
            </div>
            <div ng-show="serverError" style="float: right;margin-top: 5px;">
                <span class="label label-important">Ошибка на сервере</span>
            </div>
        </form>

        <hr style="margin: 10px 0 8px;" />
    </div>
</div>

<div id="body">
    <div ng-controller="AccountSidebarCtrl" ng-show="showSidebar && accounts.length" class="body-left ng-cloak">
        <div id="sidebar-body">
            <div class="scroll-y">
                <div>
                    Выберите счета:
                    <span class="badge badge-success">{{ accounts.length }}</span>
                    <span class="badge badge-info">{{ filtered.length }}</span>
                </div>
                <div id="sidebar-hide-button">
                    <span class="pointer" ng-click="closeSidebar()">Скрыть</span>
                </div>
                <ul class="unstyled">
                    <li ng-class="'acc-entry acc-level' + acc.level" bindonce ng-repeat="acc in filtered"
                        bo-class="{'acc-deleted': acc.status == 0}">
                        <div class="node-expand node-{{ nodes[acc.id] || 'closed' }}" ng-click="clickNode(acc)"></div>
                        <input type="checkbox" ng-model="selected[acc.id]"
                               ng-change="updateSelectedAccounts(acc)">
                        <span ng-click="select(acc)" bo-html="'<b>' + acc.name + '</b> (' + acc.id + ')'"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="sidebar-footer">
            <form class="form-inline">
                <button class="btn" ng-click="clearAll()">Очистить все</button>
                &nbsp;&nbsp;&nbsp;
                <label class="checkbox" style="color:#dcdcdf;" title="Показывать удаленные">
                    <input type="checkbox" ng-model="showDeleted"> Удаленные
                </label>
            </form>
        </div>
        <div id="sidebar-filter-message" ng-show="isLimitedFilter && isFiltered && filtered.length == 20">
            <a href="javascript://" ng-click="showAllFiltered()">Показать все отфильтрованные записи</a>
        </div>
    </div>

    <div class="body-right scroll-y scroll-x" ng-view>

    </div>
</div>


<?php $this->endBody() ?>

<script type="text/javascript">
    moment.locale('ru');

    var datetimePickerRanges = {
        'Сегодня': [moment().startOf('day'), moment().endOf('day')],
        'Вчера': [moment().add(-1, 'days').startOf('day'), moment().add(-1, 'days').endOf('day')],
        'Последние 7 дней': [moment().add(-6, 'days').startOf('day'), moment().endOf('day')],
        'Последние 30 дней': [moment().add(-29, 'days').startOf('day'), moment().endOf('day')],
        'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
        'Прошлый месяц': [moment().add(-1, 'months').startOf('month'), moment().add(-1, 'months').endOf('month')]
    };
    var datePickerRanges = datetimePickerRanges;
    datePickerRanges['Весь период работы'] = [moment('2000-01-01'), moment().endOf('day')];

    var datePickerLocale = {
        applyLabel: 'Выбрать',
        cancelLabel: 'Отмена',
        fromLabel: 'От',
        toLabel: 'До',
        weekLabel: 'Н',
        customRangeLabel: 'Выбрать...',
        monthNames: moment.months(),
        daysOfWeek: moment.weekdaysShort(),
        firstDay: moment.localeData().firstDayOfWeek()
    };
    var datePickerLifetimeLabel = 'Весь период работы';
</script>

<script type="text/javascript">
    $(window).resize(function(){
        $('#body').css('top', $(".navbar").height() + $("#acc-panel").height() + 10);
    })
</script>

</body>
</html>
<?php $this->endPage() ?>
