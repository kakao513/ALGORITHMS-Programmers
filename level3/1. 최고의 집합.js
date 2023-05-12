// 최고의 집합

function solution(n, s) {
	if (s < n) return [-1];

	let result = [];

	while (n > 0) {
		const value = Math.floor(s / n);
		result.push(value);
		s -= value; 
		n--;
	}
	
	return result.sort((a, b) => a - b);
}
