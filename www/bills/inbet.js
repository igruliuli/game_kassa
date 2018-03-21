function fGIC2(sum) { sum = sum.toString(); return sum.length > 2 ? sum.substring(0, sum.length - 2) + "." + sum.substring(sum.length - 2, sum.length) : sum = "0." + (parseInt(sum) != 0 ? sum : "00"); }
function fBUYINBET(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=320,height=480,toolbar=0,scrollbars=1,status=0,resizable=1');
              
				WinPrint.document.write('    <html><script src="jquery.min.js"></script><head></head><body style="font-weight:bold;">');
                WinPrint.document.write('<head>');
           
				WinPrint.document.write('    </head><body style="font-weight:bold; white-space:nowrap;">');
				
				WinPrint.document.write('<table width="300" border="0"><tr><td>Дата и время</td><td><b>'+(CheckData.da)+'</b></td></tr><tr><td>Номер чека</td><td><b>'+(CheckData.code)+'</b></td></tr><tr><td>Номер зала</td><td><b>'+(CheckData.hallname)+'</b></td></tr>');
				var amaxcf=['0','3.0','10.0','45.0','80.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				var amaxcfx=['0','3.5','10.0','50.0','100.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				
				if(CheckData.gamename == 'FORINBET')
				{
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				WinPrint.document.write('<tr><td colspan="2"><hr></td></tr><tr><td colspan="2">('+(CheckData.gamebet.bet[xoI].id)+')</td></tr><tr><td colspan="2">'+('Fortuna')+' '+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td colspan="2"><b>Кто победит? - '+((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm))+'</b></td></tr><tr><td colspan="2"><b>'+fGIC2(CheckData.gamebet.bet[xoI].sm)+'x'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'='+fGIC2((parseFloat(CheckData.gamebet.bet[xoI].sm)/100)*parseFloat(CheckData.gamebet.bet[xoI].cf))+'KZT</b></td></tr>');
				}
				}
				else{
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
				WinPrint.document.write('<tr><td colspan="2"><hr></td></tr><tr><td colspan="2">('+(CheckData.gamebet.bet[xoI].id)+')</td></tr><tr><td colspan="2">'+(CheckData.gamename=='KENOINBET'?'Кено':'X-Кено')+' #'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td colspan="2"><b>Кено - Шары: '+(gggsuk)+'</b></td></tr><tr><td colspan="2"><b>Макс.выигрыш:'+fGIC2(CheckData.gamebet.bet[xoI].sm)+'x'+(CheckData.gamename=='KENOINBET'?amaxcf[gggsuk.length]:amaxcfx[gggsuk.length])+'='+fGIC2((parseFloat(CheckData.gamebet.bet[xoI].sm))*parseFloat((CheckData.gamename=='KENOINBET'?amaxcf[gggsuk.length]:amaxcfx[gggsuk.length])))+'KZT</b></td></tr>');
				}
				}
				WinPrint.document.write('<tr><td colspan="2">'+CheckData.BarCode+'</td></tr></table>');
			if(CheckData.isinfo==1)
				{
					WinPrint.document.write('<script>var func = function(){$(".butt").hide();}</script>');WinPrint.document.write("<input class='butt' onclick='func();window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:0px;background:rgb(187,15,23);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Закрыть' />");WinPrint.document.write("<input class='butt' onclick='func(); window.print(); window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:85px;background:rgb(16,186,24);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Печать' />");
				}
				
				WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
          	
				if(CheckData.isinfo!=1)
				{			
                if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
				}
            }
		
function fPAYINBET(CheckData,upr) {
	/*if(CheckData.isinfo==0)
				{var allWin =0;
	for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
	allWin+=parseInt(CheckData.gamebet.bet[xoI].wn);
	}
	if(allWin==0)
	{
		alert("Чек № "+CheckData.code+", Проигрышный!");
	}
	else
	alert("Чек № "+CheckData.code+", выигрыш на сумму "+fGIC2(allWin)+"KZT ВЫПЛАЧЕН!");
return;
				}*/
  var WinPrint = window.open('', '', 'left=0,top=0,width=320,height=480,toolbar=0,scrollbars=1,status=0,resizable=1');
              
				WinPrint.document.write('    <html><script src="jquery.min.js"></script><head></head><body style="font-weight:bold;">');
                WinPrint.document.write('<head>');
           
				WinPrint.document.write('    </head><body style="font-weight:bold; white-space:nowrap;">');
				
				WinPrint.document.write('<table width="300" border="0"><tr><td>Дата и время</td><td><b>'+(CheckData.da)+'</b></td></tr><tr><td>Номер чека</td><td><b>'+(CheckData.code)+'</b></td></tr><tr><td>Номер зала</td><td><b>'+(CheckData.hallname)+'</b></td></tr>');
				var amaxcf=['0','3.0','10.0','45.0','80.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				var amaxcfx=['0','3.5','10.0','50.0','100.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				
				if(CheckData.gamename == 'FORINBET')
				{
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				WinPrint.document.write('<tr><td colspan="2"><hr></td></tr><tr><td colspan="2">('+(CheckData.gamebet.bet[xoI].id)+')</td></tr><tr><td colspan="2">'+('Fortuna')+' '+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td colspan="2"><b>Кто победит? - '+((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm))+'</b></td></tr><tr><td colspan="2">'+(parseFloat(CheckData.gamebet.bet[xoI].wn)>0?'Выигрыш':'Проигрыш')+':'+fGIC2(CheckData.gamebet.bet[xoI].sm)+'x'+(parseFloat(CheckData.gamebet.bet[xoI].cf)/100)+'='+fGIC2(parseFloat(CheckData.gamebet.bet[xoI].wn))+'KZT</td></tr>');
				}
				}
				else{
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
				WinPrint.document.write('<tr><td colspan="2"><hr></td></tr><tr><td colspan="2">('+(CheckData.gamebet.bet[xoI].id)+')</td></tr><tr><td colspan="2">'+(CheckData.gamename=='KENOINBET'?'Кено':'X-Кено')+' #'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td colspan="2"><b>Кено - Шары: '+(gggsuk)+'</b></td></tr><tr><td colspan="2">'+(parseFloat(CheckData.gamebet.bet[xoI].wn)>0?'Выигрыш':'Проигрыш')+':'+fGIC2(CheckData.gamebet.bet[xoI].sm)+'x'+(parseFloat(CheckData.gamebet.bet[xoI].cf)/100)+'='+fGIC2((parseFloat(CheckData.gamebet.bet[xoI].sm))*(parseFloat(CheckData.gamebet.bet[xoI].cf)/100))+'KZT</td></tr>');
				}
				}
				WinPrint.document.write('<tr><td colspan="2">Общий выигрыш: '+fGIC2(CheckData.aw)+'KZT</td></tr>');
				WinPrint.document.write('<tr><td colspan="2">'+CheckData.BarCode+'</td></tr></table>');
				if(CheckData.isinfo==1)
				{
					WinPrint.document.write('<script>var func = function(){$(".butt").hide();}</script>');WinPrint.document.write("<input class='butt' onclick='func();window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:0px;background:rgb(187,15,23);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Закрыть' />");WinPrint.document.write("<input class='butt' onclick='func(); window.print(); window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:85px;background:rgb(16,186,24);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Печать' />");
				}
				
				WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
          	
				if(CheckData.isinfo!=1)
				{			
                if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
				}


            }
			
			
			
		