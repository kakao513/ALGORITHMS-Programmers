// [3차] 압축

function solution(msg) {
	const result = [];
	const dict = {
		A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, 
		I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, 
		P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, 
		W: 23, X: 24, Y: 25, Z: 26
	}

	let i = 0; 
	let count = 26;

	while (i < msg.length) {
		let key = "";
		let temp = 0;

		for (let j = i; j < msg.length; j++) {
			key += msg[j];

			if (dict.hasOwnProperty(key)) { temp = dict[key]; }
			else { count++; dict[key] = count; break; }

			i++;
		}

		result.push(temp);
	}

	return result;
}
