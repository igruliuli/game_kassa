function fGIC2(sum) { sum = sum.toString(); return sum.length > 2 ? sum.substring(0, sum.length - 2) + "." + sum.substring(sum.length - 2, sum.length) : sum = "0." + (parseInt(sum) != 0 ? sum : "00"); }
function fBUYKZTLOTTO(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
           
				WinPrint.document.write('    </head><body style="font-family:verdana; font-weight:bold; white-space:nowrap;">');
				
				WinPrint.document.write('<table style="font-family:verdana;" width="300" border="0"><tr><td colspan="2">Лотерейная квитанция/билет</td></tr><tr><td>Дата и время</td><td>'+(CheckData.da)+'</b></td></tr>');
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
					WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet[i].bet[xoI].tir)+'</td></tr><tr><td>Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+'</td><td>'+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet[i].bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet[i].bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet[i].bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet[i].bet[xoI].sm)*(parseFloat(CheckData.gamebet[i].bet[xoI].cf)/100);
				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
				if(xoI==0)	WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+'</td><td>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet.bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*(parseFloat(CheckData.gamebet.bet[xoI].cf)/100);
				}
				}
				else{
				
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				if(xoI==0)		WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
			
				WinPrint.document.write('<tr><td >'+name+' шары:</td><td>' +(gggsuk)+'</b></td></tr><tr><td>Индекс</td><td>'+selcoef[gggsuk.length]+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+selcoef[gggsuk.length];
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*(parseFloat(selcoef[gggsuk.length]));
				}
				}
				}
				}catch(exc){alert(exc);}
				marja+=" = "+ fGIC2(alsm) +" KZT";
				WinPrint.document.write('<tr><td>Возможный выигрыш</td><td>'+marja+'</td></tr>');
				WinPrint.document.write('<tr><td>Сумма контракта</td><td>'+fGIC2(CheckData.as)+' KZT</td></tr>');
				WinPrint.document.write('<tr><td colspan="2">'+CheckData.BarCode+'</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:14px;">Адрес Организатора: г.Астана,ул. Иманова д.19, оф.ВП-98 тел:88000807807 Призовой фонд составляет не менее 50% от средств полученных от реализации билетов. Срок выплаты выигрышей не более 30 рабочих дней с момента проведения розыгрыша в месте продажи билетов. Трансляция тиража 24/7, в месте реализации билетов. Условие проведения лотереи указаны в Правилах проведения лотереи.</div></td></tr></table>');
				WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
            }
		
