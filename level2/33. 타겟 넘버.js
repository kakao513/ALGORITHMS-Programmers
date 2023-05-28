// 타겟 넘버

function solution(numbers, target) {
	let count = 0;

	const BFS = (start, sum) => {
		if (start === numbers.length) 
		{
			if (sum === target) count++;
			return;
		}

		else 
		{
			BFS(start + 1, sum + numbers[start]);
			BFS(start + 1, sum - numbers[start]);
		}
	}

	BFS(0, 0);

	return count;
}

function solution(numbers, target) {
	let count = 0;

	const BFS = (start, arr) => {
		if (arr.length === numbers.length) {
			const sum = arr.reduce((acc, cur) => acc + cur, 0);
			
			if (sum === target) count++;
			
			return;
		}
	
		for (let i = start; i < numbers.length; i++) {
			BFS(i + 1, [...arr, numbers[i]]);
			BFS(i + 1, [...arr, -numbers[i]]);
		}
	}

	BFS(0, []);

	return count;
}

function solution(numbers, target) {
	let count = 0;

	const BFS = (start, arr) => {
		console.log("???", start, arr, arr.length, numbers.length)
		if (arr.length === numbers.length) {
			const sum = arr.reduce((acc, cur) => acc + cur, 0);
			
			if (sum === target) count++;
			
			return;
		}

	
		for (let i = start + 1; i < numbers.length; i++) {
			BFS(i, [...arr, numbers[i]]);
			BFS(i, [...arr, -numbers[i]]);
		}
	}

	BFS(0, [numbers[0]]);

	return count;
}

