var fFupdateKenoGOLD = function () {
    try {
        if (kenogon == 0) return;
        var updateTime = 2000;
        if (vUpdateData.hall == "2") return;
        $.ajax({

            type: 'get',
            url: (vUpdateData.isHttps == 1 ? 'https://srv.flg.club:3409/clnt.ashx?' : '/3309/clnt.ashx?') + vUpdateData.srv10,

            data: {},

            dataType: 'json',
            success: function (data, status, jqXHR) {
                aGameDate[10] = data;
                try {
                    if (data.jp1 != undefined) {
                        $('#jackpotkenogold').text('JP:' + (data.jp1 / 100));
                        $('#jackpotkenogold').show();
                        $('#jpqkfkenogold').show();
                    } else {
                        $('#jackpotkenogold').text('JP:');
                        $('#jackpotkenogold').hide();
                        $('#jpqkfkenogold').hide();
                    }
                } catch (exc) {
                }
                $('#kenoroundGOLD').text(aLang[118][LangID] + ': ' + (parseInt(data.tir) + 1));
                if (data.t2 > 7) {

                    $('#KenoRoundTimeGOLD').css('width', (822 - (822 / 250) * (data.t2 - 7)) + 'px');
                    iKenoRoundTimeGOLD = parseFloat(data.t2 - 7);
                    if (data.betoff == 1) $('#KenoRoundTimeGOLD').css('background-color', 'Red');
                    else {
                        if (iKenoRoundTimeGOLD < 30) {
                            if (iKenoRoundTimeGOLD < 2) {
                                $('#KenoRoundTimeGOLD').css('background-color', 'Red');
                            }
                            else {
                                $('#KenoRoundTimeGOLD').css('background-color', 'Yellow');
                            }
                        }
                        else {
                            $('#KenoRoundTimeGOLD').css('background-color', 'Lime');
                        }
                    }
                    updateTime = 3000;
                    //fWriteInfo('�� ������ ���������� ������ ' + data.t2 + '���.');
                }
                setTimeout(function () {
                    fFupdateKenoGOLD();
                }, updateTime);
            }
            ,
            error: function (data, status, jqXHR) {
                fWriteInfo("Ошибка соединения, проверте подключение к интернету (kenoGold) (\"+status+\")", 'red');
                setTimeout(function () {
                    fFupdateKenoGOLD();
                }, 5000);
            }
        });
    }
    catch (exc) {
        setTimeout(function () {
            fFupdateKenoGOLD();
        }, 500);
    }

}

var fFupdateKeno = function () {
    try {
        if (kenoon == 0) return;
        var updateTime = 2000;

        $.ajax({
            type: 'get',
            url: (vUpdateData.isHttps == 1 ? 'https://srv.flg.club:3402/clnt.ashx?' : '/3302/clnt.ashx?') + vUpdateData.srv7,
            data: {},

            dataType: 'json',
            success: function (data, status, jqXHR) {
                aGameDate[7] = data;
                try {
                    if (data.jp1 != undefined) {
                        $('#jackpotkeno').text('JP:' + (data.jp1 / 100));
                        $('#jackpotkeno').show();
                        $('#jpqkfkeno').show();
                    } else {
                        $('#jackpotkeno').text('JP:');
                        $('#jackpotkeno').hide();
                        $('#jpqkfkeno').hide();
                    }
                } catch (exc) {
                }
                $('#kenoround').text(aLang[118][LangID] + ': ' + (parseInt(data.tir) + 1));
                if (data.t2 > 0) {
                    $('#KenoRoundTime').css('width', (822 - (822 / (173)) * (data.t2)) + 'px');
                    iKenoRoundTime = parseFloat(data.t2);
                    if (data.betoff == 1) $('#KenoRoundTime').css('background-color', 'Red');
                    else {
                        if (iKenoRoundTime < 30) {
                            if (iKenoRoundTime < 2) {
                                $('#KenoRoundTime').css('background-color', 'Red');
                            }
                            else {
                                $('#KenoRoundTime').css('background-color', 'Yellow');
                            }
                        }
                        else {
                            $('#KenoRoundTime').css('background-color', 'Lime');
                        }
                    }
                    updateTime = 3000;

                }
                setTimeout(function () {
                    fFupdateKeno();
                }, updateTime);
            }
            ,
            error: function (data, status, jqXHR) {//возвращаемый результат от сервера
                fWriteInfo("Ошибка соединения, проверте подключение к интернету (keno) ("+status+")", 'red');

                setTimeout(function () {
                    fFupdateKeno();
                }, 5000);
            }
        });
    }
    catch (exc) {
        setTimeout(function () {
            fFupdateKeno();
        }, 500);
    }

}

