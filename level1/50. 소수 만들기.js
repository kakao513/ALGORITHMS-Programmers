// 소수 만들기

function solution(nums) {
	let count = 0;
	const sums = [];

	const combination = (arr, start) => {
		if (arr.length === 3) {
			sums.push(arr.reduce((prev, cur) => prev + cur, 0));

			return;
		}

		for (let i = start; i < nums.length; i++) {
			combination([...arr, nums[i]], i + 1);
		}
	}

	combination([], 0);

	for (const sum of sums) {
		let isPrime = true;

		for (let i = 2; i < Math.sqrt(sum) + 1; i++) {
			if (sum % i === 0) { isPrime = false; break; }
		}

		if (isPrime) count++;
	}

	return count;
}

// console.log(solution([1,2,3,4]))
console.log(solution([1,2,7,6,4]))