// 땅따먹기

function solution(land) {
	const N = land.length;

	for (let i = 1; i < N; i++) {
		for (let j = 0; j < 4; j++) {
			let max = 0;
			for (let k = 0; k < 4; k++) {
				if (j === k) continue;
				else max = Math.max(max, land[i - 1][k])
			}

			land[i][j] += max;
		}
	}

	return Math.max(...land[N - 1]);
}

function solution(land) {
	let max = 0;

	const BFS = (start, current, lastIndex) => {
		if (current.length === land.length) {
			const sum = current.reduce((acc, cur) => acc + cur, 0);
			if (max < sum) max = sum;
			return;
		}

		for (let i = 0; i < land[start].length; i++) {
			if (land[start][i] !== i) BFS(start + 1, [ ...current, land[start][i] ], i);
		}
	}

	BFS(0, [], -1);

	return max;
}