var fFupdateKenoEm = function () {
    try {
        if (vUpdateData.kenoemon == 0) return;
        var updateTime = 2000;
        if (vUpdateData.hall == "2") return;
        $.ajax({

            type: 'get',
            url: (vUpdateData.isHttps == 1 ? 'https://srv.flg.club:3408/clnt.ashx?' : '/3310/clnt.ashx?') + vUpdateData.srv9,
            data: {},

            dataType: 'json',
            success: function (data, status, jqXHR) {
                aGameDate[9] = data;
                $('#kenoroundEm').text(aLang[118][LangID] + ': ' + (data.str));
                if (data.t2 > 7) {
                    if (data.betoff == 0) {
                        $('#KenoRoundTimeEm').css('width', (822 - (822 / 71) * (data.t2)) + 'px');
                        iKenoRoundTimeEm = parseFloat(data.t2);
                    }
                    else {
                        iKenoRoundTimeEm = 0;
                        $('#KenoRoundTimeEm').css('width', (822 + 'px'));
                    }
                    if (data.betoff == 1) $('#KenoRoundTimeEm').css('background-color', 'Red');
                    else {
                        if (iKenoRoundTimeEm < 30) {
                            if (iKenoRoundTimeEm < 2) {
                                $('#KenoRoundTimeEm').css('background-color', 'Red');
                            }
                            else {
                                $('#KenoRoundTimeEm').css('background-color', 'Yellow');
                            }
                        }
                        else {
                            $('#KenoRoundTimeEm').css('background-color', 'Lime');
                        }
                    }
                    updateTime = 3000;

                }
                setTimeout(function () {
                    fFupdateKenoEm();
                }, updateTime);
            }
            ,
            error: function (data, status, jqXHR) {
                fWriteInfo("Ошибка соединения, проверте подключение к интернету (kenoBet) ("+status+")", 'red');
                setTimeout(function () {
                    fFupdateKenoEm();
                }, 5000);
            }
        });
    }
    catch (exc) {
        setTimeout(function () {
            fFupdateKenoEm();
        }, 500);
    }

}

