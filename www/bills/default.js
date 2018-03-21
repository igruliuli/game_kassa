
function fPrintCheckBetKeno(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');

				WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:350px; height:400px; position:absolute;" src="/Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:350px; height:400px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:350px; height:200px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){
					addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:350px; height:200px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');


                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.keno.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENO LIVE</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:left;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');

				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:265px;text-align:right;">' + CheckData.aLang[52][CheckData.LangID] + '</div>');
    console.log(CheckData.keno.max);
				for(var fif=0; fif<CheckData.keno.max; fif++)
				{
                    console.log(CheckData.keno.bet[fif]);
					//var gggsuk = CheckData.keno.bet[fif].nm.split(';');
                    var gggsuk = CheckData.keno.bet[fif].nm;
                    console.log(222);
					//gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:left;">' + gggsuk + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:265px;font-weight:bold;text-align:right;">' + parseFloat(CheckData.keno.bet[fif].sm)/100 + '</div>');

					addy+=17;
				}


                addy+=17*5;

			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;
			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " +  parseFloat(CheckData.as)/100  +'</div>');addy+=17;

			 WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 136-(17*7)) + 'px;">'+CheckData.BarCode+'</div>');

			if(CheckData.iLastDatacode[0]==2 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');
			}

				if(CheckData.isinfo==1)
				{
					WinPrint.document.write('<script>var func = function(){$(".butt").hide();}</script>');WinPrint.document.write("<input class='butt' onclick='func();window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:0px;background:rgb(187,15,23);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Закрыть' />");WinPrint.document.write("<input class='butt' onclick='func(); window.print(); window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:85px;background:rgb(16,186,24);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Печать' />");
				}

				WinPrint.document.write('</body></html>');



						WinPrint.document.close();
				WinPrint.focus();
				console.log(CheckData.isinfo);

				if(CheckData.isinfo!=1)
				{
                if (CheckData.IsSilentPrint) {
                    CheckData.jsPrintSetup.print();
                }
                else WinPrint.print();
                WinPrint.close();
				}
            }
            function fPrintCheckKeno(CheckData, upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
   
				WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				var allWin=0;
				var allBet=0;
           		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.keno.bet[0].tir /*+"/"+ CheckData.hallname*/ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENO LIVE</div>');
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">' + CheckData.aLang[134][CheckData.LangID] + '</div>');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">' + upr + '</div>');
				
				var winnum = CheckData.trslt.split(';');
				addy+=17*2;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');
				for(var fif=0; fif<CheckData.keno.max; fif++)
				{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 102) + 'px;width:270px;text-align:center;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');
					var gggsuk = CheckData.keno.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 119) + 'px;width:270px;font-weight:bold;text-align:center;">' + gggsuk + '</div>');					
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
					addy-=17;					
					
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 153) + 'px;width:270px;text-align:center;">' + CheckData.aLang[133][CheckData.LangID] + ' ' + (sortnums == ""? "0" : sortnums.length) + ' ' + CheckData.aLang[135][CheckData.LangID] + '</div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 170) + 'px;width:270px;font-weight:bold;text-align:center;">' + (sortnums == "" ? CheckData.aLang[136][CheckData.LangID]  : sortnums.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; })) + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.keno.bet[fif].sm)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:100px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>x' + parseFloat(CheckData.keno.bet[fif].cf)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:180px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.keno.bet[fif].wn)/100 + ' </font></div>');
					allBet+=parseInt(CheckData.keno.bet[fif].sm);
					allWin+=parseInt(CheckData.keno.bet[fif].wn);
					addy+=17*8;
				}		
addy+=17*5;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;	
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " + parseFloat(allBet)/100+'</div>');addy+=17;				
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[123][CheckData.LangID] + " " + parseFloat(allWin)/100 +'</div>');	
			
				 WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 221-(17*11)) + 'px;">'+CheckData.BarCode+'</div>');
           
