// 예산

function solution(d, budget) {
	let total = 0;
	let max = d.length;
	d.sort((a, b) => a - b); 

	for (let i = 0; i < d.length; i++) {
		total += d[i];
		if (total > budget) { max = i; break; };
	}

	return max;
}