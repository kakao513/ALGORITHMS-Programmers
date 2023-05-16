// k진수에서 소수 개수 구하기

function solution(n, k) {
	let prime = [];
	let stack = [];
	let count = 0;
	const kBinary = n.toString(k);

	for (let i = 0; i < kBinary.length; i++) {
		if (kBinary[i] != 0) { stack.push(kBinary[i]); }
		if (kBinary[i] == 0 && stack.length) { prime.push(stack.join("")); stack = []; }
		if (kBinary[i] != 0 && i == kBinary.length - 1) { prime.push(stack.join("")); stack = []; }
	}

	let j = 0;
	let isPrime = true;
	prime.sort((a, b) => a - b);

	while (j < prime.length) {
		prime[j] == 1 ? isPrime = false : isPrime = true;

		for (let k = 2; k < Math.floor(Math.sqrt(prime[j])) + 1; k++) {
			if (prime[j] % k == 0) { isPrime = false; break; }
		}

		if (isPrime) count++;

		j++;
	}

	return count;
}