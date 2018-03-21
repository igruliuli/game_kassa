
			function fPrintCheckBetPokerNezalegna(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=640,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
                if (!isLocalTest) {
                    WinPrint.document.write('<style> @font-face {');
                    WinPrint.document.write('  font-family: IDAutomationHC39M; ');
                    WinPrint.document.write('   src:  url(http://91.192.116.108:3310/IDAutomationHC39M.ttf); ');
                    WinPrint.document.write('  }  ');
					WinPrint.document.write('<style> @font-face {');
                    WinPrint.document.write('  font-family: Calibri; ');
                    WinPrint.document.write('   src:  url(Calibri.ttf); ');
                    WinPrint.document.write('  }  ');
					WinPrint.document.write('  .blat');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  font-size:9px;');
                    WinPrint.document.write('  font-family:Calibri;');					
                    WinPrint.document.write(' font-weight:normal; padding-left:5px; text-align:left; 	;letter-spacing:1px;}');
						WinPrint.document.write('.tbv{border-style:solid;border-width:1px;border-collapse:collapse;padding:5px;}');
					WinPrint.document.write('  .blat2');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  font-size:11px;');
                    WinPrint.document.write('  font-family:Calibri;');					
                    WinPrint.document.write(' font-weight:normal;  text-align:center; 	;letter-spacing:1px;}');
	WinPrint.document.write('  .blat3');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  font-size:9px;');
                    WinPrint.document.write('  font-family:Calibri;');					
                    WinPrint.document.write(' font-weight:normal;padding-left:30px;  text-align:left; 	;letter-spacing:1px;}');

                    WinPrint.document.write('  .suka');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  font-size:11px;');
                    WinPrint.document.write('   font-family:IDAutomationHC39M;');
                    WinPrint.document.write('  }</style>');
                }
                WinPrint.document.write('    </head><body style="font-family:Calibri;letter-spacing:1px">');
				var addy = 0;
				WinPrint.document.write('<div class="contentpane" style="width:240px;left:0px;top:'+addy+'px;position:absolute;font-weight:normal;font-size:11px;text-align:center; white-space:nowrap;">Українська Нацiональна Лотерея</div>');addy+=14;
				WinPrint.document.write('<div class="contentpane" style="width:240px;left:0px;top:'+addy+'px;position:absolute;font-weight:normal;font-size:11px;text-align:center; white-space:nowrap;">Державна лотерея тото "ФАВОРИТ СПОРТ"</div>');addy+=14;
				WinPrint.document.write('<div class="contentpane" style="width:240px;left:0px;top:'+addy+'px;position:absolute;font-weight:normal;font-size:11px;text-align:center; white-space:nowrap;">lottery.com.ua</div>');
		
				
               WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+0+'px;position:absolute;font-weight:normal;font-size:11px;"> ');addy+=14;
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+addy+'px;width:100px;">Iгровий бiлет №</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:'+addy+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');addy+=14;

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+addy+'px;width:100px;">Дата і час</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:'+addy+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');addy+=14;
                
                if (CheckData.bIsBetForCadr) {;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');addy+=14;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + $('.ClientBalanceText:eq(0)').text() + '</div>');addy+=14;
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;">Подія</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + (CheckData.poker1.max != 0 ? CheckData.poker1.bet[0].tir + " " : "") + (CheckData.poker2.max != 0 ? CheckData.poker2.bet[0].tir + " " : "") + (CheckData.poker3.max != 0 ? CheckData.poker3.bet[0].tir : "") +"/"+ $('#hallname').text()+ '</div>');addy+=14;

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;text-align:left;">Умова</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">POKER( ' + (CheckData.poker1.max != 0 ? "1# " + " " : "") + (CheckData.poker2.max != 0 ? "2# " : "") + (CheckData.poker3.max != 0 ? "3#" : "") + ')</div>');addy+=14;

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;">');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write('<table class="tbv" align=center; width=240px; border="1"><thead><tr><th class="blat2">Ставка</th><th class="blat2">Сума</th><th class="blat2">Коэф</th></tr><tr><th class="blat2">'+(xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker1.bet[xoI].nm) + '</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker1.bet[xoI].sm) + 'грн.</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker1.bet[xoI].cf) +'</th></tr></thead>');
					
					var v1=(parseFloat((CheckData.poker1.bet[xoI].sm)/100)*parseFloat((CheckData.poker1.bet[xoI].cf)/100));

		WinPrint.document.write('<tr><th class="blat">Можливий виграш:</th><th  colspan="2" class="blat3"><b>'+(parseInt((((v1)*100)/83.5)*100)/100).toFixed(3).slice(0,-1) +' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок 1,5%:</th><th  colspan="2" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*1.5)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок з виграшу 15%:</th><th  colspan="2" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*15)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Можлива виплата:</th><th  colspan="2" class="blat3"><b>'+(parseInt(v1*100)/100).toFixed(3).slice(0,-1)+' грн.</b></table>');	
                }
               for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write('<table class="tbv" align=center; width=240px; border="1"><thead><tr><th class="blat2">Ставка</th><th class="blat2">Сума</th><th class="blat2">Коэф</th></tr><tr><th class="blat2">'+(xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker2.bet[xoI].nm) + '</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker2.bet[xoI].sm) + 'грн.</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker2.bet[xoI].cf) +'</th></tr></thead>');
					
					var v1=(parseFloat((CheckData.poker2.bet[xoI].sm)/100)*parseFloat((CheckData.poker2.bet[xoI].cf)/100));

		WinPrint.document.write('<tr><th class="blat">Можливий виграш:</th><th  colspan="2" class="blat3"><b>'+(parseInt((((v1)*100)/83.5)*100)/100).toFixed(3).slice(0,-1) +' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок 1,5%:</th><th  colspan="2" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*1.5)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок з виграшу 15%:</th><th  colspan="2" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*15)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Можлива виплата:</th><th  colspan="2" class="blat3"><b>'+(parseInt(v1*100)/100).toFixed(3).slice(0,-1)+' грн.</b></table>');	
                }
				  for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write('<table class="tbv" align=center; width=240px; border="1"><thead><tr><th class="blat2">Ставка</th><th class="blat2">Сума</th><th class="blat2">Коэф</th></tr><tr><th class="blat2">'+(xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker3.bet[xoI].nm) + '</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker3.bet[xoI].sm) + 'грн.</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker3.bet[xoI].cf) +'</th></tr></thead>');
					
					var v1=(parseFloat((CheckData.poker3.bet[xoI].sm)/100)*parseFloat((CheckData.poker3.bet[xoI].cf)/100));

		WinPrint.document.write('<tr><th class="blat">Можливий виграш:</th><th  colspan="2" class="blat3"><b>'+(parseInt((((v1)*100)/83.5)*100)/100).toFixed(3).slice(0,-1) +' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок 1,5%:</th><th  colspan="2" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*1.5)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок з виграшу 15%:</th><th  colspan="2" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*15)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Можлива виплата:</th><th  colspan="2" class="blat3"><b>'+(parseInt(v1*100)/100).toFixed(3).slice(0,-1)+' грн.</b></table>');	
                }
                WinPrint.document.write('</div>');


                WinPrint.document.write('<div style="border:0px solid black;font-size:11px;position:absolute;left:0px;top:' + ((addy-15) + (95 * (parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + parseInt(CheckData.poker3.max)))) + 'px;width:300px;letter-spacing:normal;">');
                WinPrint.document.write('<div style="letter-spacing:1px;border:0px solid black;font-size:11;position:absolute;left:0px;top:'+(14)+'px;width:140px;">Загальна сума ставки:</div>');
                WinPrint.document.write('<div style="letter-spacing:1px;border:0px solid black;font-size:11;position:absolute;left:120px;top:'+(14)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + fGIC(CheckData.as) + ' грн.</div>');
				WinPrint.document.write('<div style="letter-spacing:1px;border:0px solid black;font-size:9px;position:absolute;left:0px;top:' + (27) + 'px;width:300px;">З умовами ознайомився та згоден<br/>Підтверджую, що мій вік більше, ніж 18 років<br/>');
                WinPrint.document.write('<div class="suka" style="font-size:16px;font-family:IDAutomationHC39M; position:absolute;left:0px;top:'+(24)+'px;width:240px;text-align:center;">*' + CheckData.code + '*</div>');
				
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');addy+=14;
	if(CheckData.iLastDatacode[0]==3 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 70 + 19 * (parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + parseInt(CheckData.poker3.max))) + 110) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
                WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
                if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();


            }

            function fPrintCheckPokerNezalegna(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=640,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
                if (!isLocalTest) {
                    WinPrint.document.write('<style> @font-face {');
                    WinPrint.document.write('  font-family: IDAutomationHC39M; ');
                    WinPrint.document.write('   src:  url(http://91.192.116.108:3310/IDAutomationHC39M.ttf); ');
                    WinPrint.document.write('  }  ');
					WinPrint.document.write('<style> @font-face {');
                    WinPrint.document.write('  font-family: Calibri; ');
                    WinPrint.document.write('   src:  url(Calibri.ttf); ');
                    WinPrint.document.write('  }  ');
					WinPrint.document.write('  .blat');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  white-space:nowrap; font-size:9px;');
                    WinPrint.document.write('  font-family:Calibri;');					
                    WinPrint.document.write(' font-weight:normal; padding-left:5px; text-align:left; 	;letter-spacing:1px;}');
						WinPrint.document.write('.tbv{border-style:solid; white-space:nowrap;border-width:1px;border-collapse:collapse;padding:5px;}');
					WinPrint.document.write('  .blat2');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  white-space:nowrap; font-size:11px;');
                    WinPrint.document.write('  font-family:Calibri;');					
                    WinPrint.document.write(' font-weight:normal;  text-align:center; 	;letter-spacing:1px;}');
	WinPrint.document.write('  .blat3');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  white-space:nowrap; font-size:9px;');
                    WinPrint.document.write('  font-family:Calibri;');					
                    WinPrint.document.write(' font-weight:normal;padding-left:40px;  text-align:left; 	;letter-spacing:1px;}');

                    WinPrint.document.write('  .suka');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  font-size:11px;');
                    WinPrint.document.write('   font-family:IDAutomationHC39M;');
                    WinPrint.document.write('  }</style>');
                }
                WinPrint.document.write('    </head><body style="font-family:Calibri;letter-spacing:1px">');
				var addy = 0;
				WinPrint.document.write('<div class="contentpane" style="width:240px;left:0px;top:'+addy+'px;position:absolute;font-weight:normal;font-size:11px;text-align:center; white-space:nowrap;">Українська Нацiональна Лотерея</div>');addy+=14;
				WinPrint.document.write('<div class="contentpane" style="width:240px;left:0px;top:'+addy+'px;position:absolute;font-weight:normal;font-size:11px;text-align:center; white-space:nowrap;">Державна лотерея тото "ФАВОРИТ СПОРТ"</div>');addy+=14;
				WinPrint.document.write('<div class="contentpane" style="width:240px;left:0px;top:'+addy+'px;position:absolute;font-weight:normal;font-size:11px;text-align:center; white-space:nowrap;">lottery.com.ua</div>');
		
				
               WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+0+'px;position:absolute;font-weight:normal;font-size:11px;"> ');addy+=14;
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+addy+'px;width:100px;">Iгровий бiлет №</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:'+addy+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');addy+=14;

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+addy+'px;width:100px;">Дата і час</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:'+addy+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');addy+=14;
                
                if (CheckData.bIsBetForCadr) {;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');addy+=14;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + $('.ClientBalanceText:eq(0)').text() + '</div>');addy+=14;
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;">Подія</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + (CheckData.poker1.max != 0 ? CheckData.poker1.bet[0].tir + " " : "") + (CheckData.poker2.max != 0 ? CheckData.poker2.bet[0].tir + " " : "") + (CheckData.poker3.max != 0 ? CheckData.poker3.bet[0].tir : "") +"/"+ $('#hallname').text()+ '</div>');addy+=14;

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;text-align:left;">Умова</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">POKER( ' + (CheckData.poker1.max != 0 ? "1# " + " " : "") + (CheckData.poker2.max != 0 ? "2# " : "") + (CheckData.poker3.max != 0 ? "3#" : "") + ')</div>');addy+=14;

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;">');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write('<table class="tbv" align=center; width=240px; border="1"><thead><tr><th class="blat2">Ставка</th><th class="blat2">Сума</th><th class="blat2">Коэф</th><th class="blat2">Виграш</th></tr><tr><th class="blat2">'+(xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker1.bet[xoI].nm) + '</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker1.bet[xoI].sm) + 'грн.</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker1.bet[xoI].cf) +'</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker1.bet[xoI].wn) +'грн.</th></tr></thead>');
					
					var v1=(parseFloat((CheckData.poker1.bet[xoI].wn)/100));

		WinPrint.document.write('<tr><th class="blat">Виграш:</th><th  colspan="3" class="blat3"><b>'+(parseInt((((v1)*100)/83.5)*100)/100).toFixed(3).slice(0,-1) +' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок 1,5%:</th><th  colspan="3" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*1.5)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок з виграшу 15%:</th><th  colspan="3" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*15)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Виплата:</th><th  colspan="3" class="blat3"><b>'+(parseInt(v1*100)/100).toFixed(3).slice(0,-1)+' грн.</b></table>');	
                }
               for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write('<table class="tbv" align=center; width=240px; border="1"><thead><tr><th class="blat2">Ставка</th><th class="blat2">Сума</th><th class="blat2">Коэф</th><th class="blat2">Виграш</th></tr><tr><th class="blat2">'+(xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker2.bet[xoI].nm) + '</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker2.bet[xoI].sm) + 'грн.</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker2.bet[xoI].cf) +'</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker2.bet[xoI].wn) +'грн.</th></tr></thead>');
					
					var v1=(parseFloat((CheckData.poker2.bet[xoI].wn)/100));

		WinPrint.document.write('<tr><th class="blat">Виграш:</th><th  colspan="3" class="blat3"><b>'+(parseInt((((v1)*100)/83.5)*100)/100).toFixed(3).slice(0,-1) +' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок 1,5%:</th><th  colspan="3" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*1.5)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок з виграшу 15%:</th><th  colspan="3" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*15)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Виплата:</th><th  colspan="3" class="blat3"><b>'+(parseInt(v1*100)/100).toFixed(3).slice(0,-1)+' грн.</b></table>');	
                }
	         for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write('<table class="tbv" align=center; width=240px; border="1"><thead><tr><th class="blat2">Ставка</th><th class="blat2">Сума</th><th class="blat2">Коэф</th><th class="blat2">Виграш</th></tr><tr><th class="blat2">'+(xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker3.bet[xoI].nm) + '</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker3.bet[xoI].sm) + 'грн.</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker3.bet[xoI].cf) +'</th><th class="blat2" style="font-weight:bold">'+fGIC(CheckData.poker3.bet[xoI].wn) +'грн.</th></tr></thead>');
					
					var v1=(parseFloat((CheckData.poker3.bet[xoI].wn)/100));

		WinPrint.document.write('<tr><th class="blat">Виграш:</th><th  colspan="3" class="blat3"><b>'+(parseInt((((v1)*100)/83.5)*100)/100).toFixed(3).slice(0,-1) +' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок 1,5%:</th><th  colspan="3" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*1.5)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Податок з виграшу 15%:</th><th  colspan="3" class="blat3"><b>'+(parseInt(((((((v1)*100)/83.5))*15)/100)*100)/100).toFixed(3).slice(0,-1)+' грн.</b></th></tr>');
					WinPrint.document.write('<tr><th class="blat">Виплата:</th><th  colspan="3" class="blat3"><b>'+(parseInt(v1*100)/100).toFixed(3).slice(0,-1)+' грн.</b></table>');	
                }
                WinPrint.document.write('</div>');


                WinPrint.document.write('<div style="border:0px solid black;font-size:11px;position:absolute;left:0px;top:' + ((addy-15) + (95 * (parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + parseInt(CheckData.poker3.max)))) + 'px;width:300px;letter-spacing:normal;">');
                WinPrint.document.write('<div style="letter-spacing:1px;border:0px solid black;font-size:11;position:absolute;left:0px;top:'+(14)+'px;width:140px;">Загальна сума виплаты:</div>');
                WinPrint.document.write('<div style="letter-spacing:1px;border:0px solid black;font-size:11;position:absolute;left:120px;top:'+(14)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + fGIC(CheckData.aw) + ' грн.</div>');
				WinPrint.document.write('<div style="letter-spacing:1px;border:0px solid black;font-size:9px;position:absolute;left:0px;top:' + (27) + 'px;width:300px;">З умовами ознайомився та згоден<br/>Підтверджую, що мій вік більше, ніж 18 років<br/>');
                WinPrint.document.write('<div class="suka" style="font-size:16px;font-family:IDAutomationHC39M; position:absolute;left:0px;top:'+(24)+'px;width:240px;text-align:center;">*' + CheckData.code + '*</div>');
				
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');addy+=14;
	if(CheckData.iLastDatacode[0]==3 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 15 + 95 * (parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + parseInt(CheckData.poker3.max))) + 110) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
                WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
                if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();


            }
