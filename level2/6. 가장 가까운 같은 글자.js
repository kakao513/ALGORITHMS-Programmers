// 가장 가까운 같은 글자

function solution(s) {
	const arr = s.split("");
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		let match = false;
		for (let j = i - 1; j >= 0; j--) {
			if (arr[i] === arr[j]) {
				match = true;
				result.push(i - j);
				break;
			}
		}

		if (!match) result.push(-1)
	}

	return result;
}