function fPAYKZTLOTTO(CheckData,upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
           
				WinPrint.document.write('    </head><body style="font-weight:bold; white-space:nowrap;">');
				
			WinPrint.document.write('<table style="font-family:verdana;" width="300" border="0"><tr><td colspan="2">Лотерейная квитанция/билет</td></tr><tr><td>Дата и время</td><td>'+(CheckData.da)+'</b></td></tr>');
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
								case 'XKENO':selcoef=amaxcfx;name ='JX Keno';type=1;break;
								case 'KENOGOLD':selcoef=amaxcfx; name ='KenoGold';type=1;break;
								case 'KENOBET':selcoef=amaxcf;name ='KenoBet';type=1;break;
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
	if(xoI==0)		WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet[i].bet[xoI].tir)+'</td></tr><tr><td>Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+'</td><td>'+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet[i].bet[xoI].cf)+'</td></tr><tr><td>Результат</td><td>'+(parseFloat(CheckData.gamebet[i].bet[xoI].wn)>0?"Выигрыш ("+fGIC2(CheckData.gamebet[i].bet[xoI].wn)+" KZT)":"Проигрыш")+'</td></tr><tr><td colspan="2"><hr></td></tr>');

				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
						if(xoI==0)		WinPrint.document.write('<tr><td >Выбор</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+'</td><td>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td>Результат</td><td>'+(parseFloat(CheckData.gamebet.bet[xoI].wn)>0?"Выигрыш ("+fGIC2(CheckData.gamebet.bet[xoI].wn)+" KZT)":"Проигрыш")+'</td></tr><tr><td colspan="2"><hr></td></tr>');
		
				}
				}
				else{
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
					if(xoI==0)		WinPrint.document.write('<tr><td >Выбор</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
			
				WinPrint.document.write('<tr><td >'+name+' шары:</td><td>' +(gggsuk)+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td>Результат</td><td>'+(parseFloat(CheckData.gamebet.bet[xoI].wn)>0?"Выигрыш ("+fGIC2(CheckData.gamebet.bet[xoI].wn)+" KZT)":"Проигрыш")+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				
				}
				}
				}
				}catch(exc){alert(exc);}
				WinPrint.document.write('<tr><td>Сумма контракта</td><td>'+fGIC2(CheckData.as)+' KZT</td></tr>');
				WinPrint.document.write('<tr><td>Выигрыш</td><td>'+fGIC2(CheckData.aw)+' KZT</td></tr>');				
				WinPrint.document.write('<tr><td colspan="2">'+CheckData.BarCode+'</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:14px;">Адрес Организатора: г.Астана,ул. Иманова д.19, оф.ВП-98 тел:88000807807 Призовой фонд составляет не менее 50% от средств полученных от реализации билетов. Срок выплаты выигрышей не более 30 рабочих дней с момента проведения розыгрыша в месте продажи билетов. Трансляция тиража 24/7, в месте реализации билетов. Условие проведения лотереи указаны в Правилах проведения лотереи.</div></td></tr></table>');
				WinPrint.document.write('</body></html>');

               WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
               WinPrint.close();
            }
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
function fBUYKZTLOTTO_LANGKZT(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
           
				WinPrint.document.write('    </head><body style="font-family:verdana; font-weight:bold; white-space:nowrap;">');
				
				WinPrint.document.write('<table style="font-family:verdana; font-size:13px;" width="320" border="0"><tr><td colspan="2">Тираждық лотереяның түбіртегі/квитанция тиражной лотереи</td></tr><tr><td>Күні және уақыты/Дата и время</td><td>'+(CheckData.da)+'</b></td></tr>');
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
					WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet[i].bet[xoI].tir)+'</td></tr><tr><td>Номері/Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+'</td><td>'+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet[i].bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet[i].bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet[i].bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet[i].bet[xoI].sm)*(parseFloat(CheckData.gamebet[i].bet[xoI].cf)/100);
				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {	
				if(xoI==0)	WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номері/Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+'</td><td>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+fGIC2(CheckData.gamebet.bet[xoI].cf);
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*(parseFloat(CheckData.gamebet.bet[xoI].cf)/100);
				}
				}
				else{
				
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
				if(xoI==0)		WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номері/Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
		
				WinPrint.document.write('<tr><td >'+name+' шарлар/шары:</td><td>' +(gggsuk)+'</b></td></tr><tr><td>Индекс</td><td>'+selcoef[gggsuk.length]+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				if(marja!="")marja += " + ";
				marja+=fGIC2(CheckData.gamebet.bet[xoI].sm) +" x "+selcoef[gggsuk.length];
				alsm+=parseFloat(CheckData.gamebet.bet[xoI].sm)*(parseFloat(selcoef[gggsuk.length]));
				}
				}
				}
				}catch(exc){alert(exc);}
				marja+=" = "+ fGIC2(alsm) +" KZT";
				WinPrint.document.write('<tr><td>Жеңістің максималдық иқтималдылығы/Возможный выйгрыш</td><td>'+marja+'</td></tr>');
				WinPrint.document.write('<tr><td>Сомасы/Cумма контракта</td><td>'+fGIC2(CheckData.as)+' KZT</td></tr>');
				WinPrint.document.write('<tr><td colspan="2">'+CheckData.BarCode+'</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;">Ұйымдастырушының мекен-жайы: Қосшы аул., Лесная поляна ық. а., 43 қ., тел.: 88000807807. Жүлденің қоры риализацияланған билеттерден түскен қаражаттардың 50% -нан кем емесін құрайды. Ұтыс өткізілгеннен бастан, билетті сату орнында 30 жұмыс күнінен кем емес уақыт аралығында жеңіс жүлделерін төлеу жүргізіледі. Билетті сату орнында, тиражды 24/7 көрсетіледі. Лотерейді өткізу Ережелерінде лотерейді өткізу Шарттары көрсетілген.<br/>Адрес Организатора: с.Косшы, мкр. Лесная поляна, стр. 43, тел.: 88000807807. Призовой фонд составляет не менее 50% от средств полученных от реализации билетов. Срок выплаты выигрышей не более 30 рабочих дней с момента проведения розыгрыша в месте продажи билетов. Трансляция тиража 24/7, в месте реализации билетов. Условие проведения лотереи указаны в Правилах проведения лотереи.</div></td></tr></table>');
				WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
            }
		
