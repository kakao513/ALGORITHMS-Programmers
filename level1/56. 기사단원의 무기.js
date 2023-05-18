// 기사단원의 무기

function solution(number, limit, power) {
	let sum = 0;
	let i = 1;

	while (i < number + 1) {
		let count = 0;
		let isLimit = false;

		for (let j = 1; j < Math.floor(Math.sqrt(i)) + 1; j++) 
		{ 
			if (i % j === 0) count += 2;
			if (i / j === j) count -= 1;
			if (count > limit) { isLimit = true; break; }
		}

		isLimit ? sum += power : sum += count;

		i++;
	}

	return sum;
}

console.log(solution(10, 3, 2))