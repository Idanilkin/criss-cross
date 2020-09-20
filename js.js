"use strict";
let buttons = document.querySelector("table");

buttons.onclick = function(event) {
	let target = event.target;
	if (target.tagName!="TD") {
		return;
	}
	target.innerHTML = "X";
};