// 멀리 뛰기

function solution(n, memo = [1, 2]) {
	if (memo[n] !== undefined) return memo[n]; 

	const res = solution(n - 1, memo) + solution(n - 2, memo);
	return memo[n] = res % 1234567;
}