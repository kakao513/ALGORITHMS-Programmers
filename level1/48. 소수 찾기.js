// 소수 찾기

function solution(n) {
	let count = 0;
	const prime = [];

	for (i = 2; i < n + 1; i++) {
		let isPrime = true;
		for (let j = 0; j < prime.length + 1; j++) {
			if (i % prime[j] == 0) { isPrime = false; break; }
			if (Math.sqrt(i) < prime[j]) break;

		}

		if (isPrime) { prime.push(i); count++; }
	}

	return count;
}
