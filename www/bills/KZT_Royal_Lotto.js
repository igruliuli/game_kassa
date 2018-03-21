
function fBUYKENORoyalLotto(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
                if (!CheckData.isLocalTest) {
                    WinPrint.document.write('<style> @font-face {');
                    WinPrint.document.write('  font-family: IDAutomationHC39M; ');
                    WinPrint.document.write('   src:  url(http://91.192.116.108:3301/IDAutomationHC39M.ttf); ');
                    WinPrint.document.write('  }  ');
                    WinPrint.document.write('  .suka');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  font-size:18px;');
                    WinPrint.document.write('   font-family:IDAutomationHC39M;');
                    WinPrint.document.write('  }</style>');
                }
                
				WinPrint.document.write('    </head><body style="font-weight:bold; white-space:nowrap;">');
				 var addy = 0;
					
				WinPrint.document.write('<img style="left:15px; width:'+(192*1.2)+'px; height:'+(144*1.2)+'px; position:absolute;" src="http://91.192.116.108:3301/bills/kzt_royal_lotto.jpg"/>');
				addy+=1;
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+110)+'px;position:absolute;font-family:Arial;font-weight:bold;font-size:12px;"> ');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;text-align:center;left:15px;top:'+(addy+0)+'px;width:auto; height:auto;font-weight:bold;font-size:10px;">ROYAL LOTTO Казакстан Республикасында</br>уйымдастырушисы "Best House" ЖШС</div>');
				addy+=30;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:60px;top:'+(addy+0)+'px;width:auto;white-space:nowrap;font-weight:bold;bold;font-size:12px;">Тираж №</div>'); 
				
					if(CheckData.gamename != "poker")	{				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;white-space:nowrap;bold;font-size:12px;text-align:left;">'+CheckData.gamebet.bet[0].tir + '</div>');addy+=22;
					}else{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + (CheckData.poker1.max != 0 ? CheckData.poker1.bet[0].tir + " " : "") + (CheckData.poker2.max != 0 ? CheckData.poker2.bet[0].tir + " " : "") + (CheckData.poker3.max != 0 ? CheckData.poker3.bet[0].tir : "")+'</div>');addy+=22;
					} WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;"white-space:nowrap;>Кунi жэне уакыты:</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy)+'px;width:140px;text-align:left;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');addy+=22;
               
			   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;white-space:nowrap;">Лотерея аты:</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy)+'px;width:140px;text-align:left;font-weight:bold;white-space:nowrap;">'+CheckData.gamename+'</div>');addy+=22;
			   
			   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;white-space:nowrap;">Лотереялык квитанция №</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:160px;top:'+(addy)+'px;width:auto;text-align:left;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');addy+=22;
			
			// WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;">Адрес: г. Атырау мкр. Привокзальный 3а дом 4а кв. 47</div>');addy+=17;
	   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;">Лотереялык ставка:</div>');
	   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:180px;top:'+(addy)+'px;width:auto;font-weight:bold;">Баfасы:</div>');addy+=22;
	  if(CheckData.gamename == "poker"){
	  WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 0) + 'px;width:100px;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');
	
						 for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker1.bet[xoI].nm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write((parseInt(CheckData.poker1.max) + xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker2.bet[xoI].nm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write((parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker3.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:110px;top:' + (addy + 0) + 'px;width:160px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(CheckData.fGIC(CheckData.poker1.bet[xoI].sm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(CheckData.fGIC(CheckData.poker2.bet[xoI].sm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(CheckData.fGIC(CheckData.poker3.bet[xoI].sm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:200px;top:' + (addy + 0) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');addy+=22;

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(" x " + CheckData.fGIC(CheckData.poker1.bet[xoI].cf) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(" x " + CheckData.fGIC(CheckData.poker2.bet[xoI].cf) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(" x " + CheckData.fGIC(CheckData.poker3.bet[xoI].cf) + '<br/>');
                }
                WinPrint.document.write('</font></div>');
									addy+=17*(parseInt(CheckData.poker1.max)+parseInt(CheckData.poker2.max)+parseInt(CheckData.poker3.max))-17;
	  }
	  else{
				for(var fif=0; fif<CheckData.gamebet.max; fif++)
				{
					
					if(CheckData.gamename == "loto 1/37" || CheckData.gamename == "1/37 bet"|| CheckData.gamename == "1/37 fast")
					{
						WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 0) + 'px;width:258px;font-weight:bold;text-align:left;">' + (fif + 1) + ") " + CheckData.fSetRulName(CheckData.gamebet.bet[fif].nm) + '</div>');					
					}
					else{
						
					var gggsuk = CheckData.gamebet.bet[fif].nm.split(';'); gggsuk.pop();
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 0) + 'px;width:258px;font-weight:bold;text-align:left;">'+  (fif + 1) + ") " +  gggsuk + '</div>');
					
					}		
				
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 0) + 'px;width:258px;font-weight:bold;text-align:right;">' + (parseFloat(CheckData.gamebet.bet[fif].sm)/100) + ' тенге</div>');		
					addy+=17;
				}
	  }
               
           
                addy-=8;
           
			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;white-space:nowrap;">_____________________________________</div>');addy+=17;	
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:258px;font-weight:bold;text-align:left;">Жалпы Баfасы:</div>');
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:258px;font-weight:bold;text-align:right;">' +  parseFloat(CheckData.as)/100  +' тенге</div>');addy+=17;		
            WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 136-(17*8)) + 'px;">'+CheckData.BarCode+'</div>');
			
								if(CheckData.iLastDatacode[0]==2 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
                WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
            }
		
function fPAYKENORoyalLotto(CheckData,upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head>');
                if (!CheckData.isLocalTest) {
                    WinPrint.document.write('<style> @font-face {');
                    WinPrint.document.write('  font-family: IDAutomationHC39M; ');
                    WinPrint.document.write('   src:  url(http://91.192.116.108:3301/IDAutomationHC39M.ttf); ');
                    WinPrint.document.write('  }  ');
                    WinPrint.document.write('  .suka');
                    WinPrint.document.write('  {');
                    WinPrint.document.write('  font-size:18px;');
                    WinPrint.document.write('   font-family:IDAutomationHC39M;');
                    WinPrint.document.write('  }</style>');
                }
                
				WinPrint.document.write('    </head><body style="font-weight:bold;white-space:nowrap;">');
					var allWin=0;
				var allBet=0;
				var addy = 0;
					
				WinPrint.document.write('<img style="left:15px; width:'+(192*1.2)+'px; height:'+(144*1.2)+'px; position:absolute;" src="http://91.192.116.108:3301/bills/kzt_royal_lotto.jpg"/>');
				addy+=1;
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+110)+'px;position:absolute;font-family:Arial;font-weight:bold;font-size:12px;"> ');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;text-align:center;left:15px;top:'+(addy+0)+'px;width:auto; height:auto;font-weight:bold;font-size:10px;">ROYAL LOTTO Казакстан Республикасында</br>уйымдастырушисы "Best House" ЖШС</div>');
				addy+=30;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:60px;top:'+(addy+0)+'px;width:auto;white-space:nowrap;font-weight:bold;bold;font-size:12px;">Тираж №</div>'); 
				if(CheckData.gamename != "poker")	{				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;white-space:nowrap;bold;font-size:12px;text-align:left;">'+CheckData.gamebet.bet[0].tir + '</div>');addy+=22;
					}else{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + (CheckData.poker1.max != 0 ? CheckData.poker1.bet[0].tir + " " : "") + (CheckData.poker2.max != 0 ? CheckData.poker2.bet[0].tir + " " : "") + (CheckData.poker3.max != 0 ? CheckData.poker3.bet[0].tir : "")+'</div>');addy+=22;
					} 
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;"white-space:nowrap;>Кунi жэне уакыты:</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy)+'px;width:140px;text-align:left;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');addy+=22;
               
			   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;white-space:nowrap;">Лотерея аты:</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy)+'px;width:140px;text-align:left;font-weight:bold;white-space:nowrap;">'+CheckData.gamename+'</div>');addy+=22;
			   
			   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;white-space:nowrap;">Лотереялык квитанция №</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:160px;top:'+(addy)+'px;width:auto;text-align:left;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');addy+=17;
				// WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;">Адрес: г. Атырау мкр. Привокзальный 3а дом 4а кв. 47</div>');addy+=17;
			
	//   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy)+'px;width:auto;font-weight:bold;">Лотереялык ставка:</div>');
	//   WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:150px;top:'+(addy)+'px;width:auto;font-weight:bold;">ұтыстар</div>');addy+=22;
		if(CheckData.gamename != "poker"){
		WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;text-align:center;">Cанын жеңіп</div>');addy+=17;
		WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:260px;font-weight:bold;text-align:center;white-space:normal;">' + upr + '</div>');addy+=(upr.length>15?22:17/2);
		}
				var winnum = CheckData.trslt.split(';');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">_____________________________________</div>');addy+=17;
				if(CheckData.gamename == "poker"){
	 WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker1.bet[xoI].nm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write((parseInt(CheckData.poker1.max) + xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker2.bet[xoI].nm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write((parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + xoI + 1) + ") " + CheckData.fSetPokerName(CheckData.poker3.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:90px;top:' + (addy) + 'px;width:100px;text-align:left;">баfасы<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(CheckData.fGIC(CheckData.poker1.bet[xoI].sm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(CheckData.fGIC(CheckData.poker2.bet[xoI].sm) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(CheckData.fGIC(CheckData.poker3.bet[xoI].sm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:145px;top:' + (addy) + 'px;width:100px;text-align:left;">фактор<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(" x " + CheckData.fGIC(CheckData.poker1.bet[xoI].cf) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(" x " + CheckData.fGIC(CheckData.poker2.bet[xoI].cf) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(" x " + CheckData.fGIC(CheckData.poker3.bet[xoI].cf) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:200px;top:' + (addy) + 'px;width:100px;text-align:left;">ұтыстар<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(" = " + CheckData.fGIC(CheckData.poker1.bet[xoI].wn) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(" = " + CheckData.fGIC(CheckData.poker2.bet[xoI].wn) + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(" = " + CheckData.fGIC(CheckData.poker3.bet[xoI].wn) + '<br/>');
                }
				
                WinPrint.document.write('</font></div>');
				addy+=17*(parseInt(CheckData.poker1.max)+parseInt(CheckData.poker2.max)+parseInt(CheckData.poker3.max));
	  }
	  else{
		  
				for(var fif=0; fif<CheckData.gamebet.max; fif++)
				{
					if(!(CheckData.gamename == "loto 1/37" || CheckData.gamename == "1/37 bet"|| CheckData.gamename == "1/37 fast"))
					{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;text-align:center;">Ставка</div>');addy+=17;
					var gggsuk = CheckData.gamebet.bet[fif].nm.split(';');gggsuk.pop();
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">' + (fif + 1) + ") " +  gggsuk + '</div>');			addy+=17;		
					var sortnums = [];
					for(var g1=0; g1<20; g1++)
					{
						for(var g2=0; g2<gggsuk.length; g2++)
						{
							if(parseInt(winnum[g1]) == parseInt(gggsuk[g2]))
							{
								sortnums.push(parseInt(winnum[g1]));
							}
						}
					}
					
					
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;text-align:center;">' + CheckData.aLang[133][CheckData.LangID] + ' ' + (sortnums == ""? "0" : sortnums.length) + ' ' + CheckData.aLang[135][CheckData.LangID] + '</div>');addy+=17;
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">' + (sortnums == "" ? CheckData.aLang[136][CheckData.LangID]  : sortnums.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; })) + '</div>');addy+=17;

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy) + 'px;width:auto;text-align:center;">' + 'баfасы' + '<br/><font font-weight:bold;>' + CheckData.fGIC(CheckData.gamebet.bet[fif].sm) + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:100px;top:' + (addy) + 'px;width:auto;text-align:center;">' + 'фактор' + '<br/><font font-weight:bold;>x' + CheckData.fGIC(CheckData.gamebet.bet[fif].cf) + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:180px;top:' + (addy) + 'px;width:auto;text-align:center;">' + 'ұтыстарэ' + '<br/><font font-weight:bold;>' + CheckData.fGIC(CheckData.gamebet.bet[fif].wn) + ' </font></div>');addy+=17
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">_____________________________________</div>');addy+=2;
					}
					else
					{
						WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:100px;white-space:nowrap;">'+(fif==0?CheckData.aLang[80][CheckData.LangID]:'')+'<br/><font font-weight:bold;>');

                    WinPrint.document.write( (fif + 1) + ") " + CheckData.fSetRulName(CheckData.gamebet.bet[fif].nm) + '<br/>');
           
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:95px;top:' + (addy) + 'px;width:100px;text-align:left;">' + (fif==0?'баfасы':'') + '<br/><font font-weight:bold;>');

                    WinPrint.document.write(CheckData.fGIC(CheckData.gamebet.bet[fif].sm) + '<br/>');
             
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:155px;top:' + (addy) + 'px;width:100px;text-align:left;">'+(fif==0?'фактор':'')+'<br/><font font-weight:bold;>');

                    WinPrint.document.write(" x " + parseInt(CheckData.gamebet.bet[fif].cf) / 100 + '<br/>');
                
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:200px;top:' + (addy) + 'px;width:100px;text-align:left;">'+(fif==0?'ұтыстарэ':'')+'<br/><font font-weight:bold;>');

                    WinPrint.document.write(" = " + CheckData.fGIC(CheckData.gamebet.bet[fif].wn-CheckData.gamebet.bet[fif].jp) + '<br/>');
                
                WinPrint.document.write('</font></div>');
					}
					allBet+=parseInt(CheckData.gamebet.bet[fif].sm);
					allWin+=parseInt(CheckData.gamebet.bet[fif].wn);
					
					addy+=17;
					if(parseFloat(CheckData.gamebet.bet[fif].jp)>0)
					{
						WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy + 187+20) + 'px;width:270px;text-align:left;"><br/><font font-weight:bold;>Jackpot: ' + parseFloat(CheckData.gamebet.bet[fif].jp)/100 + ' </font></div>');
						addy+=17;
					}
				}
	  }
                addy-=0;
           	if((CheckData.gamename == "1/37 fast"||CheckData.gamename == "loto 1/37" || CheckData.gamename == "1/37 bet"|| CheckData.gamename == "poker")){
			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;white-space:nowrap;">_____________________________________</div>');addy+=17;	}
//WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:258px;font-weight:bold;text-align:left;">Жалпы Баfасы:</div>');
//WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:258px;font-weight:bold;text-align:right;">' +  (parseFloat(CheckData.as)/100)  +' тенге</div>');addy+=17;	
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:258px;font-weight:bold;text-align:left;">Жалпы ұтыстар:</div>');
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:258px;font-weight:bold;text-align:right;">'+ (parseFloat(allWin)/100) +' тенге</div>');	addy+=17;
                           WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy) + 'px;">'+CheckData.BarCode+'</div>');
			   
								if(CheckData.iLastDatacode[0]==2 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
                WinPrint.document.write('</body></html>');

                WinPrint.document.close();
                WinPrint.focus();
               if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
            }
			
			
			
		