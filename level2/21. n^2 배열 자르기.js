// n^2 배열 자르기

function solution(n, left, right) {
	const result = [];

	let i = 1;

	while (i < n + 1) {
		for (let j = 0; j < i; j++) {
			result.push(i);
		}

		for (let k = i + 1; k < n + 1; k++) {
			result.push(k);
		}

		i++;
	}

	return result.slice(left, right + 1);
}

function solution(n, left, right) {
	const result = [];

	for (let i = left; i < right + 1; i ++) {
		result.push(Math.max(Number.parseInt(i / n),  i % n) + 1);
	}

	return result;
}

console.log(solution(3, 2, 5))

