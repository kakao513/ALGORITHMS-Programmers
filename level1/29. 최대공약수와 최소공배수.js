// 최대공약수와 최소공배수

function solution(n, m) {
	let divMax = 1;

	for (let i = 1; i < Math.max(n, m) + 1; i++) {
		if ((n % i == 0) && (m % i == 0)) divMax = i;
		if ((n < i) || (m < i)) break;
	}

	const mulMin = (n / divMax) * (m / divMax) * divMax;

	return [divMax, mulMin];
}