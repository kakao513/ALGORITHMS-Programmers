// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
	const lotto_win = { "6": 1, "5": 2, "4": 3, "3": 4, "2": 5, "1": 6, "0": 6 };
	const wins = {};

	win_nums.forEach((el) => { wins[el] = 1 });

	let match = 0;
	let zero = 0;


	for (let i = 0; i < lottos.length; i++) {
		if (wins.hasOwnProperty(lottos[i])) match++;
		if (lottos[i] === 0) zero++;
	}

	return [lotto_win[match + zero], lotto_win[match]];
}

