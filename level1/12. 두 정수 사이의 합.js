// 두 정수 사이의 합

function solution(...n) {
	if (n[0] === n[1]) return n[0];

	let sum = 0;
	const sortedArr = n.sort((a, b) => a - b);

	for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
		sum += i;
	}

	return sum;
}