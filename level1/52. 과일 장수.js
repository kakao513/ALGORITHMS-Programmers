// 과일 장수

function solution(k, m, score) {
	let profit = 0;

	score.sort((a, b) => b - a);

	for (let i = m - 1; i < score.length; i += m) {
		profit += m * score[i];
	}

	return profit;
}

console.log(solution(3, 4,[1, 2, 3, 1, 2, 3, 1]));