// 실패율

function solution(N, stages) {
	const result = [];
	const failures = {};

	let i = 1;
	let totalPlayer = 0;
	let stoppedPlayer = 0;
	
	while (i < N + 1) {
		stages.forEach((el) => {
			if (el >= i) { totalPlayer++; }
			if (el === i) { stoppedPlayer++; }
		});

		totalPlayer === 0 ? failures[i] = 0 : failures[i] = (stoppedPlayer / totalPlayer);

		result.push([i, (stoppedPlayer / totalPlayer)]);

		totalPlayer = 0;
		stoppedPlayer = 0;

		i++;		
	}

	for (let j = 0; j < result.length - 1; j++) {
		for (let k = j + 1; k < result.length; k++) {
			if (result[j][1] < result[k][1]) {
				const temp = result[k];
				result[k] = result[j];
				result[j] = temp;
			}

			if ((result[j][1] === result[k][1]) && (result[j] > result[k])) {
				const temp = result[k];
				result[k] = result[j];
				result[j] = temp;
			}
		}
	}

	return result.map((el) => Number.parseInt(el[0]));
}

function solution(N, stages) {
	var answer = [];

	const failure = [];
	let length = stages.length;

	stages.forEach((v) => {
			if (v <= N)
					if (failure[v] === undefined) failure[v] = [v, 1];
					else failure[v][1]++;
	})

	for (let i = 1; i <= N; i++) {
			if (failure[i] === undefined) failure[i] = [i, 0];
			else {
					const temp = failure[i][1];
					failure[i][1] = temp / length;
					length -= temp;
			}
	}

	answer = failure.sort((a, b) => b[1] - a[1]).slice(0, N);

	return answer.map((v) => v[0]);
}

function solution(N, stages) {
	const result = [];
	const failures = {};

	let i = 1;
	let totalPlayer = 0;
	let stoppedPlayer = 0;
	
	while (i < N + 1) {
		stages.forEach((el) => {
			if (el >= i) { totalPlayer++; }
			if (el === i) { stoppedPlayer++; }
		});

		totalPlayer === 0 ? failures[i] = 0 : failures[i] = (stoppedPlayer / totalPlayer);

		result.push([i, (stoppedPlayer / totalPlayer)]);

		totalPlayer = 0;
		stoppedPlayer = 0;

		i++;		
	}

	result.sort((a, b) => b[1] - a[1]);
	return result.map((el) => Number.parseInt(el[0]));
}

function solution(N, stages) {
	var answer = [];

	const failure = [];
	let length = stages.length;

	stages.forEach((v) => {
			if (v <= N)
					if (failure[v] === undefined) failure[v] = [v, 1];
					else failure[v][1]++;
	})

	for (let i = 1; i <= N; i++) {
			if (failure[i] === undefined) failure[i] = [i, 0];
			else {
					const temp = failure[i][1];
					failure[i][1] = temp / length;
					length -= temp;
			}
	}

	answer = failure.sort((a, b) => b[1] - a[1]).slice(0, N);

	return answer.map((v) => v[0]);
}


function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

