function fGIC2(sum) { sum = sum.toString(); return sum.length > 2 ? sum.substring(0, sum.length - 2) + "." + sum.substring(sum.length - 2, sum.length) : sum = "0." + (parseInt(sum) != 0 ? sum : "00"); }
function fBUYRAHSH(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
           
				WinPrint.document.write('    </head><body style="font-family:verdana; font-size:10px; white-space:nowrap;">');
				
				WinPrint.document.write('<table style="font-family:verdana; font-size:13px; line-height: 1.0;" width="300" border="0"><tr><td colspan="2"><img style="width:300px; height:85px;" src="http://91.192.116.108:3301/bills/rahsh.jpg"/></td></tr><tr><td>Номер контракта</td><td><b>'+(CheckData.code)+'</b></td></tr><tr><td>Дата и время</td><td><b>'+(CheckData.da)+'</b></td></tr>');
				var selcoef=null;
				var amaxcf=['0','3.0','10.0','45.0','80.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				var amaxcfx=['0','3.5','10.0','50.0','100.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				var name ='FortunaBet';
				var type=0;
			var marja="";
			var alsm=0;
				switch(CheckData.gamename)
				{
								case 'POKERLIVE':name ='Poker';type=0;break;
								case 'KENOLIVE':selcoef=amaxcfx; name ='KenoLive';type=1;break;
								case 'KENOGOLD':selcoef=amaxcfx; name ='KenoGold';type=1;break;
								case 'KENOBET':selcoef=amaxcf;name ='KenoBet';type=1;break;
								case 'XKENO':selcoef=amaxcfx;name ='JX Keno';type=1;break;
								case 'KENOFAST':selcoef=amaxcfx; name ='KenoFast';type=1;break;
								case 'FORTUNELIVE': name ='FortunaLive';type=2;break;
								case 'FORTUNEFAST':name ='FortunaFast';type=2;break;
								case 'FORTUNEBET':name ='FortunaBet';type=2;break;
								}
				try{
				if(type == 0 )
				{
				for (var i = 0; i < 3; i++) {
				
	
				
					for (var xoI = 0; xoI < CheckData.gamebet[i].max; xoI++) {		
					if(xoI==0)
					WinPrint.document.write('<tr><td >Выбор</td><td><b>#'+(CheckData.gamebet[i].bet[xoI].tir + '/' + CheckData.hallname)+'</td></tr>');
				WinPrint.document.write('<tr><td >'+name+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+'</td><td><b>'+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td></tr><tr><td>Индекс</td><td><b>'+fGIC2(CheckData.gamebet[i].bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet[i].bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet[i].bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet[i].bet[xoI].sm)*(parseFloat(CheckData.gamebet[i].bet[xoI].cf)/100);
				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
				if(xoI==0)	WinPrint.document.write('<tr><td >Выбор</td><td><b>#'+(CheckData.gamebet.bet[xoI].tir+ '/' + CheckData.hallname)+'</td></tr>');
				WinPrint.document.write('<tr><td >'+name+'</td><td><b>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td></tr><tr><td>Индекс</td><td><b>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet.bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*(parseFloat(CheckData.gamebet.bet[xoI].cf)/100);
				}
				}
				else{
				
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				if(xoI==0)		WinPrint.document.write('<tr><td >Выбор</td><td><b>#'+(CheckData.gamebet.bet[xoI].tir+ '/' + CheckData.hallname)+'</td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
			
				WinPrint.document.write('<tr><td style="white-space:nowrap;">'+name+' шары:</td><td><b>' +(gggsuk)+'</b></td></tr><tr><td>Индекс</td><td><b>'+selcoef[gggsuk.length]+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+selcoef[gggsuk.length];
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*parseFloat(selcoef[gggsuk.length]);
				}
				}
				}
				}catch(exc){alert(exc);}
				marja+=" = "+ fGIC2((alsm)) +" TJS";
				WinPrint.document.write('<tr><td>Возможная маржа</td><td>'+marja+'</td></tr>');
				WinPrint.document.write('<tr><td>Сумма контракта</td><td>'+fGIC2(CheckData.as)+' TJS</td></tr>');
				WinPrint.document.write('<tr><td colspan="2">'+CheckData.BarCode+'</td></tr></table>');
				WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
            }
		
function fPAYRAHSH(CheckData,upr) {
/*var allWin =0;
if(CheckData.gamename=="POKERLIVE"){
	for (var i = 0; i < 3; i++) {		
					for (var xoI = 0; xoI < CheckData.gamebet[i].max; xoI++) {	
					allWin+=parseInt(CheckData.gamebet[i].bet[xoI].wn);
					}
}}
else{
	for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
	allWin+=parseInt(CheckData.gamebet.bet[xoI].wn);
	}
}
	if(allWin==0)
	{
		alert("Чек № "+CheckData.code+", Проигрышный!");
	}
	else
	alert("Чек № "+CheckData.code+", выигрыш на сумму "+fGIC2(allWin)+"TJS ВЫПЛАЧЕН!");
return;*/
               var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                 
           	WinPrint.document.write('    <html><script src="jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				WinPrint.document.write('    </head><body style="font-family:verdana; font-size:10px; white-space:nowrap;">');
				
				WinPrint.document.write('<table style="font-family:verdana; font-size:13px; line-height: 1.0;" width="300" border="0"><tr><td colspan="2"><img style="width:300px; height:85px;" src="http://91.192.116.108:3301/bills/rahsh.jpg"/></td></tr><tr><td>Номер контракта</td><td><b>'+(CheckData.code)+'</b></td></tr><tr><td>Дата и время</td><td><b>'+(CheckData.da)+'</b></td></tr>');
				var selcoef=null;
				var amaxcf=['0','3.0','10.0','45.0','80.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				var amaxcfx=['0','3.5','10.0','50.0','100.0','150.0','500.0','1000.0','2000.0','5000.0','10000.0'];
				var name ='FortunaBet';
				var type=0;
			var marja="";
			var alsm=0;
				switch(CheckData.gamename)
				{
								case 'POKERLIVE':name ='Poker';type=0;break;
								case 'KENOLIVE':selcoef=amaxcfx; name ='KenoLive';type=1;break;
								case 'KENOGOLD':selcoef=amaxcfx; name ='KenoGold';type=1;break;
								case 'KENOBET':selcoef=amaxcf;name ='KenoBet';type=1;break;
								case 'XKENO':selcoef=amaxcfx;name ='JX Keno';type=1;break;
								case 'KENOFAST':selcoef=amaxcfx; name ='KenoFast';type=1;break;
								case 'FORTUNELIVE': name ='FortunaLive';type=2;break;
								case 'FORTUNEFAST':name ='FortunaFast';type=2;break;
								case 'FORTUNEBET':name ='FortunaBet';type=2;break;
								}
				try{
				if(type == 0 )
				{
				for (var i = 0; i < 3; i++) {
				
	
				
					for (var xoI = 0; xoI < CheckData.gamebet[i].max; xoI++) {		
					if(xoI==0)
					WinPrint.document.write('<tr><td >Выбор</td><td><b>#'+(CheckData.gamebet[i].bet[xoI].tir+ '/' + CheckData.hallname)+'</td></tr>');
				WinPrint.document.write('<tr><td >'+name+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+'</td><td><b>'+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td></tr><tr><td>Индекс</td><td><b>'+fGIC2(CheckData.gamebet[i].bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet[i].bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet[i].bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet[i].bet[xoI].sm)*(parseFloat(CheckData.gamebet[i].bet[xoI].cf)/100);
				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
				if(xoI==0)	WinPrint.document.write('<tr><td >Выбор</td><td><b>#'+(CheckData.gamebet.bet[xoI].tir+ '/' + CheckData.hallname)+'</td></tr>');
				WinPrint.document.write('<tr><td >'+name+'</td><td><b>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td></tr><tr><td>Индекс</td><td><b>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet.bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*(parseFloat(CheckData.gamebet.bet[xoI].cf)/100);
				}
				}
				else{
				
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				if(xoI==0)		WinPrint.document.write('<tr><td >Выбор</td><td><b>#'+(CheckData.gamebet.bet[xoI].tir+ '/' + CheckData.hallname)+'</td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
			
				WinPrint.document.write('<tr><td style="white-space:nowrap;">'+name+' шары:</td><td><b>' +(gggsuk)+'</b></td></tr><tr><td>Индекс</td><td><b>'+selcoef[gggsuk.length]+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+selcoef[gggsuk.length];
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*parseFloat(selcoef[gggsuk.length]);
				}
				}
				}
				}catch(exc){alert(exc);}
				marja+=" = "+ fGIC2((alsm)) +" TJS";
				WinPrint.document.write('<tr><td>Возможная маржа</td><td>'+marja+'</td></tr>');
				WinPrint.document.write('<tr><td>Сумма контракта</td><td>'+fGIC2(CheckData.as)+' TJS</td></tr>');
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