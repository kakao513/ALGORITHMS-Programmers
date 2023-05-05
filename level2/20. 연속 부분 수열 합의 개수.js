// 연속 부분 수열 합의 개수

function solution(elements) {
	const roundSequence = elements.concat(elements.slice());
	const sequenceSums = {};

	let i = 1;

	while(i < elements.length + 1) {
		let sum = 0;

		for (let j = 0; j < i; j++) {
			sum += roundSequence[j];
		}

		sequenceSums[sum] = (sequenceSums[sum] || 0) + 1;

		for (let k = i; k < roundSequence.length; k++) {
			sum -= roundSequence[k - i];
			sum += roundSequence[k];
			sequenceSums[sum] = (sequenceSums[sum] || 0) + 1;
		}

		i++
	}
	
	return Object.values(sequenceSums).length;
}


console.log(solution([7, 9, 1, 1, 4]))