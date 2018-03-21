function fGetKeyCard(num) {
	if (num < 0) return null;
	var nomer = "";
	var mast = "";
	switch (num) {
		case 0: nomer = "A"; mast = "¦"; break;
		case 1: nomer = "A"; mast = "¦"; break;
		case 2: nomer = "A"; mast = "¦"; break;
		case 3: nomer = "A"; mast = "¦"; break;

		case 4: nomer = "K"; mast = "¦"; break;
		case 5: nomer = "K"; mast = "¦"; break;
		case 6: nomer = "K"; mast = "¦"; break;
		case 7: nomer = "K"; mast = "¦"; break;

		case 8: nomer = "Q"; mast = "¦"; break;
		case 9: nomer = "Q"; mast = "¦"; break;
		case 10: nomer = "Q"; mast = "¦"; break;
		case 11: nomer = "Q"; mast = "¦"; break;

		case 12: nomer = "J"; mast = "¦"; break;
		case 13: nomer = "J"; mast = "¦"; break;
		case 14: nomer = "J"; mast = "¦"; break;
		case 15: nomer = "J"; mast = "¦"; break;

		case 16: nomer = "10"; mast = "¦"; break;
		case 17: nomer = "10"; mast = "¦"; break;
		case 18: nomer = "10"; mast = "¦"; break;
		case 19: nomer = "10"; mast = "¦"; break;

		case 20: nomer = "9"; mast = "¦"; break;
		case 21: nomer = "9"; mast = "¦"; break;
		case 22: nomer = "9"; mast = "¦"; break;
		case 23: nomer = "9"; mast = "¦"; break;

		case 24: nomer = "8"; mast = "¦"; break;
		case 25: nomer = "8"; mast = "¦"; break;
		case 26: nomer = "8"; mast = "¦"; break;
		case 27: nomer = "8"; mast = "¦"; break;

		case 28: nomer = "7"; mast = "¦"; break;
		case 29: nomer = "7"; mast = "¦"; break;
		case 30: nomer = "7"; mast = "¦"; break;
		case 31: nomer = "7"; mast = "¦"; break;

		case 32: nomer = "6"; mast = "¦"; break;
		case 33: nomer = "6"; mast = "¦"; break;
		case 34: nomer = "6"; mast = "¦"; break;
		case 35: nomer = "6"; mast = "¦"; break;

		case 36: nomer = "5"; mast = "¦"; break;
		case 37: nomer = "5"; mast = "¦"; break;
		case 38: nomer = "5"; mast = "¦"; break;
		case 39: nomer = "5"; mast = "¦"; break;

		case 40: nomer = "4"; mast = "¦"; break;
		case 41: nomer = "4"; mast = "¦"; break;
		case 42: nomer = "4"; mast = "¦"; break;
		case 43: nomer = "4"; mast = "¦"; break;

		case 44: nomer = "3"; mast = "¦"; break;
		case 45: nomer = "3"; mast = "¦"; break;
		case 46: nomer = "3"; mast = "¦"; break;
		case 47: nomer = "3"; mast = "¦"; break;

		case 48: nomer = "2"; mast = "¦"; break;
		case 49: nomer = "2"; mast = "¦"; break;
		case 50: nomer = "2"; mast = "¦"; break;
		case 51: nomer = "2"; mast = "¦"; break;
		default: return null;
	}

	return [nomer, mast, num];
}

var fSetTrueCard = function (card, val, isRub) {
	if (!card) return;

	if (val != null) {
		card.children('#text').text(val[0]);
		if (val[1] == "¦") {

			card.children('#picture').get(0).src = "/images/kassa/poker/c-cher-2.png";
			card.children('#text').css('color', '#FF0000');
		}
		if (val[1] == "¦") {
			card.children('#picture').get(0).src = "/images/kassa/poker/c-bub-2.png";
			card.children('#text').css('color', '#FF0000');
		}
		if (val[1] == "¦") {
			card.children('#picture').get(0).src = "/images/kassa/poker/c-piki-2.png";
			card.children('#text').css('color', '#000000');
		}
		if (val[1] == "¦") {
			card.children('#picture').get(0).src = "/images/kassa/poker/c-krest-2.png";
			card.children('#text').css('color', '#000000');
		}

		if (isRub == 1) {
			card.css('opacity', '1');
		}
	}
	else {
		if (isRub == 1) {
			card.css('opacity', '0');
		}
	}
}

var fParseFTR = function (_card, obj) {
	if (_card == null) return;

	var st = "";
	var c1 = -1;
	var c2 = -1;
	var c3 = -1;
	var c4 = -1;
	var c5 = -1;
	for (var i = 0; i < _card.length; i++) {
		if (_card.charAt(i) == " " || i == _card.length - 1) {
			if (c1 == -1) {
				c1 = parseInt(st);
				var val = fGetKeyCard(c1);
				fSetTrueCard(obj[0], val, 1);
			}
			else {
				if (c2 == -1) {
					c2 = parseInt(st);
					var val = fGetKeyCard(c2);
					fSetTrueCard(obj[1], val, 1);
				}
				else {
					if (c3 == -1) {
						c3 = parseInt(st);
						var val = fGetKeyCard(c3);
						fSetTrueCard(obj[2], val, 1);
					}
					else {
						if (c4 == -1) {
							c4 = parseInt(st);
							var val = fGetKeyCard(c4);
							fSetTrueCard(obj[3], val, 1);
						}
						else {
							if (c5 == -1) {
								c5 = parseInt(st += _card.charAt(i));
								var val = fGetKeyCard(c5);

								fSetTrueCard(obj[4], val, 1);

								return val;
							}
						}
					}
				}
			}

			st = "";
		}
		else {
			st += _card.charAt(i);
		}
	}
}