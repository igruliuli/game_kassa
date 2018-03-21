var tFortuneClock = setInterval(function () {
if (iKenoRoundTime > 0) {
$('#KenoRoundTimeTIME').text(parseInt(iKenoRoundTime));
$('#KenoRoundTime').css('width', (822 - (822 / (173)) * iKenoRoundTime) + 'px');
iKenoRoundTime -= 0.1;
} else {$('#KenoRoundTimeTIME').text(0); }
if (iKenoRoundTimeEm > 0) {
$('#KenoRoundTimeTIMEEm').text(parseInt(iKenoRoundTimeEm));
$('#KenoRoundTimeEm').css('width', (822 - (822 / (60*4)) * iKenoRoundTimeEm) + 'px');
iKenoRoundTimeEm -= 0.1;
} else {$('#KenoRoundTimeTIMEEm').text(0); }
if (iKenoRoundTimeEm2 > 0) {
$('#KenoRoundTimeTIMEEm2').text(parseInt(iKenoRoundTimeEm2));
$('#KenoRoundTimeEm2').css('width', 822 - (822 / (71)) * iKenoRoundTimeEm2 + 'px');
iKenoRoundTimeEm2 -= 0.1;
} else {$('#KenoRoundTimeTIMEEm2').text(0); }
if (iKenoRoundTimeEm3 > 0) {
$('#KenoRoundTimeTIMEEm3').text(parseInt(iKenoRoundTimeEm3));
$('#KenoRoundTimeEm3').css('width', (822 - (822 / (135*2)) * iKenoRoundTimeEm3) + 'px');
iKenoRoundTimeEm3 -= 0.1;
} else {$('#KenoRoundTimeTIMEEm3').text(0); }
if (iKenoRoundTimeEm4 > 0) {
$('#KenoRoundTimeTIMEEm4').text(parseInt(iKenoRoundTimeEm4));
$('#KenoRoundTimeEm4').css('width', (822 - (822 / (240)) * iKenoRoundTimeEm4) + 'px');
iKenoRoundTimeEm4 -= 0.1;
} else {$('#KenoRoundTimeTIMEEm4').text(0); }
if (iKenoRoundTimeEm5 > 0) {
$('#KenoRoundTimeTIMEEm5').text(parseInt(iKenoRoundTimeEm5));
$('#KenoRoundTimeEm5').css('width', (822 - (822 / (180)) * iKenoRoundTimeEm5) + 'px');
iKenoRoundTimeEm5 -= 0.1;
} else {$('#KenoRoundTimeTIMEEm5').text(0); }
if (iKenoRoundTimeGOLD > 0) {
$('#KenoRoundTimeGOLDTIME').text(parseInt(iKenoRoundTimeGOLD));
$('#KenoRoundTimeGOLD').css('width', (822 - (822 / 250) * iKenoRoundTimeGOLD) + 'px');
iKenoRoundTimeGOLD -= 0.1;
} else {$('#KenoRoundTimeGOLDTIME').text(0); }
if (iFortuneRoundTime > 0) {
$('#FortuneRoundTimeTIME').text(parseInt(iFortuneRoundTime));
$('#FortuneRoundTime').css('width', (857 - (857 / (60+95)) * iFortuneRoundTime) + 'px');
iFortuneRoundTime -= 0.1;
} else {$('#FortuneRoundTimeTIME').text(0); }
if (iFortuneRoundTimeEM > 0) {
$('#FortuneRoundTimeTIMEEM').text(parseInt(iFortuneRoundTimeEM));
$('#FortuneRoundTimeEM').css('width', (857 - (857 / (150)) * iFortuneRoundTimeEM) + 'px');
iFortuneRoundTimeEM -= 0.1;

} else {$('#FortuneRoundTimeTIMEEM').text(0); }
if (iFortuneRoundTimeEM2 > 0) {
$('#FortuneRoundTimeTIMEEM2').text(parseInt(iFortuneRoundTimeEM2));
$('#FortuneRoundTimeEM2').css('width', (857 - (857 / (83)) * iFortuneRoundTimeEM2) + 'px');
iFortuneRoundTimeEM2 -= 0.1;

} else {$('#FortuneRoundTimeTIMEEM2').text(0); }

if (iFortuneRoundTimeEM3 > 0) {
$('#FortuneRoundTimeTIMEEM3').text(parseInt(iFortuneRoundTimeEM3));
$('#FortuneRoundTimeEM3').css('width', (857 - (857 / (180)) * iFortuneRoundTimeEM3) + 'px');
iFortuneRoundTimeEM3 -= 0.1;

} else {$('#FortuneRoundTimeTIMEEM3').text(0); }

if (iPoker4RoundTime > 0) {
$('#PokerUpdateRound1TIME').text(parseInt(iPoker4RoundTime));
$('#PokerUpdateRound1').css('height', (204 - (204 / gg1) * iPoker4RoundTime) + 'px');
$('#PokerUpdateRound1').css('top', 269 - (204 - (204 / gg1) * iPoker4RoundTime) + 'px');
iPoker4RoundTime -= 0.1;
} else {$('#PokerUpdateRound1TIME').text(0); }

if (iPoker6RoundTime > 0) {
$('#PokerUpdateRound2TIME').text(parseInt(iPoker6RoundTime));
$('#PokerUpdateRound2').css('height', (204 - (204 / gg2) * iPoker6RoundTime) + 'px');
$('#PokerUpdateRound2').css('top', 511 - (204 - (204 / gg2) * iPoker6RoundTime) + 'px');
iPoker6RoundTime -= 0.1;
} else {$('#PokerUpdateRound2TIME').text(0); }

if (iPoker8RoundTime > 0) {
$('#PokerUpdateRound3TIME').text(parseInt(iPoker8RoundTime));
$('#PokerUpdateRound3').css('height', (204 - (204 / gg3) * iPoker8RoundTime) + 'px');
$('#PokerUpdateRound3').css('top', 752 - (204 - (204 / gg3) * iPoker8RoundTime) + 'px');
iPoker8RoundTime -= 0.1;
} else {$('#PokerUpdateRound3TIME').text(0); }

if (iKenoRoundTimeGOLD < 30) {
if (iKenoRoundTimeGOLD < 2) {$('#RoundEndKenoGold').show();
$('#KenoRoundTimeGOLD').css('background-color', 'Red');
}
else {$('#RoundEndKenoGold').hide();
$('#KenoRoundTimeGOLD').css('background-color', 'Yellow');
}
}
else {$('#RoundEndKenoGold').hide()
$('#KenoRoundTimeGOLD').css('background-color', 'Lime');
}
if (iKenoRoundTime < 30) {
if (iKenoRoundTime < 2) {$('#RoundEndKeno').show();
$('#KenoRoundTime').css('background-color', 'Red');
}
else {$('#RoundEndKeno').hide();
$('#KenoRoundTime').css('background-color', 'Yellow');
}
}
else {$('#RoundEndKeno').hide();
$('#KenoRoundTime').css('background-color', 'Lime');
}
if (iKenoRoundTimeEm < 30) {
if (iKenoRoundTimeEm < 2) {$('#RoundEndKenoEm').show();
$('#KenoRoundTimeEm').css('background-color', 'Red');
}
else {$('#RoundEndKenoEm').hide();
$('#KenoRoundTimeEm').css('background-color', 'Yellow');
}
}
else {$('#RoundEndKenoEm').hide();
$('#KenoRoundTimeEm').css('background-color', 'Lime');
}
if (iKenoRoundTimeEm2 < 30) {
if (iKenoRoundTimeEm2 < 2) {$('#RoundEndKenoEm2').show();
$('#KenoRoundTimeEm2').css('background-color', 'Red');
}
else {$('#RoundEndKenoEm2').hide();
$('#KenoRoundTimeEm2').css('background-color', 'Yellow');
}
}
else {$('#RoundEndKenoEm2').hide();
$('#KenoRoundTimeEm2').css('background-color', 'Lime');
}
if (iKenoRoundTimeEm3 < 30) {
if (iKenoRoundTimeEm3 < 2) {$('#RoundEndKenoEm3').show();
$('#KenoRoundTimeEm3').css('background-color', 'Red');
}
else {$('#RoundEndKenoEm3').hide();
$('#KenoRoundTimeEm3').css('background-color', 'Yellow');
}
}
else {$('#RoundEndKenoEm3').hide();
$('#KenoRoundTimeEm3').css('background-color', 'Lime');
}

if (iKenoRoundTimeEm4 < 30) {
if (iKenoRoundTimeEm4 < 2) {$('#RoundEndKenoEm4').show();
$('#KenoRoundTimeEm4').css('background-color', 'Red');
}
else {$('#RoundEndKenoEm4').hide();
$('#KenoRoundTimeEm4').css('background-color', 'Yellow');
}
}
else {$('#RoundEndKenoEm4').hide();
$('#KenoRoundTimeEm4').css('background-color', 'Lime');
}

if (iKenoRoundTimeEm5 < 30) {
if (iKenoRoundTimeEm5 < 2) {$('#RoundEndKenoEm5').show();
$('#KenoRoundTimeEm5').css('background-color', 'Red');
}
else {$('#RoundEndKenoEm5').hide();
$('#KenoRoundTimeEm5').css('background-color', 'Yellow');
}
}
else {$('#RoundEndKenoEm5').hide();
$('#KenoRoundTimeEm5').css('background-color', 'Lime');
}

if (iFortuneRoundTime < 30) {
if (iFortuneRoundTime < 2) {
$('#RoundEnd').show();
$('#FortuneRoundTime').css('background-color', 'Red');

}
else {$('#RoundEnd').hide();
$('#FortuneRoundTime').css('background-color', 'Yellow');

}


}
else {
$('#RoundEnd').hide();
$('#FortuneRoundTime').css('background-color', 'Lime');

}
if (iFortuneRoundTimeEM3 < 30) {
if (iFortuneRoundTimeEM3 < 2) {
$('#RoundEndEM3').show();
$('#FortuneRoundTimeEM3').css('background-color', 'Red');
}
else {$('#RoundEndEM3').hide();
$('#FortuneRoundTimeEM3').css('background-color', 'Yellow');
}
}
else {
$('#RoundEndEM3').hide();
$('#FortuneRoundTimeEM3').css('background-color', 'Lime');
}
if (iFortuneRoundTimeEM2 < 30) {
if (iFortuneRoundTimeEM2 < 2) {
$('#RoundEndEM2').show();
$('#FortuneRoundTimeEM2').css('background-color', 'Red');
}
else {$('#RoundEndEM2').hide();
$('#FortuneRoundTimeEM2').css('background-color', 'Yellow');
}
}
else {
$('#RoundEndEM2').hide();
$('#FortuneRoundTimeEM2').css('background-color', 'Lime');
}
if (iFortuneRoundTimeEM < 30) {
if (iFortuneRoundTimeEM < 2) {
$('#RoundEndEM').show();
$('#FortuneRoundTimeEM').css('background-color', 'Red');
}
else {$('#RoundEndEM').hide();
$('#FortuneRoundTimeEM').css('background-color', 'Yellow');
}
}
else {
$('#RoundEndEM').hide();
$('#FortuneRoundTimeEM').css('background-color', 'Lime');
}
if (iPoker4RoundTime < 30) {
if (iPoker4RoundTime < 2) { $('#RoundEndPok4').show();
$('#PokerUpdateRound1').css('background-color', 'rgb(255,0,0)');
}
else {$('#RoundEndPok4').hide();
$('#PokerUpdateRound1').css('background-color', 'Yellow');
}
}
else {$('#RoundEndPok4').hide();
$('#PokerUpdateRound1').css('background-color', 'Lime');
}
if (iPoker6RoundTime < 30) {
if (iPoker6RoundTime < 2) {$('#RoundEndPok6').show();
$('#PokerUpdateRound2').css('background-color', 'rgb(255,0,0)');
}
else {$('#RoundEndPok6').hide();
$('#PokerUpdateRound2').css('background-color', 'Yellow');
}
}
else {$('#RoundEndPok6').hide();
$('#PokerUpdateRound2').css('background-color', 'Lime');
}
if (iPoker8RoundTime < 30) {
if (iPoker8RoundTime < 2) {$('#RoundEndPok8').show();
$('#PokerUpdateRound3').css('background-color', 'rgb(255,0,0)');
}
else {$('#RoundEndPok8').hide();
$('#PokerUpdateRound3').css('background-color', 'Yellow');
}
}
else {$('#RoundEndPok8').hide();
$('#PokerUpdateRound3').css('background-color', 'Lime');
}

if(iKenoRoundTime <= 1 && $('.kbg2').length>1)
{
if($('.closebbP2:eq(1)').get(0).IsRemove!=true)
{
$('.closebbP2:eq(1)').get(0).IsRemove = true;
$('.kbg2').css('background-color','rgb(255,170,170)');
$('.kbg2:eq(0)').css('background-color','rgb(255,255,255)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iKenoRoundTimeEm <= 1 && $('.kbg2Em').length>1)
{
if($('.closebbP2Em:eq(1)').get(0).IsRemove!=true)
{
$('.closebbP2Em:eq(1)').get(0).IsRemove = true;
$('.kbg2Em').css('background-color','rgb(255,170,170)');
$('.kbg2Em:eq(0)').css('background-color','rgb(255,255,255)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iKenoRoundTimeEm3 <= 1 && $('.kbg2Em3').length>1)
{
if($('.closebbP2Em3:eq(1)').get(0).IsRemove!=true)
{
$('.closebbP2Em3:eq(1)').get(0).IsRemove = true;
$('.kbg2Em3').css('background-color','rgb(255,170,170)');
$('.kbg2Em3:eq(0)').css('background-color','rgb(255,255,255)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iKenoRoundTimeEm4 <= 1 && $('.kbg2Em4').length>1)
{
if($('.closebbP2Em4:eq(1)').get(0).IsRemove!=true)
{
$('.closebbP2Em4:eq(1)').get(0).IsRemove = true;
$('.kbg2Em4').css('background-color','rgb(255,170,170)');
$('.kbg2Em4:eq(0)').css('background-color','rgb(255,255,255)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iKenoRoundTimeEm5 <= 1 && $('.kbg2Em5').length>1)
{
if($('.closebbP2Em5:eq(1)').get(0).IsRemove!=true)
{
$('.closebbP2Em5:eq(1)').get(0).IsRemove = true;
$('.kbg2Em5').css('background-color','rgb(255,170,170)');
$('.kbg2Em5:eq(0)').css('background-color','rgb(255,255,255)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iKenoRoundTimeEm2 <= 1 && $('.kbg2Em2').length>1)
{
if($('.closebbP2Em2:eq(1)').get(0).IsRemove!=true)
{
$('.closebbP2Em2:eq(1)').get(0).IsRemove = true;
$('.kbg2Em2').css('background-color','rgb(255,170,170)');
$('.kbg2Em2:eq(0)').css('background-color','rgb(255,255,255)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iKenoRoundTimeGOLD <= 1 && $('.kbg').length>1)
{
if($('.closebbP:eq(1)').get(0).IsRemove!=true)
{
$('.closebbP:eq(1)').get(0).IsRemove = true;
$('.kbg').css('background-color','rgb(255,170,170)');
$('.kbg:eq(0)').css('background-color','rgb(255,255,255)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}

if(iFortuneRoundTime <= 1 && iMaxbet>0)
{
if($('.pictureBet:eq(' + 0 + ')').get(0).IsRemove!=true)
{
$('.pictureBet:eq(' + 0 + ')').get(0).IsRemove = true;
$('.bet').css('background-color','rgb(255,170,170)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iFortuneRoundTimeEM <= 1 && iMaxbetEM>0)
{
if($('.pictureBetEM:eq(' + 0 + ')').get(0).IsRemove!=true)
{
$('.pictureBetEM:eq(' + 0 + ')').get(0).IsRemove = true;
$('.betEM').css('background-color','rgb(255,170,170)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
if(iFortuneRoundTimeEM2 <= 1 && iMaxbetEM2>0)
{
if($('.pictureBetEM2:eq(' + 0 + ')').get(0).IsRemove!=true)
{
$('.pictureBetEM2:eq(' + 0 + ')').get(0).IsRemove = true;
$('.betEM2').css('background-color','rgb(255,170,170)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}

if(iFortuneRoundTimeEM3 <= 1 && iMaxbetEM3>0)
{
if($('.pictureBetEM3:eq(' + 0 + ')').get(0).IsRemove!=true)
{
$('.pictureBetEM3:eq(' + 0 + ')').get(0).IsRemove = true;
$('.betEM3').css('background-color','rgb(255,170,170)');
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}

if(iPoker4RoundTime<=1 || iPoker6RoundTime<=1 || iPoker8RoundTime<=1)
{
for(var gid=0; gid < $('.pictureBetpoker').length; gid++)
{
if($('.pictureBetpoker:eq(' + gid + ')').get(0).IsRemove==true)continue;

if($('.pictureBetpoker:eq(' + gid + ')').get(0).StolID == '1' && iPoker4RoundTime<=1 )
{
$('.pictureBetpoker:eq(' + gid + ')').parent().parent().css('background-color','rgb(255,170,170)');
$('.pictureBetpoker:eq(' + gid + ')').get(0).IsRemove=true;
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
else
{
if($('.pictureBetpoker:eq(' + gid + ')').get(0).StolID == '2' && iPoker6RoundTime<=1)
{
$('.pictureBetpoker:eq(' + gid + ')').parent().parent().css('background-color','rgb(255,170,170)');
$('.pictureBetpoker:eq(' + gid + ')').get(0).IsRemove=true;
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
else
{
if($('.pictureBetpoker:eq(' + gid + ')').get(0).StolID == '3' && iPoker8RoundTime<=1)
{
$('.pictureBetpoker:eq(' + gid + ')').parent().parent().css('background-color','rgb(255,170,170)');
$('.pictureBetpoker:eq(' + gid + ')').get(0).IsRemove=true;
if(tTimerRemover==null)tTimerRemover=setTimeout(function(){fRemoveBadBets();},4000);
}
}
}
}
}

}, 100);

var fGetFortuneHistoryEM2 = function(ball,tir){
try{
$.ajax({

type: 'get', //тип запроса: get,post либо head
url:  (vUpdateData.isHttps==1?'https://srv.flg.club:3413/history.ashx?':'/3313/history.ashx?')+vUpdateData.srv6,
data: {   }, //параметры запроса

dataType: 'json', //тип возвращаемого ответа text либо xml
success: function (data, status, jqXHR) {//возвращаемый результат от сервера

fSetFortuneHistoryBall($('.gbutton4EM2:eq(0)'), ball, 1, tir);

fSetFortuneHistoryBall($('.gbutton4EM2:eq(1)'), data.b0, 0, tir-1);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(2)'), data.b1, 0, tir-2);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(3)'), data.b2, 0, tir-3);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(4)'), data.b3, 0, tir-4);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(5)'), data.b4, 0, tir-5);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(6)'), data.b5, 0, tir-6);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(7)'), data.b6, 0, tir-7);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(8)'), data.b7, 0, tir-8);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(9)'), data.b8, 0, tir-9);
fSetFortuneHistoryBall($('.gbutton4EM2:eq(10)'), data.b9, 0,tir-10);

//if(bRulEmul==true)
//$('.gbutton4:eq(10)').children(".textcapt").text('');

}
,
error: function (data, status, jqXHR) {//возвращаемый результат от сервера
alert('error');
}
});
}catch(exc){
setTimeout(function(){fGetFortuneHistoryEM2();},500);
}
}

var fGetFortuneHistory = function(ball,tir){
try{
$.ajax({

type: 'get', //тип запроса: get,post либо head
url:  (vUpdateData.isHttps==1?'https://srv.flg.club:3403/history.ashx?':'/3303/history.ashx?')+vUpdateData.srv6,
data: {   }, //параметры запроса

dataType: 'json', //тип возвращаемого ответа text либо xml
success: function (data, status, jqXHR) {//возвращаемый результат от сервера

fSetFortuneHistoryBall($('.gbutton4:eq(0)'), ball, 1, tir);

fSetFortuneHistoryBall($('.gbutton4:eq(1)'), data.b0, 0, tir-1);
fSetFortuneHistoryBall($('.gbutton4:eq(2)'), data.b1, 0, tir-2);
fSetFortuneHistoryBall($('.gbutton4:eq(3)'), data.b2, 0, tir-3);
fSetFortuneHistoryBall($('.gbutton4:eq(4)'), data.b3, 0, tir-4);
fSetFortuneHistoryBall($('.gbutton4:eq(5)'), data.b4, 0, tir-5);
fSetFortuneHistoryBall($('.gbutton4:eq(6)'), data.b5, 0, tir-6);
fSetFortuneHistoryBall($('.gbutton4:eq(7)'), data.b6, 0, tir-7);
fSetFortuneHistoryBall($('.gbutton4:eq(8)'), data.b7, 0, tir-8);
fSetFortuneHistoryBall($('.gbutton4:eq(9)'), data.b8, 0, tir-9);
fSetFortuneHistoryBall($('.gbutton4:eq(10)'), data.b9, 0,tir-10);

//if(bRulEmul==true)
//$('.gbutton4:eq(10)').children(".textcapt").text('');

}
,
error: function (data, status, jqXHR) {//возвращаемый результат от сервера
alert('error');
}
});
}catch(exc){
setTimeout(function(){fGetFortuneHistory();},500);
}
}

var fGetFortuneHistoryEM = function(ball,tir){

try{
$.ajax({

type: 'get', //тип запроса: get,post либо head
url:  (vUpdateData.isHttps==1?'https://srv.flg.club:3407/history.ashx?':'/3307/history.ashx?')+vUpdateData.srv8,
data: {   }, //параметры запроса

dataType: 'json', //тип возвращаемого ответа text либо xml
success: function (data, status, jqXHR) {//возвращаемый результат от сервера

fSetFortuneHistoryBall($('.gbutton4EM:eq(0)'), ball, 1, tir);

fSetFortuneHistoryBall($('.gbutton4EM:eq(1)'), data.b0, 0, data.tir0);
fSetFortuneHistoryBall($('.gbutton4EM:eq(2)'), data.b1, 0, data.tir1);
fSetFortuneHistoryBall($('.gbutton4EM:eq(3)'), data.b2, 0, data.tir2);
fSetFortuneHistoryBall($('.gbutton4EM:eq(4)'), data.b3, 0, data.tir3);
fSetFortuneHistoryBall($('.gbutton4EM:eq(5)'), data.b4, 0, data.tir4);
fSetFortuneHistoryBall($('.gbutton4EM:eq(6)'), data.b5, 0, data.tir5);
fSetFortuneHistoryBall($('.gbutton4EM:eq(7)'), data.b6, 0, data.tir6);
fSetFortuneHistoryBall($('.gbutton4EM:eq(8)'), data.b7, 0, data.tir7);
fSetFortuneHistoryBall($('.gbutton4EM:eq(9)'), data.b8, 0, data.tir8);
fSetFortuneHistoryBall($('.gbutton4EM:eq(10)'), data.b9, 0,data.tir9);

//if(bRulEmul==true)
//$('.gbutton4:eq(10)').children(".textcapt").text('');

}
,
error: function (data, status, jqXHR) {//возвращаемый результат от сервера
// alert('error');
}
});
}catch(exc){
setTimeout(function(){fGetFortuneHistoryEM();},500);
}
}

var fSetFortuneHistoryBall = function (obj, ball, iswin, tir) {
if(ball==99)
{
obj.children(".textcapt").text(tir);
obj.children("#text").text("");
obj.children("#picture").get(0).src = '/images/kassa/history-grey.png';
return;
}
obj.children("#text").text(ball);
if (tir > 0) obj.children(".textcapt").text(tir);
if (ball != 0) {
if (ball == 1 || ball == 3 || ball == 5 || ball == 7 || ball == 9 || ball == 12 || ball == 14 || ball == 18 || ball == 16 || ball == 21 || ball == 19 || ball == 23 || ball == 27 || ball == 25 || ball == 30 || ball == 32 || ball == 36 || ball == 34)
obj.children("#picture").get(0).src = (iswin == 0 ? '/images/kassa/history-red.png' : '/images/kassa/history-red-2.png');
else
obj.children("#picture").get(0).src = (iswin == 0 ? '/images/kassa/history-black.png' : '/images/kassa/history-black-2.png');
}
else {
obj.children("#picture").get(0).src = (iswin == 0 ? '/images/kassa/history-green.png' : '/images/kassa/history-green-2.png');
}
};