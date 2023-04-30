// K번째수

function solution(array, commands) {
	const sortedArr = commands.map((el) => [...array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)]);

	return sortedArr.map((arr, idx) => arr[commands[idx][2] - 1]);
}