if(CheckData.iLastDatacode[0]==2 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
         	if(CheckData.isinfo==1)
				{				
				WinPrint.document.write('<script>var func = function(){$(".butt").hide();}</script>');WinPrint.document.write("<input class='butt' onclick='func();window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:0px;background:rgb(187,15,23);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Закрыть' />");WinPrint.document.write("<input class='butt' onclick='func(); window.print(); window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:85px;background:rgb(16,186,24);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Печать' />");	}
				
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
			
function fPrintCheckBetKenoEm(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');
      
				WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

               
                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenoem.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENOBET</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:left;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:265px;text-align:right;">' + CheckData.aLang[52][CheckData.LangID] + '</div>');
				
				for(var fif=0; fif<CheckData.kenoem.max; fif++)
				{
					var gggsuk = CheckData.kenoem.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:left;">' + gggsuk + '</div>');
					
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:265px;font-weight:bold;text-align:right;">' + parseFloat(CheckData.kenoem.bet[fif].sm)/100 + '</div>');
					
					addy+=17;
				}
                
           
                addy+=17*5;
           
			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;	
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " +  parseFloat(CheckData.as)/100  +'</div>');addy+=17;		
WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 136-(17*7)) + 'px;">'+CheckData.BarCode+'</div>');
           
			if(CheckData.iLastDatacode[0]==5 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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
			function fPrintCheckKenoEm(CheckData, upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
           
                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				var allWin=0;
				var allBet=0;
           		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenoem.bet[0].tir /*+"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENOBET</div>');
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">' + CheckData.aLang[134][CheckData.LangID] + '</div>');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">' + upr + '</div>');
				
				var winnum = CheckData.trslt.split(';');
				addy+=17*2;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');
				for(var fif=0; fif<CheckData.kenoem.max; fif++)
				{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 102) + 'px;width:270px;text-align:center;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');
					var gggsuk = CheckData.kenoem.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 119) + 'px;width:270px;font-weight:bold;text-align:center;">' + gggsuk + '</div>');					
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
					addy-=17;					
					
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 153) + 'px;width:270px;text-align:center;">' + CheckData.aLang[133][CheckData.LangID] + ' ' + (sortnums == ""? "0" : sortnums.length) + ' ' + CheckData.aLang[135][CheckData.LangID] + '</div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 170) + 'px;width:270px;font-weight:bold;text-align:center;">' + (sortnums == "" ? CheckData.aLang[136][CheckData.LangID]  : sortnums.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; })) + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenoem.bet[fif].sm)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:100px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>x' + parseFloat(CheckData.kenoem.bet[fif].cf)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:180px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenoem.bet[fif].wn)/100 + ' </font></div>');
					allBet+=parseInt(CheckData.kenoem.bet[fif].sm);
					allWin+=parseInt(CheckData.kenoem.bet[fif].wn);
					addy+=17*8;
				}		
addy+=17*5;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;	
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " + parseFloat(allBet)/100 +'</div>');addy+=17;				
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[123][CheckData.LangID] + " " + parseFloat(allWin)/100 +'</div>');	
			
 WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 221-(17*11)) + 'px;">'+CheckData.BarCode+'</div>');
           				
         
if(CheckData.iLastDatacode[0]==2 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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
			//------
           
function fPrintCheckBetKenoGOLD(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
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
                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
   		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenog.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENO GOLD</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:left;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:265px;text-align:right;">' + CheckData.aLang[52][CheckData.LangID] + '</div>');
				
				for(var fif=0; fif<CheckData.kenog.max; fif++)
				{
					var gggsuk = CheckData.kenog.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:left;">' + gggsuk + '</div>');
					
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:265px;font-weight:bold;text-align:right;">' + parseFloat(CheckData.kenog.bet[fif].sm)/100 + '</div>');
					
					addy+=17;
				}
                addy+=17*5;
           
			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;	
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " +  parseFloat(CheckData.as)/100  +'</div>');addy+=17;		
                
				WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' +  (addy + 136-(17*7)) + 'px;">'+CheckData.BarCode+'</div>');
								if(CheckData.iLastDatacode[0]==4 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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

            function fPrintCheckKenoGOLD(CheckData, upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				var allWin=0;
				var allBet=0;
       		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenog.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENO GOLD</div>');
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">' + CheckData.aLang[134][CheckData.LangID] + '</div>');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">' + upr + '</div>');
				
				var winnum = CheckData.trslt.split(';');
				addy+=17*2;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');
				for(var fif=0; fif<CheckData.kenog.max; fif++)
				{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 102) + 'px;width:270px;text-align:center;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');
					var gggsuk = CheckData.kenog.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 119) + 'px;width:270px;font-weight:bold;text-align:center;">' + gggsuk + '</div>');					
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
					addy-=17;					
					
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 153) + 'px;width:270px;text-align:center;">' + CheckData.aLang[133][CheckData.LangID] + ' ' + (sortnums == ""? "0" : sortnums.length) + ' ' + CheckData.aLang[135][CheckData.LangID] + '</div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 170) + 'px;width:270px;font-weight:bold;text-align:center;">' + (sortnums == "" ? CheckData.aLang[136][CheckData.LangID]  : sortnums.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; })) + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenog.bet[fif].sm)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:100px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>x' + parseFloat(CheckData.kenog.bet[fif].cf)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:180px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenog.bet[fif].wn)/100 + ' </font></div>');
					allBet+=parseInt(CheckData.kenog.bet[fif].sm);
					allWin+=parseInt(CheckData.kenog.bet[fif].wn);
					addy+=17*8;
				}		
addy+=17*5;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;	
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " + parseFloat(allBet)/100 +'</div>');addy+=17;				
				
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[123][CheckData.LangID] + " " + parseFloat(allWin)/100 +'</div>');	
			WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 221-(17*11))+ 'px;">'+CheckData.BarCode+'</div>');
				
         
if(CheckData.iLastDatacode[0]==4 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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
            function fPrintCheckBetFortune(CheckData) {
				try{
                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
        		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
			if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');


                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.rul.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">FORTUNE-LIVE</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">'+CheckData.aLang[80][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rul.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 68) + 'px;width:160px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write((parseFloat(CheckData.rul.bet[xoI].sm)/100) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:220px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(" x " + (parseInt(CheckData.rul.bet[xoI].cf)/100) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 70 + 19 * CheckData.rul.max) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[122][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.as)/100 + '</div>');

				WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:36px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
				if(CheckData.iLastDatacode[0]==1 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 70 + 19 * CheckData.rul.max) + 120) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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
				catch(exc)
				{
					alert(exc);
				}
            }

            function fPrintCheckFortune(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');
              
                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
    		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');
				
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.rul.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">FORTUNE-LIVE</div>');
				var splt = CheckData.trslt.split(' ');				
				if(splt[1] == "Черное"){splt[0]+=' '+CheckData.aLang[154][CheckData.LangID];}else{ if(splt[1] == "Красное"){splt[0]+=' '+CheckData.aLang[155][CheckData.LangID];}}
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">'+CheckData.aLang[153][CheckData.LangID]+': ' + splt[0] + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:100px;white-space:nowrap;">'+CheckData.aLang[80][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.rul.bet[xoI].nm + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:115px;top:' + (addy + 85) + 'px;width:100px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write((parseFloat(CheckData.rul.bet[xoI].sm)/100) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:168px;top:' + (addy + 85) + 'px;width:100px;text-align:left;">'+CheckData.aLang[53][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(" x " + (parseFloat(CheckData.rul.bet[xoI].cf)/100) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:216px;top:' + (addy + 85) + 'px;width:100px;text-align:left;">'+CheckData.aLang[54][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(" = " + (parseFloat(CheckData.rul.bet[xoI].wn)/100) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 87 + 19 * CheckData.rul.max) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[123][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.aw)/100 + '</div>');
				WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:36px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
         	if(CheckData.isinfo==1)
				{
			WinPrint.document.write('<script>var func = function(){$(".butt").hide();}</script>');WinPrint.document.write("<input class='butt' onclick='func();window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:0px;background:rgb(187,15,23);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Закрыть' />");WinPrint.document.write("<input class='butt' onclick='func(); window.print(); window.close();'  style='position:fixed; top: auto; bottom:0%; left: auto; height: 55px; width: 85px; right:85px;background:rgb(16,186,24);color:white;margin-bottom:10px;margin-right:10px;' type='button' value='Печать' />");
				}
				
				WinPrint.document.write('</body></html>');

				
				
						WinPrint.document.close();
				WinPrint.focus();
				
				if(CheckData.isinfo!=1) {
					if (CheckData.IsSilentPrint) {
						//CheckData.jsPrintSetup.print();
						console.log('silent');
					}
					else {
						//WinPrint.print();
					}
					WinPrint.close();
				}
            }


			function fPrintCheckBetEM(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
        		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.rulem.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">FORTUNE BET</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">'+CheckData.aLang[80][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rulem.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 68) + 'px;width:160px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rulem.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:220px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(" x " + parseInt(CheckData.rulem.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 70 + 19 * CheckData.rulem.max) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[122][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.as)/100 + '</div>');
				WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:36px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
				if(CheckData.iLastDatacode[0]==6 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 70 + 19 * CheckData.rul.max) + 120) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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

            function fPrintCheckEM(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
    		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.rulem.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">FORTUNE BET</div>');
				var splt = CheckData.trslt.split(' ');
				if(splt[1] == "Черное"){splt[0]+=' '+CheckData.aLang[154][CheckData.LangID];}else{ if(splt[1] == "Красное"){splt[0]+=' '+CheckData.aLang[155][CheckData.LangID];}}
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">'+CheckData.aLang[153][CheckData.LangID]+': ' + splt[0] + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:100px;white-space:nowrap;">'+CheckData.aLang[80][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rulem.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:115px;top:' + (addy + 85) + 'px;width:100px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rulem.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:168px;top:' + (addy + 85) + 'px;width:100px;text-align:left;">'+CheckData.aLang[53][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(" x " + parseInt(CheckData.rulem.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:216px;top:' + (addy + 85) + 'px;width:100px;text-align:left;">'+CheckData.aLang[54][CheckData.LangID]+'<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(" = " + parseFloat(CheckData.rulem.bet[xoI].wn)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 87 + 19 * CheckData.rulem.max) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[123][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.aw)/100 + '</div>');
               WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:36px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
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

            function fPrintCheckBetPoker(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
         		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + (CheckData.poker1.max != 0 ? CheckData.poker1.bet[0].tir + " " : "") + (CheckData.poker2.max != 0 ? CheckData.poker2.bet[0].tir + " " : "") + (CheckData.poker3.max != 0 ? CheckData.poker3.bet[0].tir : "") /* +"/"+ CheckData.hallname */ +  '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">POKER( ' + (CheckData.poker1.max != 0 ? "1# " + " " : "") + (CheckData.poker2.max != 0 ? "2# " : "") + (CheckData.poker3.max != 0 ? "3#" : "") + ')</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

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

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:110px;top:' + (addy + 68) + 'px;width:160px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.poker1.bet[xoI].sm)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.poker2.bet[xoI].sm)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.poker3.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:200px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.poker1.bet[xoI].cf)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.poker2.bet[xoI].cf)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.poker3.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 70 + 19 * (parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + parseInt(CheckData.poker3.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[156][CheckData.LangID] + ':</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.as)/100 + '</div>');
				WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
	if(CheckData.iLastDatacode[0]==3 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 70 + 19 * (parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + parseInt(CheckData.poker3.max))) + 110) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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

            function fPrintCheckPoker(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
    		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + (CheckData.poker1.max != 0 ? CheckData.poker1.bet[0].tir + " " : "") + (CheckData.poker2.max != 0 ? CheckData.poker2.bet[0].tir + " " : "") + (CheckData.poker3.max != 0 ? CheckData.poker3.bet[0].tir : "") /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">POKER( ' + (CheckData.poker1.max != 0 ? "1# " + " " : "") + (CheckData.poker2.max != 0 ? "2# " : "") + (CheckData.poker3.max != 0 ? "3#" : "") + ')</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

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

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:90px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.poker1.bet[xoI].sm)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.poker2.bet[xoI].sm)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.poker3.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:145px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.poker1.bet[xoI].cf)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.poker2.bet[xoI].cf)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.poker3.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:200px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.poker1.max; xoI++) {
                    WinPrint.document.write(" = " + parseFloat(CheckData.poker1.bet[xoI].wn)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker2.max; xoI++) {
                    WinPrint.document.write(" = " + parseFloat(CheckData.poker2.bet[xoI].wn)/100 + '<br/>');
                }
                for (var xoI = 0; xoI < CheckData.poker3.max; xoI++) {
                    WinPrint.document.write(" = " + parseFloat(CheckData.poker3.bet[xoI].wn)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 70 + 19 * (parseInt(CheckData.poker1.max) + parseInt(CheckData.poker2.max) + parseInt(CheckData.poker3.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[123][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.aw)/100 + '</div>');
           WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
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


            function fPrintCheckBetFortuneLiveFast(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
         		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' +  CheckData.rulem2.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">FORTUNE-FAST</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem2.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rulem2.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 68) + 'px;width:160px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem2.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rulem2.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:210px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem2.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.rulem2.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 80 + 19 * (parseInt(CheckData.rulem2.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[156][CheckData.LangID] + ':</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.as)/100 + '</div>');
				WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
	if(CheckData.iLastDatacode[0]==3 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 70 + 19 * (parseInt(CheckData.poker1.max) )) + 110) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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




            function fPrintCheckFortuneLiveFast(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
    		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + CheckData.rulem2.bet[0].tir /* + "/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">FORTUNE-FAST</div>');
var splt = CheckData.trslt.split(' ');
				if(splt[1] == "Черное"){splt[0]+=' '+CheckData.aLang[154][CheckData.LangID];}else{ if(splt[1] == "Красное"){splt[0]+=' '+CheckData.aLang[155][CheckData.LangID];}}
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">'+CheckData.aLang[153][CheckData.LangID]+': ' + splt[0] + '</div>');addy+=17;
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem2.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rulem2.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:115px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem2.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rulem2.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:167px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem2.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.rulem2.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:210px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem2.max; xoI++) {
                    WinPrint.document.write(" = " + parseFloat(CheckData.rulem2.bet[xoI].wn)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 80 + 19 * (parseInt(CheckData.rulem2.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[123][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.aw)/100 + '</div>');
           WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
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







            function fPrintCheckBetFortuneLive(CheckData) {



                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
         		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' +  CheckData.rul.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">FORTUNE-LIVE</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    console.log(CheckData.rul.bet[0].tir);
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rul.bet[xoI].nm) + '<br/>');

                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 68) + 'px;width:160px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rul.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:210px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.rul.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 80 + 19 * (parseInt(CheckData.rul.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[156][CheckData.LangID] + ':</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.as)/100 + ' ' + CheckData.currency + '</div>');
								WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
	              if(CheckData.iLastDatacode[0]==3 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 70 + 19 * (parseInt(CheckData.poker1.max) )) + 110) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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
					else
					{
						WinPrint.print();
					}
					WinPrint.close();
				}


            }


            function fPrintCheckFortuneLive(CheckData) {



                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
    		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){
					addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + CheckData.rul.bet[0].tir /*+ "/"+ CheckData.hallname */ + '</div>');

                console.log(CheckData.rul.bet[0].tir);
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">FORTUNE-LIVE</div>');
				var splt = CheckData.trslt.split(' ');
				if(splt[1] == "Черное"){splt[0]+=' '+CheckData.aLang[154][CheckData.LangID];}else{ if(splt[1] == "Красное"){splt[0]+=' '+CheckData.aLang[155][CheckData.LangID];}}
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">'+CheckData.aLang[153][CheckData.LangID]+': ' + splt[0] + '</div>');addy+=17;
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rul.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:115px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rul.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:167px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.rul.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:210px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rul.max; xoI++) {
                    WinPrint.document.write(" = " + parseFloat(CheckData.rul.bet[xoI].wn)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 80 + 19 * (parseInt(CheckData.rul.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[123][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:160px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.aw)/100 + " " + CheckData.currency + '</div>');
           			WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');
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
                else {
                    WinPrint.print();
                }
                //WinPrint.close();
				}
            }

	function fPrintCheckBetFortuneBET(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
         		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' +  CheckData.rulem.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">FORTUNE BET</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rulem.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 68) + 'px;width:160px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rulem.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:210px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.rulem.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 80 + 19 * (parseInt(CheckData.rulem.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[156][CheckData.LangID] + ':</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.as)/100 + '</div>');
				WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');

                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');

	if(CheckData.iLastDatacode[0]==3 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + ((addy + 70 + 19 * (parseInt(CheckData.poker1.max) )) + 110) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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

            function fPrintCheckFortuneBET(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
    		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">' + CheckData.rulem.bet[0].tir /* + "/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold; white-space:nowrap;">FORTUNE BET</div>');
				var splt = CheckData.trslt.split(' ');
				if(splt[1] == "Черное"){splt[0]+=' '+CheckData.aLang[154][CheckData.LangID];}else{ if(splt[1] == "Красное"){splt[0]+=' '+CheckData.aLang[155][CheckData.LangID];}}
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">'+CheckData.aLang[153][CheckData.LangID]+': ' + splt[0] + '</div>');addy+=17;
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:100px;white-space:nowrap;">' + CheckData.aLang[80][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write((xoI + 1) + ") " + CheckData.fSetRulName(CheckData.rulem.bet[xoI].nm) + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:115px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(parseFloat(CheckData.rulem.bet[xoI].sm)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:167px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(" x " + parseFloat(CheckData.rulem.bet[xoI].cf)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:210px;top:' + (addy + 68) + 'px;width:100px;text-align:left;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>');

                for (var xoI = 0; xoI < CheckData.rulem.max; xoI++) {
                    WinPrint.document.write(" = " + parseFloat(CheckData.rulem.bet[xoI].wn)/100 + '<br/>');
                }
                WinPrint.document.write('</font></div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 80 + 19 * (parseInt(CheckData.rulem.max))) + 'px;width:300px;">________________________________<br/>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:17px;width:140px;">' + CheckData.aLang[123][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:120px;top:17px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + parseFloat(CheckData.aw)/100 + '</div>');
           WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:48px;">'+CheckData.BarCode+'</div>');
		   WinPrint.document.write('<div style="border:0px solid black;position:absolute;height:50px;width:300px;color:white;">________________________________</div>');
                WinPrint.document.write('</div>');
                WinPrint.document.write('</div>');

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


function fPrintCheckBetKenoFAST(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

				WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px; height:100px; position:absolute;" src="/Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');


                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenoem2.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENO FAST</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:left;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');

				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:265px;text-align:right;">' + CheckData.aLang[52][CheckData.LangID] + '</div>');

				for(var fif=0; fif<CheckData.kenoem2.max; fif++)
				{
					var gggsuk = CheckData.kenoem2.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:left;">' + gggsuk + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:265px;font-weight:bold;text-align:right;">' + parseFloat(CheckData.kenoem2.bet[fif].sm)/100 + '</div>');

					addy+=17;
				}


                addy+=17*5;

			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " +  parseFloat(CheckData.as)/100  +'</div>');addy+=17;

				 WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 136-(17*7)) + 'px;">'+CheckData.BarCode+'</div>');

								if(CheckData.iLastDatacode[0]==7 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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
            function fPrintCheckKenoFAST(CheckData, upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				var allWin=0;
				var allBet=0;
           		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenoem2.bet[0].tir+"/"+ CheckData.hallname + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">KENO FAST</div>');

				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">' + CheckData.aLang[134][CheckData.LangID] + '</div>');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">' + upr + '</div>');

				var winnum = CheckData.trslt.split(';');
				addy+=17*2;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');
				for(var fif=0; fif<CheckData.kenoem2.max; fif++)
				{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 102) + 'px;width:270px;text-align:center;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');
					var gggsuk = CheckData.kenoem2.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 119) + 'px;width:270px;font-weight:bold;text-align:center;">' + gggsuk + '</div>');
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
					addy-=17;

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 153) + 'px;width:270px;text-align:center;">' + CheckData.aLang[133][CheckData.LangID] + ' ' + (sortnums == ""? "0" : sortnums.length) + ' ' + CheckData.aLang[135][CheckData.LangID] + '</div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 170) + 'px;width:270px;font-weight:bold;text-align:center;">' + (sortnums == "" ? CheckData.aLang[136][CheckData.LangID]  : sortnums.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; })) + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenoem2.bet[fif].sm)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:100px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>x' + parseFloat(CheckData.kenoem2.bet[fif].cf)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:180px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenoem2.bet[fif].wn-CheckData.kenoem2.bet[fif].jp)/100 + ' </font></div>');
					allBet+=parseInt(CheckData.kenoem2.bet[fif].sm);
					allWin+=parseInt(CheckData.kenoem2.bet[fif].wn);

					if(parseFloat(CheckData.kenoem2.bet[fif].jp)>0)
					{
						WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy + 187+20) + 'px;width:270px;text-align:left;"><br/><font font-weight:bold;>Jackpot: ' + parseFloat(CheckData.kenoem2.bet[fif].jp)/100 + ' </font></div>');
						addy+=17;
					}
					addy+=17*8;
				}
				addy+=17*5;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " + parseFloat(allBet)/100+'</div>');addy+=17;

				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[123][CheckData.LangID] + " " + parseFloat(allWin)/100 +'</div>');

				 WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 221-(17*11)) + 'px;">'+CheckData.BarCode+'</div>');

if(CheckData.iLastDatacode[0]==9 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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



function fPrintCheckBetKenoX(CheckData) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');
                WinPrint.document.write('<html><head>');

				WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px; height:100px; position:absolute;" src="/Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');


                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenoem3.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">JX KENO</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:left;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');

				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:265px;text-align:right;">' + CheckData.aLang[52][CheckData.LangID] + '</div>');

				for(var fif=0; fif<CheckData.kenoem3.max; fif++)
				{
					var gggsuk = CheckData.kenoem3.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:left;">' + gggsuk + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:265px;font-weight:bold;text-align:right;">' + parseFloat(CheckData.kenoem3.bet[fif].sm)/100 + '</div>');

					addy+=17;
				}


                addy+=17*5;

			WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " +  parseFloat(CheckData.as)/100  +'</div>');addy+=17;

				 WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 136-(17*7)) + 'px;">'+CheckData.BarCode+'</div>');

								if(CheckData.iLastDatacode[0]==19 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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
            function fPrintCheckKenoX(CheckData, upr) {

                var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=550,toolbar=0,scrollbars=1,status=0,resizable=1');

                WinPrint.document.write('    <html><script src="/js/jquery.min.js"></script><head></head><body style="font-weight:bold;">');
				var allWin=0;
				var allBet=0;
           		 var addy = 0;
				if(CheckData.t_bill==5){
					addy+=50;
					WinPrint.document.write('<img style="left:0px; width:285px;height:100px; position:absolute;" src="Styles/Inbet.kz_.bmp"/>');
				}
				if(CheckData.t_bill==4){
					addy+=30;
					WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="Styles/logo_eurofootball.jpg"/>');
				}
				if(CheckData.t_bill==9){
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:55px; position:absolute;" src="bills/totogaming.jpg"/>');
				}
				if(CheckData.t_bill==12){addy-=10;
					addy+=30;
						WinPrint.document.write('<img style="left:15px; width:270px; height:37px; position:absolute;" src="bills/cw.png"/>');
				}
                WinPrint.document.write('<div class="contentpane" style="left:0px;top:'+(addy+10)+'px;position:absolute;font-family:Helvetica;font-weight:bold;font-size:15px;"> ');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+0)+'px;width:100px;">' + CheckData.aLang[130][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+0)+'px;width:140px;text-align:center;px;font-weight:bold;white-space:nowrap;">' + CheckData.code + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:'+(addy+17)+'px;width:100px;">' + CheckData.aLang[57][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:'+(addy+17)+'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.da + '</div>');

                if (CheckData.bIsBetForCadr) {
                    addy = 17;
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 17) + 'px;width:100px;">' + CheckData.aLang[37][CheckData.LangID] + '</div>');
                    WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 17) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.ClientBalanceText + '</div>');
                }

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 34) + 'px;width:100px;">' + CheckData.aLang[132][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 34) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">' + CheckData.kenoem3.bet[0].tir /* +"/"+ CheckData.hallname */ + '</div>');

                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 51) + 'px;width:100px;text-align:left;">' + CheckData.aLang[131][CheckData.LangID] + '</div>');
                WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:140px;top:' + (addy + 51) + 'px;width:140px;text-align:center;font-weight:bold;white-space:nowrap;">JX KENO</div>');

				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 68) + 'px;width:270px;text-align:center;">' + CheckData.aLang[134][CheckData.LangID] + '</div>');
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">' + upr + '</div>');

				var winnum = CheckData.trslt.split(';');
				addy+=17*2;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 85) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');
				for(var fif=0; fif<CheckData.kenoem3.max; fif++)
				{
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 102) + 'px;width:270px;text-align:center;">' + CheckData.aLang[80][CheckData.LangID] + '</div>');
					var gggsuk = CheckData.kenoem3.bet[fif].nm.split(';');
					gggsuk.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; });
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 119) + 'px;width:270px;font-weight:bold;text-align:center;">' + gggsuk + '</div>');
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
					addy-=17;

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 153) + 'px;width:270px;text-align:center;">' + CheckData.aLang[133][CheckData.LangID] + ' ' + (sortnums == ""? "0" : sortnums.length) + ' ' + CheckData.aLang[135][CheckData.LangID] + '</div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy + 170) + 'px;width:270px;font-weight:bold;text-align:center;">' + (sortnums == "" ? CheckData.aLang[136][CheckData.LangID]  : sortnums.sort(function (i, ii) { if (parseInt(i) > parseInt(ii)) return 1; else if (parseInt(i) < parseInt(ii)) return -1; else return 0; })) + '</div>');

					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:20px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[52][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenoem3.bet[fif].sm)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:100px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[53][CheckData.LangID] + '<br/><font font-weight:bold;>x' + parseFloat(CheckData.kenoem3.bet[fif].cf)/100 + ' </font></div>');
					WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:180px;top:' + (addy + 187) + 'px;width:auto;text-align:center;">' + CheckData.aLang[54][CheckData.LangID] + '<br/><font font-weight:bold;>' + parseFloat(CheckData.kenoem3.bet[fif].wn)/100 + ' </font></div>');
					allBet+=parseInt(CheckData.kenoem3.bet[fif].sm);
					allWin+=parseInt(CheckData.kenoem3.bet[fif].wn);
					addy+=17*8;
				}
addy+=17*5;
				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:center;">________________________________</div>');addy+=17;
WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[122][CheckData.LangID] + " " + parseFloat(allBet)/100+'</div>');addy+=17;

				WinPrint.document.write('<div style="border:0px solid black;position:absolute;left:0px;top:' + (addy) + 'px;width:270px;font-weight:bold;text-align:left;">' + CheckData.aLang[123][CheckData.LangID] + " " + parseFloat(allWin)/100 +'</div>');

				 WinPrint.document.write('<div style="width:290px;position:absolute;left:0px;top:' + (addy + 221-(17*11)) + 'px;">'+CheckData.BarCode+'</div>');

if(CheckData.iLastDatacode[0]==19 && CheckData.iLastDatacode[1] != null && CheckData.iLastDatacode[1].code == CheckData.code){WinPrint.document.write('<div style="border:0px solid black;position:absolute;font-weight:bold; left:90px;width:100px;top:' + (addy + 206-(17*8)) + 'px;">'+CheckData.aLang[151][CheckData.LangID]+'</div>');}
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