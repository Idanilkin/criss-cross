"use strict";
let buttons = document.querySelector("table");
let step_count = 1;

buttons.onclick = function(event) {
	let target = event.target;
	if (target.tagName!="TD") {
		return;
	}
	if(target.innerHTML != "") {
		return;
	}
	if(step_count % 2 == 1){
		target.innerHTML = "X";
	} else {
		target.innerHTML = "O";
	}
	// варианты увеличения переменной на 1 
	// step_count = step_count + 1;
	// step_count += 1;
	step_count++;
};
