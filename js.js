"use strict";
let buttons = document.querySelector("table");
let step_count = 1;
let all_td = document.querySelectorAll("td");
let win_combination = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
buttons.onclick = function (event) {
	let target = event.target;
	/* если элемент на который нажали не является яйчейкой, то выходим */
	if (target.tagName != "TD") {
		return;
	}
	/*если элемент на который нажали не пустой, то выходим*/
	if (target.innerHTML != "") {
		return;
	}
	/*если число разделили на 2 и получили остаток 1, то в нажатый элемент вставить крестик, иначе нолик*/
	if (step_count % 2 == 1) {
		target.innerHTML = "X";
	} else {
		target.innerHTML = "O";
	}
	// варианты увеличения переменной на 1 
	// step_count = step_count + 1;
	// step_count += 1;
	step_count++;
	check();
};

function check() {
	for (let i = 0; i < win_combination.length; i++) {
		if (all_td[win_combination[i][0]].innerHTML != "" &&
			all_td[win_combination[i][0]].innerHTML == all_td[win_combination[i][1]].innerHTML &&
			all_td[win_combination[i][0]].innerHTML == all_td[win_combination[i][2]].innerHTML) {
			alert("Победа!");
		}

	}

}