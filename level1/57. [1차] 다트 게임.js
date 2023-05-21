// [1차] 다트 게임

function solution(dartResult) {
	const numbers = [0, 0, 0];
	const options = [1, 1, 1];
	const bonuses = [1, 1, 1];
	const roundScore = [0, 0, 0];

	for (let i = 0; i < 3; i++) {
		numbers[i] = parseInt(dartResult);
		dartResult = dartResult.slice(String(numbers[i]).length);


		if (dartResult[0] == 'S' || dartResult[0] == 'D' || dartResult[0] == 'T') {
			switch(dartResult[0]) {
				case "S": 
					options[i] = 1; break;
				case "D": 
					options[i] = 2; break;
				case "T": 
					options[i] = 3; break;
			}

			dartResult = dartResult.slice(1);
		}

		if (dartResult[0] == '*' || dartResult[0] == '#') {
			switch(dartResult[0]) {
				case "*": 
					bonuses[i] = 2; break;
				case "#": 
					bonuses[i] = -1; break;
			}

			dartResult = dartResult.slice(1);
		}
	}

	for (let i = 0; i < 3; i++) {
		roundScore[i] = numbers[i] ** options[i];
		roundScore[i] = roundScore[i] * bonuses[i];

		if (i > 0 && bonuses[i] == 2) {
			roundScore[i - 1] = roundScore[i - 1] * bonuses[i];
		}
	}

	return roundScore.reduce((acc, cur) => acc + cur, 0);
}


function solution(dartResult) {
	const bonus = { 'S': 1, 'D': 2, 'T': 3 };
	const options = { '*': 2, '#': -1, undefined: 1 };

	let darts = dartResult.match(/\d.?\D/g);

	for (let i = 0; i < darts.length; i++) {
			let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
					score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

			if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

			darts[i] = score;
	}

	return darts.reduce((a, b) => a + b);
}

