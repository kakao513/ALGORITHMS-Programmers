// 기능개발

function solution(progresses, speeds) {
	const result = [];

	let stack = progresses.reverse();
	speeds = speeds.reverse();

	while (stack.length) {
		for(let i = speeds.length - 1; i > -1; i--) {
			stack[i] = stack[i] += speeds[i];
		}

		let count = 0;

		while(stack[stack.length - 1] >= 100) { 
			stack.pop(); 
			speeds.pop();
			count++;
		}

		if (count) result.push(count);
	}

	return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]))