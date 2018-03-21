function fGIC2(sum) { sum = sum.toString(); return sum.length > 2 ? sum.substring(0, sum.length - 2) + "." + sum.substring(sum.length - 2, sum.length) : sum = "0." + (parseInt(sum) != 0 ? sum : "00"); }
function fBUYTOTOGAMING(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
           
				WinPrint.document.write('    </head><body style="font-family:verdana; font-weight:bold; white-space:nowrap;">');

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
							WinPrint.document.write('<table style="font-size:13px;font-family:verdana; border-spacing:0px; padding:0px;" cellspacing="0" width="300" border="0"><tr><td align="center" colspan="2" style="border-spacing:0px; padding:0px;"><img style="left:0px; width:270px; height:55px; " src="bills/totogaming.jpg"/></td></tr><tr><td>Билет №</td><td align="right">'+(CheckData.code)+'</td></tr><tr><td>Касса </td><td align="right">'+(CheckData.nick)+'</b></td></tr>');
				
				try{
				if(type == 0 )
				{
				for (var i = 0; i < 3; i++) {
				
	
				
					for (var xoI = 0; xoI < CheckData.gamebet[i].max; xoI++) {		
					if(xoI==0)
					WinPrint.document.write('<tr><td >Событие №</td><td align="right">'+(CheckData.gamebet[i].bet[xoI].tir)+'</td></tr><tr><td>Игра:</td><td align="right">'+(name)+'</b></td></tr>');
				WinPrint.document.write('<tr><td>'+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td><td align="right">'+fGIC2(CheckData.gamebet[i].bet[xoI].sm)+' AMD</td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet[i].bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet[i].bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet[i].bet[xoI].sm)*(parseFloat(CheckData.gamebet[i].bet[xoI].cf)/100);
				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
				if(xoI==0)	WinPrint.document.write('<tr><td >Событие №</td><td align="right">'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Игра:</td><td align="right">'+(name)+'</b></td></tr>');
				WinPrint.document.write('<tr><td>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td><td align="right">'+fGIC2(CheckData.gamebet.bet[xoI].sm)+' AMD</td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet.bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*(parseFloat(CheckData.gamebet.bet[xoI].cf)/100);
				}
				}
				else{
				
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				if(xoI==0)		WinPrint.document.write('<tr><td >Событие №</td><td align="right">'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Игра:</td><td align="right">'+(name)+'</b></td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
			
				WinPrint.document.write('<tr><td>' +(gggsuk)+'</b></td><td align="right">'+fGIC2(CheckData.gamebet.bet[xoI].sm)+' AMD</td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+selcoef[gggsuk.length];
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*parseFloat(selcoef[gggsuk.length]);
				}
				}
				}
				}catch(exc){alert(exc);}
				marja+=" = "+ fGIC2(alsm) +" AMD";				
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:center;"><hr></div></tr>');
				WinPrint.document.write('<tr><td>Общая сумма</td><td align="right">'+fGIC2(CheckData.as)+' AMD</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:center;"><hr></div></tr>');
				WinPrint.document.write('<tr><td >Отпечатано</td><td align="right"> '+(CheckData.da)+'</td></tr>');
				WinPrint.document.write('<tr><td>Кассир</td><td align="right">'+(CheckData.hallname)+'</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:center;"><hr></div></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:left; font-weight:bold;">Макс. выплата по билету: 5000000.00 AMD</div></td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:left;font-weight:bold;">Макс. возможный выигрыш: '+fGIC2(alsm)+' AMD</div></td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:13px;text-align:center;">С правилами согласен</div></td></tr>');
				WinPrint.document.write('<tr><td align="center" colspan="2">'+CheckData.BarCode+'</td></tr></table>');
				
				WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
            }
function fPAYTOTOGAMING(CheckData,upr) {
	
                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
           
				WinPrint.document.write('    </head><body style="font-family:verdana; font-weight:bold; white-space:nowrap;">');

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
							WinPrint.document.write('<table style="font-size:13px;font-family:verdana; border-spacing:0px; padding:0px;" cellspacing="0" width="300" border="0"><tr><td align="center" colspan="2" style="border-spacing:0px; padding:0px;"><img style="left:0px; width:270px; height:55px; " src="bills/totogaming.jpg"/></td></tr><tr><td>Билет №</td><td align="right">'+(CheckData.code)+'</td></tr><tr><td>Касса </td><td align="right">'+(CheckData.nick)+'</b></td></tr>');
				
				try{
				if(type == 0 )
				{
				for (var i = 0; i < 3; i++) {
				
	
				
					for (var xoI = 0; xoI < CheckData.gamebet[i].max; xoI++) {	
if(parseFloat(CheckData.gamebet[i].bet[xoI].wn)==0)continue;
					if(xoI==0)
					WinPrint.document.write('<tr><td >Событие №</td><td align="right">'+(CheckData.gamebet[i].bet[xoI].tir)+'</td></tr><tr><td>Игра:</td><td align="right">'+(name)+'</b></td></tr>');
				WinPrint.document.write('<tr><td>'+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td><td align="right">'+fGIC2(CheckData.gamebet[i].bet[xoI].wn)+' AMD</td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet[i].bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet[i].bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet[i].bet[xoI].wn);
				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
					if(parseFloat(CheckData.gamebet.bet[xoI].wn)==0)continue;
				if(xoI==0)	WinPrint.document.write('<tr><td >Событие №</td><td align="right">'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Игра:</td><td align="right">'+(name)+'</b></td></tr>');
				WinPrint.document.write('<tr><td>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td><td align="right">'+fGIC2(CheckData.gamebet.bet[xoI].wn)+' AMD</td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet.bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].wn);
				}
				}
				else{
				
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
if(parseFloat(CheckData.gamebet.bet[xoI].wn)==0)continue;				
				if(xoI==0)		WinPrint.document.write('<tr><td >Событие №</td><td align="right">'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Игра:</td><td align="right">'+(name)+'</b></td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
			
				WinPrint.document.write('<tr><td>' +(gggsuk)+'</b></td><td align="right">'+fGIC2(CheckData.gamebet.bet[xoI].wn)+' AMD</td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+selcoef[gggsuk.length];
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].wn);
				}
				}
				}
				}catch(exc){alert(exc);}
				marja+=" = "+ fGIC2(alsm) +" AMD";				
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:center;"><hr></div></tr>');
				WinPrint.document.write('<tr><td>Общий выигрыш</td><td align="right">'+fGIC2(CheckData.aw)+' AMD</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:center;"><hr></div></tr>');
				WinPrint.document.write('<tr><td >Отпечатано</td><td align="right"> '+(CheckData.da)+'</td></tr>');
				WinPrint.document.write('<tr><td>Кассир</td><td align="right">'+(CheckData.hallname)+'</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:center;"><hr></div></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;text-align:left; font-weight:bold;">Макс. выплата по билету: 5000000.00 AMD</div></td></tr>');				
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:13px;text-align:center;">С правилами согласен</div></td></tr>');
				WinPrint.document.write('<tr><td align="center" colspan="2">'+CheckData.BarCode+'</td></tr></table>');
				
				WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
            }
			
			
		