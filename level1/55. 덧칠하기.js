// 덧칠하기

function solution(n, m, section) {
	let count = 0;

	section.sort((a, b) => b - a);
	
	while(true) {

		const right = section.length - 1;
		const criteria = section[right] + m - 1;

		for (let i = right; i >= 0; i--) {
			if (section[i] <= criteria) section.pop();
			else break;
		}

		count++;

		if (!section.length) break;
	}

	return count;
}
