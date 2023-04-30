// 내적

function solution(a, b) {
	return a.reduce((prev, cur, idx) => prev += a[idx] * b[idx], 0);
}