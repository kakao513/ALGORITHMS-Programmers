// N개의 최소공배수

function solution(arr) {
	let sortedArr = arr.sort((a, b) => a - b);

	let answer = 1;
	let dividend = 2;
	let numbers = [];

	while (dividend < sortedArr[0] + 1) {
		let divisible = true;

		for (let i = 0; i < sortedArr.length; i++) {
			if (sortedArr[i] % dividend !== 0) { divisible = false; }
			else numbers.push(sortedArr[i] / dividend);
		}	
		
		if (!divisible) numbers = [];
		else { answer *= dividend; sortedArr = numbers; dividend = 2; };

		dividend++;
	}

	return sortedArr.reduce((prev, cur) => prev * cur, answer);
}

console.log(solution([1,2,3]))
console.log(solution([2,6,8,14]))
// console.log(solution([13, 39, 78, 2]))