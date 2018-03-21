var fFupdateFortune = function () {
    try{	if(rulon==0)return;

        var updateTime = 5000;
        $.ajax({

            type: 'get', //тип запроса: get,post либо head
            url:  (vUpdateData.isHttps==1?'https://srv.flg.club:3403/clnt.ashx?':'/3303/clnt.ashx?')+vUpdateData.srv6,
            data: {  }, //параметры запроса

            dataType: 'json', //тип возвращаемого ответа text либо xml
            success: function (data, status, jqXHR) {
                aGameDate[6] = data;
                if($('.gbutton4:eq(0)').children('.textcapt').text()==""){fGetFortuneHistory(data.ball,data.tir);}
                if (iFortWinBall == 99) {
                    if (data.ball != 99) {
                        iFortWinBall = data.ball;

                        //fSetFortuneHistoryBall($('.gbutton4:eq(0)'), data.ball, 1, data.tir);
                        fGetFortuneHistory(data.ball,data.tir);
                    }
                }
                else {
                    if (data.ball == 99) {


                        iFortWinBall = 99;
                    }
                }
                $('#Round').text(aLang[118][LangID] + ': ' + (parseInt(data.tir)+1));
                if (data.t2 > -8) {
                    $('#FortuneRoundTime').css('width', (857 - (857 / (60+95)) * (data.t2 + 8)) + 'px');
                    iFortuneRoundTime = parseFloat(data.t2 + 8);
                    updateTime = 3000;
                    if (data.betoff == 1) {$('#FortuneRoundTime').css('background-color', 'Red'); }
                    else {


                    }
                    //fWriteInfo('До начала следующего тиража ' + data.t2 + 'сек.');
                }
                setTimeout(function () { fFupdateFortune(); }, updateTime);
            }
            ,
            error: function (data, status, jqXHR) {//возвращаемый результат от сервера
                fWriteInfo("Ошибка соединения, проверте подключение к интернету", 'red');
                setTimeout(function () { fFupdateFortune(); }, 5000);
            }
        });
    }
    catch(exc){
        setTimeout(function () { fFupdateFortune(); }, 500);
    }

}
var fFupdateFortuneEM2 = function () {

    try{	if(rulon==0)return;
        if(vUpdateData.hall=="2")return;
        var updateTime = 5000;
        $.ajax({

            type: 'get', //тип запроса: get,post либо head
            url:  (vUpdateData.isHttps==1?'https://srv.flg.club:3413/clnt.ashx?':'/3313/clnt.ashx?')+vUpdateData.srv13,
            data: {  }, //параметры запроса

            dataType: 'json', //тип возвращаемого ответа text либо xml
            success: function (data, status, jqXHR) {//возвращаемый результат от сервера
                aGameDate[13] = data;
                if($('.gbutton4EM2:eq(0)').children('.textcapt').text()==""){fGetFortuneHistoryEM2(data.ball,data.tir);}
                if (iFortWinBallEM2 == 99) {
                    if (data.ball != 99) {
                        iFortWinBallEM2 = data.ball;

                        //fSetFortuneHistoryBall($('.gbutton4:eq(0)'), data.ball, 1, data.tir);
                        fGetFortuneHistoryEM2(data.ball,data.tir);
                    }
                }
                else {
                    if (data.ball == 99) {


                        iFortWinBallEM2 = 99;
                    }
                }
                $('#RoundEM2').text(aLang[118][LangID] + ': ' + (parseInt(data.tir)+1));
                if (data.t2 > 0) {
                    $('#FortuneRoundTimeEM2').css('width', (857 - (857 / 83) * (data.t2)) + 'px');
                    iFortuneRoundTimeEM2 = parseFloat(data.t2);
                    updateTime = 3000;
                    if (data.betoff == 1) {$('#FortuneRoundTimeEM2').css('background-color', 'Red'); }
                    else {


                    }
                    //fWriteInfo('До начала следующего тиража ' + data.t2 + 'сек.');
                }
                setTimeout(function () { fFupdateFortuneEM2(); }, updateTime);
            }

            ,
            error: function (data, status, jqXHR) {//возвращаемый результат от сервера
                fWriteInfo("Ошибка соединения, проверте подключение к интернету", 'red');
                setTimeout(function () { fFupdateFortuneEM2(); }, 5000);

            }
        });
    }
    catch(exc){
        setTimeout(function () { fFupdateFortuneEM2(); }, 500);
    }

}
var fFupdateFortuneEM = function () {
    try{	if(rulemon==0)return;
        if(vUpdateData.hall=="2")return;
        var updateTime = 5000;
        $.ajax({

            type: 'get', //тип запроса: get,post либо head
            url:  '/3307/clnt.ashx?' + vUpdateData.srv8,
            data: {  }, //параметры запроса

            dataType: 'json', //тип возвращаемого ответа text либо xml
            success: function (data, status, jqXHR) {//возвращаемый результат от сервера
                aGameDate[8] = data;
                if($('.gbutton4EM:eq(0)').children('.textcapt').text()==""){fGetFortuneHistoryEM(data.ball,data.tir);}
                if (iFortWinBallEM == 99) {
                    if (data.ballEM != 99) {
                        iFortWinBallEM = data.ball;

                        //fSetFortuneHistoryBall($('.gbutton4:eq(0)'), data.ball, 1, data.tir);
                        fGetFortuneHistoryEM(data.ball,data.tir);
                    }
                }
                else {
                    if (data.ball == 99) {
                        iFortWinBallEM = 99;
                    }
                }

                $('#RoundEM').text(aLang[118][LangID] + ': ' + (parseInt(data.tir)+1));
                if (data.t2 > 0) {
                    $('#FortuneRoundTimeEM').css('width', (857 - (857 / 83) * (data.t2)) + 'px');
                    iFortuneRoundTimeEM = parseFloat(data.t2);
                    updateTime = 3000;
                    if (data.bf == 1) {$('#RoundEndEM').show(); $('#FortuneRoundTimeEM').css('background-color', 'Red'); }
                    else {
                        $('#RoundEndEM').hide();
                        if (iFortuneRoundTimeEM < 30) {
                            if (iFortuneRoundTimeEM < 2) {
                                $('#FortuneRoundTimeEM').css('background-color', 'Red');
                            }
                            else {
                                $('#FortuneRoundTimeEM').css('background-color', 'Yellow');
                            }
                        }
                        else {
                            $('#FortuneRoundTimeEM').css('background-color', 'Lime');
                        }
                    }
                    //fWriteInfo('До начала следующего тиража ' + data.tk + 'сек.');
                }
                setTimeout(function () { fFupdateFortuneEM(); }, updateTime);
            }
            ,
            error: function (data, status, jqXHR) {//возвращаемый результат от сервера
                //    fWriteInfo("Ошибка соединения, проверте подключение к интернету", 'red');
                setTimeout(function () { fFupdateFortuneEM(); }, 5000);
            }
        });
    }
    catch(exc){
        setTimeout(function () { fFupdateFortuneEM(); }, 500);
    }

}