let simBase = [ 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd',
		'1', '2', 'E', 'e', 'F', 'f', 'G', 'g',
		'H', 'h', '3', '4', 'I', 'i', 'J', 'j',
		'K', 'k', 'L', 'l', '5', '6', 'M', 'm',
		'N', 'n', 'O', 'o', 'P', 'p', '7', '8',
		'Q', 'q', 'R', 'r', 'S', 's', 'T', 't',
		'9', '0', 'U', 'u', 'V', 'v', 'W', 'w',
		'X', 'x', 'Y', 'y', 'Z', 'z', ];
let pass = '';

function randomSim() {
	let i = Math.floor(Math.random() * 61);
	return simBase[i];
};

let n = 0;	//schetchik


while (n < 8) {
	let newSim = randomSim();
	pass += newSim;
	n++;
};

console.log(pass);