var fFupdateKenoEm3 = function () {
    try {
        if (vUpdateData.kenoemon == 0) return;
        var updateTime = 2000;
        if (vUpdateData.hall == "2") return;
        $.ajax({

            type: 'get',
            url: (vUpdateData.isHttps == 1 ? 'https://srv.flg.club:3408/clnt.ashx?' : '/3308/clnt.ashx?') + vUpdateData.srv19 + "&idsrv=19",
            data: {},

            dataType: 'json',
            success: function (data, status, jqXHR) {
                aGameDate[19] = data;
                try {
                    if (data.jp1 != undefined) {
                        $('#jackpotkenofast3').text('JP:' + (data.jp1 / 100));
                        $('#jackpotkenofast3').show();
                        $('#jpqkf3').show();
                    } else {
                        $('#jackpotkenofast3').text('JP:');
                        $('#jackpotkenofast3').hide();
                        $('#jpqkf3').hide();
                    }
                } catch (exc) {
                }
                $('#kenoroundEm3').text(aLang[118][LangID] + ': ' + (data.str));
                if (data.t2 > 7) {
                    if (data.betoff == 0) {
                        $('#KenoRoundTimeEm3').css('width', (822 - (822 / (135 * 2)) * (data.t2)) + 'px');
                        iKenoRoundTimeEm3 = parseFloat(data.t2);
                    }
                    else {
                        iKenoRoundTimeEm3 = 0;
                        $('#KenoRoundTimeEm3').css('width', (822 + 'px'));
                    }
                    if (data.betoff == 1) $('#KenoRoundTimeEm3').css('background-color', 'Red');
                    else {
                        if (iKenoRoundTimeEm3 < 30) {
                            if (iKenoRoundTimeEm3 < 2) {
                                $('#KenoRoundTimeEm3').css('background-color', 'Red');
                            }
                            else {
                                $('#KenoRoundTimeEm3').css('background-color', 'Yellow');
                            }
                        }
                        else {
                            $('#KenoRoundTimeEm3').css('background-color', 'Lime');
                        }
                    }
                    updateTime = 3000;

                }
                setTimeout(function () {
                    fFupdateKenoEm3();
                }, updateTime);
            }
            ,
            error: function (data, status, jqXHR) {
                fWriteInfo("Ошибка соединения, проверте подключение к интернету (JxKeno) ("+status+")", 'red');
                setTimeout(function () {
                    fFupdateKenoEm3();
                }, 5000);
            }
        });
    }
    catch (exc) {
        setTimeout(function () {
            fFupdateKenoEm3();
        }, 500);
    }

}

var fFupdateKenoEm2 = function () {
    try {
        if (kenoon == 0) return;
        var updateTime = 2000;
        if (vUpdateData.hall == "2") return;
        $.ajax({

            type: 'get',
            url: (vUpdateData.isHttps == 1 ? 'https://srv.flg.club:3411/clnt.ashx?' : '/3311/clnt.ashx?') + vUpdateData.srv11,
            data: {},

            dataType: 'json',
            success: function (data, status, jqXHR) {
                aGameDate[11] = data;
                try {
                    if (data.jp1 != undefined) {
                        $('#jackpotkenofast').text('JP:' + (data.jp1 / 100));
                        $('#jackpotkenofast').show();
                        $('#jpqkf').show();
                    } else {
                        $('#jackpotkenofast').text('JP:');
                        $('#jackpotkenofast').hide();
                        $('#jpqkf').hide();
                    }
                } catch (exc) {
                }
                $('#kenoroundEm2').text(aLang[118][LangID] + ': ' + (parseInt(data.tir) + 1));
                if (data.t2 > 0) {
                    $('#KenoRoundTimeEm2').css('width', (822 - (822 / 71) * (data.t2)) + 'px');
                    iKenoRoundTimeEm2 = parseFloat(data.t2);
                    if (data.betoff == 1) $('#KenoRoundTimeEm2').css('background-color', 'Red');
                    else {
                        if (iKenoRoundTimeEm2 < 30) {
                            if (iKenoRoundTimeEm2 < 2) {
                                $('#KenoRoundTimeEm2').css('background-color', 'Red');
                            }
                            else {
                                $('#KenoRoundTimeEm2').css('background-color', 'Yellow');
                            }
                        }
                        else {
                            $('#KenoRoundTimeEm2').css('background-color', 'Lime');
                        }
                    }
                    updateTime = 3000;

                }
                setTimeout(function () {
                    fFupdateKenoEm2();
                }, updateTime);
            }
            ,
            error: function (data, status, jqXHR) {//������������ ��������� �� �������
                fWriteInfo("Ошибка соединения, проверте подключение к интернету (kenoFast) ("+status+")", 'red');
                setTimeout(function () {
                    fFupdateKenoEm2();
                }, 5000);
            }
        });
    }
    catch (exc) {
        setTimeout(function () {
            fFupdateKenoEm2();
        }, 500);
    }
}

