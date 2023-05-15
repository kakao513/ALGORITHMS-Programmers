// 카드 뭉치

function solution(cards1, cards2, goal) {
	
	let i = 0;
	let j = 0;
	let k = 0;

	let isPossible = "Yes";

	while (i < goal.length) {
		if (cards1[j] === goal[i]) { j++ }
		else if (cards2[k] === goal[i]) { k++ }
		else { isPossible = "No"; break; }
		i++;
	}

	return isPossible;
}
