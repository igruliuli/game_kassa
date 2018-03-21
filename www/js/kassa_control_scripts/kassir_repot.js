$('#Button5').click(function () {
    if (IsDisableControl == true) return;

    $.ajax({

        type: 'get', //тип запроса: get,post либо head
        url:'srvloto.ashx',

        data: { 'ul': "", 'up': "",'isp':'0', 'key': mykey, 'oper': 'gtst', 'dt1': ($('#Text5').get(0).value), 'dt2': ($('#Text6').get(0).value) }, //параметры запроса

        dataType: 'json', //тип возвращаемого ответа text либо xml
        success: function (data, status, jqXHR) {//возвращаемый результат от сервера
            try {

                /*$('#halllimit').text(fGIC(data.hcrd));*/
/*               $('#srvtime').text((LangID==0?"время сервера ":"  server time")+data.SRVTIME);*/
                $("#cassIn").text(fGIC(data.as));
                $("#cassOut").text(fGIC(data.np));
                $("#cassIn3").text(fGIC(data.tin));
                $("#cassOut3").text(fGIC(data.tout));
                $("#cassInOut").text(fGIC(data.cassirProfit));
                $("#cassInOut3").text(fGIC(data.allProfit));
                /*$("#cassInOut").text(fGIC(data.mc));

                $("#cassIn2").text(fGIC(data.IN));
                $("#cassOut2").text(fGIC(data.OUT));
                $("#cassInOut2").text(fGIC(data.INOUT));


                */
                console.log(data.np);
            }
            catch (exception) {
                $("#cassIn").text("-");
                $("#cassOut2").text("-");
                $("#cassIn2").text("-");
                $("#cassOut3").text("-");
                $("#cassIn3").text("-");
                $("#cassOut3").text("-");
                $("#cassInOut").text("-");
                $("#cassInOut2").text("-");
                $("#cassInOut3").text("-");
                fWriteInfo("Ошибка! " + exception, "red");
            }
        }
        ,
        error: function (data, status, jqXHR) {//возвращаемый результат от сервера
            fWriteInfo("Ошибка! " + status, "red");
        }
    });

    $.ajax({

        type: 'get', //тип запроса: get,post либо head
        url: 'srvloto.ashx',

        data: { 'key': mykey, 'oper': 'gtoh', 'dt1': $('#Text5').get(0).value, 'dt2': $('#Text6').get(0).value }, //параметры запроса

        dataType: 'json', //тип возвращаемого ответа text либо xml
        success: function (data, status, jqXHR) {//возвращаемый результат от сервера
            try {
                vSaveOpersData = data;
                $('#operationlist').children().remove();
                for (var _j = vSaveOpersData.opmax - 1; _j >= 0; _j--) {
                    if (data.oper[_j].ot == 11 || data.oper[_j].ot == 12) {
                        fAddOperationList(data.oper[_j].da, data.oper[_j].ot != 11 ? "Out" : "In", data.oper[_j].ot != 11 ? "-" : fGIC(data.oper[_j].e3), data.oper[_j].ot != 11 ? fGIC(data.oper[_j].e3) : "-", data.nick[data.oper[_j].e1].nm, data.nick[data.oper[_j].e2].nm);
                    }
                }
                while ($('#operationlist').children().length < 21) { fAddOperationList("&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"); }
            }
            catch (exception) {
                if (data.st == "none") {
                    fWriteInfo("За заданный период операций небыло", "blue");
                } else

                    fWriteInfo("Ошибка! " + exception, "red");
            }
        }
        ,
        error: function (data, status, jqXHR) {//возвращаемый результат от сервера
            fWriteInfo("Ошибка! " + status, "red");
        }
    });
});