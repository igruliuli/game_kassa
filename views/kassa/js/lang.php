var LangID = 1;
var aLang =
[
["Логин", "Login","Username"], // 0
["ИД", "ID", "ID"], // 1
["Состояние", "State", "Etat"], // 2
["Активность", "Active","Activité"], // 3
["Игра", "Game","The Game"], // 4
["Баланс", "Balance","Balance"], // 5
["Карта", "Card:","Carte:"], // 6
["Зал:", "Hall:","Hall:"], // 7
["ИД Игрока:", "Client ID:","ID du Joueur:"], // 8
["Логин Игрока:", "Client login:","Joueur Nom:"], // 9
["Номер", "Number:","Non"], // 10
["Статус", "State:","Status"], // 11
["Имя", "Name:","Name"], // 12
["Владелец", "Holder:","Titulaire"], // 13
["На счету", "Balance:","La banque"], // 14
["Имя", "Name","Name"], // 15
["Фамилия", "Sec. name","Nom"], // 16
["Отчество", "Par. name","Moyen"], // 17
["Телефон", "Phone","Téléphone"], // 18
["Почта", "EMail","Mail"], // 19
["Ид Игрока:", "Client ID","Id joueur:"], // 20
["Логин Игрока:", "Client login","Joueur Nom d'utilisateur:"], // 21
["Номер:", "Number:","ID:"], // 22
["Статус:", "Status:","Status:"], // 23
["На счету:", "Balance:","Dans la banque:"], // 24
["Дата регистрации:", "Registration date:","Date d'enregistrement:"], // 25
["Введите логин Игрока", "Enter client login","Entrez le joueur de connexion"], // 26
["Ид Игрока:", "Client ID","Id joueur:"], // 27
["Логин Игрока:", "Client login","Joueur Nom d'utilisateur:"], // 28
["Номер:", "Number:","ID:"], // 29
["Статус:", "Status:","Status:"], // 30
["На счету:", "Balance:","Dans la banque:"], // 31
["Дата регистрации:", "Registration date:","Date d'enregistrement:"], // 32
["Введите логин Игрока", "Enter client login","Entrez le joueur de connexion"], // 33

["Номер чека:", "Check:","Vérifier le numéro:"], // 34
["Кассир:", "Cashier:","Caissier:"], // 35
["IN-OUT BET:", "IN-OUT BET:","IN-OUT BET:"], //  36
["Клиент:", "Client:","Client:"], // 37
["Карта:", "Card:","Carte:"], // 38
["Дата ставки:", "Date bet:","Taux de Date:"], // 39
["Непринятых ставок:", "Fail bets:","Les taux d'échec:"], // 40
["Результат тиража:", "Draw result:","Circulation Résultat:"], // 41
["Количество ставок:", "All bets:","Nombre d'enchères:"], //  42
["Выигрышные ставки:", "Win bets:","Les paris gagnants:"], // 43
["Оборот кассира:", "IN BET:","caissier général:"], // 44
["OUT BET:", "OUT BET:","BET OUT:"], // 45
["Состояние:", "State:","Status:"], // 46
["Дата ставки", "Date bet","Date bet"], // 47
["Состояние", "State","État"], // 48
["Раунд", "Draw","Round"], // 49
["Игра", "Game","The Game"], // 50
["Название ставки", "Bet name","Taux de Nom"], // 51
["Сумма", "Sum","Montant"], // 52
["Коэф", "Coef","Odds"], // 53
["Выигрыш", "Win","Win"], // 54
["С", "Fr","Fr"], // 55
["По", "To","To"], // 56

["Дата и время", "Date and time","Date et heure"], // 57
["Кассир", "Initiator","La Caisse"], // 58
["Игрок", "Recipient","Player"], // 59
["За период", "Over a period","Sur une période"], // 60
["С", "Fr", "Fr"], // 61
["По", "To", "To"], // 62
["выручка кассы", "Cash profit","Le produit en espèces"], // 63

["Монитор", "Monitor","Affichage"], // 64
["Новый Игрок", "New client","New Player"], // 65
["Пополнить счет", "Up balance","Dépôt"], // 66
["Выплатить со счета", "Pay to balance","Pour payer à partir du compte"], // 67
["Ставки кассира", "Bets","Enchères caissier"], // 68
["Отчет кассира", "Operations","Rapport caissier"], // 69
["История тиражей", "Game history","Histoire de la circulation"], // 70
["Сообщения", "Messages","Messages"], // 71

["Комбинация", "Combination","Combinaison"], // 72
["удалить", "delete","Supprimer"], // 73
["печать", "print","Imprimer"], // 74
["KenoLive", "KenoLive","KenoLive"], // 75
["Fortune Video", "Fortune Video","Fortune Video"], // 76
["Poker", "Poker","Poker"], // 77
["Управление", "Settings","Gestion"], // 78
["Выход", "Logout","Exit"], // 79
["Ставка", "Bet","Bet"], // 80
["Сумма", "Sum","Montant"], // 81
["Коэфициент", "Coeficient","Coefficient"], // 82
["Пробная печать", "Test print","Test d'impression"], // 83
["Обновить", "Refresh","Recharger"], // 84
["Пополнить", "Replenish","Ajouter"], // 85
["Выплатить", "Payments","Pour payer"], // 86
["Сброс", "Reset","Reset"], // 87
["Зарегистрировать", "Register","Register"], // 88
["распечатать", "printing","Imprimer"], // 89
["экспорт", "export","Export"], // 90
["очистить", "clear","Clean"], // 91
["Отправить", "Send","Envoyer"], // 92
["Очистить", "Clear","Effacer"], // 93
["Выберите количество шаров<br/>в комбинации случайным образом", "Select the number of balls in combination randomly","Sélectionnez le nombre de balles en combinaison <br/> aléatoire"], // 94
["1ряд", "1row","1rangée"], // 95
["2ряд", "2row","2rangée"], // 96
["3ряд", "3row","3rangée"], // 97
["1 часть", "1st 12","1partie"], // 98
["2 часть", "2nd 12","2partie"], // 99
["3 часть", "3rd 12","3partie"], // 100
["чет", "even","pair"], // 101
["нечет", "odd","impair"], // 102
["красный", "red","rouge"], // 103
["черный", "black","noir"], // 104

["буби", "diam", "diam"], // 105
["крести", "clubs", "clubs"], // 106
["черви", "heart", "heart"], // 107
["пики", "spades", "spades"], // 108

["СФ", "SF", "SF"], // 109
["Ка", "Sq", "Sq"], // 110
["ФХ", "FH", "FH"], // 111
["Фл", "Fl", "Fl"], // 112
["Ст", "St", "St"], // 113
["Тр", "Tr", "Tr"], // 114
["Дп", "Tp", "Tp"], // 115
["Па", "Pa", "Pa"], // 116
["Ск", "Hc", "Hc"], // 117
["Ставка на раунд", "Draw","Pari round"], // 118
["Ставки кассира", "Cashier bet","Offres caissier"],  // 119
["Ставки клиента", "Client bet","Les offres des clients"], // 120
["История ставок", "Bets history","Histoire des offres"], // 121
["Общая сумма:", "All sum:","La somme totale de:"], // 122
["Общий выигрыш:", "All win:","Gains:"], //123
["Купон", "Coupon","Coupon"], // 124
["Удостоверение клиента", "Client Identity","Certificat client"], // 125
["Ваш ID:", "Your ID:","Votre ID:"], // 126
["Логин:", "Login:","Nom:"], // 127
["Регистрация:", "Registration:","Inscription:"], // 128
["Пароль:", "Password:","Passe:"], // 129
["Ставка №", "Contract №","Contrat №"], // 130
["Событие", "Condition","Conditions"], // 131
["Тираж №", "Event №","№ Event"], // 132
["Совпало", "Coincided","Coïncidaient"], // 133
["Выпавшие номера", "The winning numbers","Le nombre gagnant"], // 134
["номеров", "numbers","Numbers"], // 135
["совпадений нет", "no matches","Aucune correspondance"], // 136
["KenoGold","KenoGold","KenoGold"], // 137
["добавить","add bet","Ajouter"], // 138
["Обновить","Refresh","Recharger"], // 139
["Номер<br/>зала","Hall<br/>number","numéro<br/>Hall"], // 140
["Кассир", "Cashier","La Caisse"], // 141
["Очистить", "Сlear","Clear"], // 142
["Баланс кассы","Cash balance","Le solde de trésorerie"], // 143
["Разделять сумму на все ставки","Share the sum of all rates","Partager la somme de toutes les offres"], // 144
["Баланс клиента пополнен","Balance customer refilled","Balance client rechargée"], // 145
["С баланса клиента выплачено","From the customer's balance is paid","Du solde du client est payé"], // 146
["на сумму","to the amount of","Dans le montant de"], // 147
["Текущий баланс","Current balance","Balance courante"], // 148
["Готов","Ready","Ready"], // 149
["Свободен","Free","Liberté"], // 150
["Дубликат","Duplicate","Dupliquer"], // 151
["Внимание! Вы распечатываете ДУБЛИКАТ ЧЕКА","Warning! You print DUPLICATE RECEIPT","Attention: Vous imprimez DUPLICATE RÉCEPTION"], // 152
["Выпавший номер","The winning number","Le nombre gagnant"], // 153
["Черное", "Black","Noir"], // 154
["Красное", "Red","Rouge"], // 155
["Общая ставка","The total bet","Le pari total"], // 156
["Не окончен","Not finished","Non terminé"], // 157
["За период c ","From ","Dans la période "], // 158
["Операции с балансом игроков","Operation with the balance of players","Les transactions avec le solde des joueurs"], // 159
["Сумма ставок и операций","Sum rates and operations","Tarifs et opérations Montant"], // 160
[" по "," to "," à "], // 161
["Ставки приняты","Bids received","Les enjeux sont prises"], // 162
["Начальная сумма: ","The initial amount: ", "Le montant initial:"], // 163
["Поставленная сумма: ","The amount wagered: ","Le montant indiqué:"], // 164
["Сдача: ","Surrender: ","Livraison:"], // 165
['Чек не распечатан!','The check is not printed!',"Le chèque est pas imprimé!"], //  166
['Ошибка!','Error!','«Erreur!'], // 167
['Ставка не принята.','The rate is not accepted.','Bet ne sont pas acceptées.'], // 168
['У клиента нет денег.','The client has no money.',"Le client n'a pas d'argent."], // 169
['Минимальная сумма ставки ','The minimum stake ','Le montant minimum de soumission '], // 170
['Максимальная сумма ставки ','The maximum amount of the bet ','Le montant maximal de paris'], // 171
['Недостаточно баланса кассы для ставки!','It is not enough to balance cash rate!','Le solde de trésorerie est insuffisante pour parier!'], // 172
['Есть непринятые ставки','You have missed rate','Vous avez raté le taux'], // 173
['Ставки не приняты','Bids are not accepted','Bet a été prise '], // 174
['Введите сумму ставки.','Enter the amount of rates','Entrez le montant du pari.'], // 175
['Клиент зарегистрирован','The client is registered','Le client est enregistré'], // 176
["Клиент не найден!","Client not found!",'Le client ne peut pas être trouvé!'], // 177
["",""], // 178
["Введите пароль клиента","Enter the password of the client","Entrez le mot de passe du client"], // 179
["Неверный пароль","Invalid password","Mot de passe incorrect"], // 180
['Сначала сделайте ставку','First, place a bet','Abord faire un pari '], // 181
['Приём ставок окончен','Admission rates is over',"Taux d'acceptation est terminée"], // 182
['Авто выплата','autopay','Paiement automatique'], // 183
['чек уже выплачен','check has already been paid','Vérifier déjà payé '], // 184
['Безлимитный','Unlimit','Unlimited'], // 185
['Ставка в обработке, выполнится попытка её выплатить 1:1 (возврат/отмена)','The rate in the processing, it will attempt to pay a 1 : 1 (back / cancel)','Rate dans le traitement, il va tenter de payer un 1: 1 (retour / annulation)'], // 186
['Отмена ставки','Cancellation rate','Annuler taux'], // 187
['Выплата без печати чека','payment without printing a receipt',"Sans paiement   l'impression de chèques"], // 188
['Приём ставок</br>окончен','Admission rates</br>is over',"taux d'acceptation </ br> fini "], // 189
['Видео<br/>инструкция','Video<br/>instruction','Instruction<br/>de la vidéo'], // 190
['Ставок принято:','Bets accepted:','Paris acceptés:'], // 191
['На общую сумму:','For total cost:','Totalisant:'], // 192
['Сумма совершенных выплат:','The amount of advanced payments:','Le montant des paiements avancés:'], // 193
['Ожидаемая сумма выплат:','The expected amount of payments:','Le montant prévu des paiements:'], // 194
['Неправильный номер чека!, номер чека должен состоять из 13 символов','Wrong! , The check number check number must consist of 13 characters','Faux! , Numéro de contrôle numéro de chèque doit être composé de 13 caractères'], // 195
['Проверка чека','Check test','Vérifier essai'], // 196
['Проверить','Find','Vérifier'], // 197
['Укажите период','Select period','Sélect la période'], // 198
['Выплатил','Payments','paiements'], // 199
['Дата выплаты','Payment date','Date de paiement'], // 200
['Применить','Apply','Appliquer'], // 201
['Чек #','Check #','Vérifier #'], // 202
['Отменить','Cancel','Annuler'], // 203
['Выплатить','Pay','Payer'] // 204
];

