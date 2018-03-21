var fPrintCheckBet = function(data,type,game)
{
    isScannerBone[1]=0;
    if(type == "PAY"){
        if(data.faststate==4) type="BUY";
    }
    if(type == "BUY")
    {
        /*if(vUpdateData.hall=="2")
         {data.t_bill=12;
         }	*/
        if(game=="FORINBET" || game=="KENOINBET" || game=="KENOXINBET")
        {
            data.gamename = game;
            fBUYINBET(data);
        }
        else{
            switch(data.t_bill)
            {
                case 11:data.gamename = game;fBUYKZTLOTTO_LANGKZT(data);break;
                case 10:data.gamename = game;fBUYTOTOGAMING(data);break;
                case 8:data.gamename = game;fBUYKZTLOTTO(data);break;
                case 7:data.gamename = game;fBUYRAHSH(data);break;
                case 6:	{ if(game=="FORTUNEFAST")data.gamename="1/37 fast"; if(game=="KENOFAST")data.gamename="10/80 fast"; if(game=="POKERLIVE")data.gamename="poker"; if(game=="KENOLIVE")data.gamename="10/80"; if(game=="KENOGOLD")data.gamename="10/80 gold";if(game=="XKENO")data.gamename="10/80 X"; if(game=="KENOBET")data.gamename="10/80 bet"; if(game=="FORTUNELIVE")data.gamename="loto 1/37";  if(game=="FORTUNEBET")data.gamename="1/37 bet"; fBUYKENORoyalLotto(data);} break;
                default :{



                    switch(game){
                        case 'POKERLIVE': fPrintCheckBetPoker(data); break;
                        case 'KENOLIVE': fPrintCheckBetKeno(data); break;
                        case 'XKENO': fPrintCheckBetKenoX(data); break;
                        case 'KENOGOLD': fPrintCheckBetKenoGOLD(data); break;
                        case 'KENOBET': fPrintCheckBetKenoEm(data); break;
                        case 'KENOFAST':  fPrintCheckBetKenoFAST(data); break;
                        case 'FORTUNELIVE': fPrintCheckBetFortuneLive(data); break;
                        case 'FORTUNEFAST': fPrintCheckBetFortuneLiveFast(data); break;
                        case 'FORTUNEBET': fPrintCheckBetFortuneBET(data); break;
                    }
                }
                    break;
            }
        }



    }
    else
    {
        if($('#betpay').get(0).isChecked&&data.isinfo==0)return;
        /*	if(vUpdateData.hall=="2")
         {data.t_bill=12;
         }*/

        if(game=="FORINBET" || game=="KENOINBET" || game=="KENOXINBET")
        {
            data.gamename = game;
            fPAYINBET(data);
        }
        else
        {
            switch(data.t_bill)
            {
                case 11:data.gamename = game;fPAYKZTLOTTO_LANGKZT(data);break;
                case 10:data.gamename = game;fPAYTOTOGAMING(data);break;
                case 8:data.gamename = game;fPAYKZTLOTTO(data);break;
                case 7:data.gamename = game;fPAYRAHSH(data);break;
                case 6:	if(game=="FORTUNEFAST")data.gamename="1/37 fast";if(game=="XKENO")data.gamename="10/80 X"; if(game=="KENOFAST")data.gamename="10/80 fast"; if(game=="POKERLIVE")data.gamename="poker"; if(game=="KENOLIVE")data.gamename="10/80"; if(game=="KENOGOLD")data.gamename="10/80 gold"; if(game=="KENOBET")data.gamename="10/80 bet";  if(game=="FORTUNELIVE")data.gamename="loto 1/37";  if(game=="FORTUNEBET")data.gamename="1/37 betj";  fPAYKENORoyalLotto(data,data._trrstl); break;
                default:


                    switch(game){
                        case 'POKERLIVE': fPrintCheckPoker(data,data._trrstl); break;
                        case 'KENOLIVE': fPrintCheckKeno(data,data._trrstl); break;
                        case 'KENOGOLD': fPrintCheckKenoGOLD(data,data._trrstl); break;
                        case 'KENOBET': fPrintCheckKenoEm(data,data._trrstl); break;
                        case 'XKENO': fPrintCheckKenoX(data,data._trrstl); break;
                        case 'KENOFAST': fPrintCheckKenoFAST(data,data._trrstl); break;
                        case 'FORTUNELIVE': fPrintCheckFortuneLive(data,data._trrstl); break;
                        case 'FORTUNEFAST': fPrintCheckFortuneLiveFast(data,data._trrstl); break;
                        case 'FORTUNEBET': fPrintCheckBetFortuneBET(data,data._trrstl); break;
                    }

                    break;
            }}
    }
}