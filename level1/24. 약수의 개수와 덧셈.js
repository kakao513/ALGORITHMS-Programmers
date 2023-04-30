// 약수의 개수와 덧셈

function solution(left, right) {
	let totalSum = 0;

	for (let i = left; i < right + 1; i++) {
		const divArr = [];

		for(let j = 1; j < i + 1; j++) {
			if (i % j == 0) divArr.push(j);
		}

		divArr.length % 2 === 0 ? totalSum += i : totalSum -= i;
	}

	return totalSum;
}