var _rulnames = [
["", ""],
["1 ряд", "1 row","1rangée"],
["2 ряд", "2 row","2rangée"],
["3 ряд", "3 row","3rangée"],
["1 часть", "1st 12","1partie"],
["2 часть", "2nd 12","2partie"],
["3 часть", "3rd 12","3partie"],
["1-18", "1-18", "1-18"],
["19-36", "19-36", "19-36"],
["Чет", "Even","pair"],
["Нечет", "Odd","impair"],
["Красный", "Red","rouge"],
["Черный", "Black","noir"]
];

var _rulCombnamesCapt = [
["Пара", "Split", "Split"],
["Тройка", "Triple", "Triple"],
["Четвёрка", "Square", "Square"],
["Шестёрка", "Six", "Six"]
];
var _rulCombnames = [
"0,3",
"3,6",
"6,9",
"9,12",
"12,15",
"15,18",
"18,21",
"21,24",
"24,27",
"27,30",
"30,33",
"33,36",
"0,2",
"2,5",
"5,8",
"8,11",
"11,14",
"14,17",
"17,20",
"20,23",
"23,26",
"26,29",
"29,32",
"32,35",
"0,1",
"1,4",
"4,7",
"7,10",
"10,13",
"13,16",
"16,19",
"19,22",
"22,25",
"25,28",
"28,31",
"31,34",

"0,2,3",
"0,1,2",

"0,1,2,3",
"2,3,5,6",
"1,2,4,5",
"1,2,3,4,5,6",

"5,6,8,9",
"4,5,7,8",
"4,5,6,7,8,9",

"8,9,11,12",
"7,8,10,11",
"7,8,9,10,11,12",

"11,12,14,15",
"10,11,13,14",
"10,11,12,13,14,15",

"14,15,17,18",
"13,14,16,17",
"13,14,15,16,17,18",

"17,18,20,21",
"16,17,19,20",
"16,17,18,19,20,21",

"20,21,23,24",
"19,20,22,23",
"19,20,21,22,23,24",

"23,24,26,27",
"22,23,25,26",
"22,23,24,25,26,27",

"26,27,29,30",
"25,26,28,29",
"25,26,27,28,29,30",

"29,30,32,33",
"28,29,31,32",
"28,29,30,31,32,33",

"32,33,35,36",
"31,32,34,35",
"31,32,33,34,35,36",

"2,3",
"5,6",
"8,9",
"11,12",
"14,15",
"17,18",
"20,21",
"23,24",
"26,27",
"29,30",
"32,33",
"35,36",
"1,2",
"4,5",
"7,8",
"10,11",
"13,14",
"16,17",
"19,20",
"22,23",
"25,26",
"28,29",
"31,32",
"34,35",

"1,2,3",
"4,5,6",
"7,8,9",
"10,11,12",
"13,14,15",
"16,17,18",
"19,20,21",
"22,23,24",
"25,26,27",
"28,29,30",
"31,32,33",
"34,35,36"
];


var _pokernames = [
["Ск", "Hc", "Hc"],
["Па", "Pa", "Pa"],
["Дп", "Tp", "Tp"],
["Тр", "Tr", "Tr"],
["Ст", "St", "St"],
["Фл", "Fl", "Fl"],
["ФХ", "FH", "FH"],
["Ка", "Sq", "Sq"],
["СФ", "SF", "SF"],
["Пики", "Spades", "Spades"],
["Черви", "Heart", "Heart"],
["Буби", "Diam", "Diam"],
["Крести", "Clubs", "Clubs"],
["Черное", "Black", "Rouge"],
["Красное", "Red", "Noir"],
["1", "1"],
["2", "2"],
["3", "3"],
["4", "4"],
["5", "5"],
["6", "6"],
["7", "7"],
["8", "8"]
];

var _states = [
["Ошибка", "Error","Erreur"],
["В обработке", "Calculate","Calculer"],
["Проигрыш", "Lost", "Perdu"],
["Выплачено", "Paid", "Payé"],
["Выигрыш", "Wins","Victoires"],
["На балансе", "On balance","Dans l'ensemble"],
["Неизвестно", "unknown","Inconnu"],
["Возврат", "Return","Retour"]
];
