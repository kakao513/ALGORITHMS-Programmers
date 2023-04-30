// 두 개 뽑아서 더하기

function solution(numbers) {
	const sum = [];
	const result = [];

	const combination = (current, start) => {
		if (current.length === 2) { current.reduce((prev, cur) => sum.push(prev + cur)), 0; return; }

		for (let i = start; i < numbers.length; i++) {
			combination([ ...current, numbers[i] ], i + 1);
		}
	}

	combination([], 0);

	sum.map((el) => result.indexOf(el) === -1 ? result.push(el) : el);

	return result.sort((a, b) => a - b);
}