function fPAYKZTLOTTO_LANGKZT(CheckData,upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
           
				WinPrint.document.write('    </head><body style="font-weight:bold; white-space:nowrap;">');
				
			WinPrint.document.write('<table style="font-family:verdana;font-size:13px;" width="320" border="0"><tr><td colspan="2">Тираждық лотереяның түбіртегі/квитанция тиражной лотереи</td></tr><tr><td>Күні және уақыты/Дата и время</td><td>'+(CheckData.da)+'</b></td></tr>');
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
								case 'XKENO':selcoef=amaxcfx;name ='JX Keno';type=1;break;
								case 'KENOGOLD':selcoef=amaxcfx; name ='KenoGold';type=1;break;
								case 'KENOBET':selcoef=amaxcf;name ='KenoBet';type=1;break;
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
	if(xoI==0)		WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet[i].bet[xoI].tir)+'</td></tr><tr><td>Номері/Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+(i==0?"(4 hands)":i==1?"(6 hands)":"(8 hands)")+'</td><td>'+(CheckData.fSetPokerName(CheckData.gamebet[i].bet[xoI].nm))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet[i].bet[xoI].cf)+'</td></tr><tr><td>Нәтиже/Результат</td><td>'+(parseFloat(CheckData.gamebet[i].bet[xoI].wn)>0?"Жеңіс/Выигрыш ("+fGIC2(CheckData.gamebet[i].bet[xoI].wn)+" KZT)":"Жоғалту/Проигрыш")+'</td></tr><tr><td colspan="2"><hr></td></tr>');

				}}
				}
				else{
					
				if( type==2)
				{
				
					for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
						if(xoI==0)		WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номері/Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				WinPrint.document.write('<tr><td >'+name+'</td><td>'+(((parseInt(CheckData.gamebet.bet[xoI].nm)<37?'Номер ':'Ставка ') +CheckData.fSetRulName(CheckData.gamebet.bet[xoI].nm)))+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td>Нәтиже/Результат</td><td>'+(parseFloat(CheckData.gamebet.bet[xoI].wn)>0?"Жеңіс/Выигрыш ("+fGIC2(CheckData.gamebet.bet[xoI].wn)+" KZT)":"Жоғалту/Проигрыш")+'</td></tr><tr><td colspan="2"><hr></td></tr>');
		
				}
				}
				else{
				for (var xoI = 0; xoI < CheckData.gamebet.max; xoI++) {		
					if(xoI==0)		WinPrint.document.write('<tr><td >Серия</td><td>#'+(CheckData.gamebet.bet[xoI].tir)+'</td></tr><tr><td>Номері/Номер</td><td>'+(CheckData.code)+'</b></td></tr>');
				var gggsuk = CheckData.gamebet.bet[xoI].nm.split(';'); gggsuk.pop();
				gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });									
			
				WinPrint.document.write('<tr><td >'+name+' шарлар/шары:</td><td>' +(gggsuk)+'</b></td></tr><tr><td>Индекс</td><td>'+fGIC2(CheckData.gamebet.bet[xoI].cf)+'</td></tr><tr><td>Нәтиже/Результат</td><td>'+(parseFloat(CheckData.gamebet.bet[xoI].wn)>0?"Жеңіс/Выигрыш ("+fGIC2(CheckData.gamebet.bet[xoI].wn)+" KZT)":"Жоғалту/Проигрыш")+'</td></tr><tr><td colspan="2"><hr></td></tr>');
				
				}
				}
				}
				}catch(exc){alert(exc);}
				WinPrint.document.write('<tr><td>Жалпы сомасы/общая сумма</td><td>'+fGIC2(CheckData.as)+' KZT</td></tr>');
				WinPrint.document.write('<tr><td>Жеңіс/Выигрыш</td><td>'+fGIC2(CheckData.aw)+' KZT</td></tr>');				
				WinPrint.document.write('<tr><td colspan="2">'+CheckData.BarCode+'</td></tr>');
				WinPrint.document.write('<tr><td colspan="2"><div style="font-size:10px;">Ұйымдастырушының мекен-жайы: Қосшы аул., Лесная поляна ық. а., 43 қ., тел.: 88000807807. Жүлденің қоры риализацияланған билеттерден түскен қаражаттардың 50 % -нан кем емесін құрайды. Ұтыс өткізілгеннен бастан, билетті сату орнында 30 жұмыс күнінен кем емес уақыт аралығында жеңіс жүлделерін төлеу жүргізіледі. Билетті сату орнында, тиражды 24/7 көрсетіледі. Лотерейді өткізу Ережелерінде лотерейді өткізу Шарттары көрсетілген.<br/>Адрес Организатора: с.Косшы, мкр. Лесная поляна, стр. 43, тел.: 88000807807. Призовой фонд составляет не менее 50% от средств полученных от реализации билетов. Срок выплаты выигрышей не более 30 рабочих дней с момента проведения розыгрыша в месте продажи билетов. Трансляция тиража 24/7, в месте реализации билетов. Условие проведения лотереи указаны в Правилах проведения лотереи.</div></td></tr></table>');
				WinPrint.document.write('</body></html>');

               WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
               WinPrint.close();
            }			
			
			
			
			
			
			
			
			
			
			
			
			
			