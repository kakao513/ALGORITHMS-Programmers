// [3차] n진수 게임

function solution(n, t, m, p) {
	let nBinary = "";
	let answer = "";

	for (let i = 0; i < t * m; i++) { nBinary += (i).toString(n); }
	for (let i = p - 1; answer.length < t; i += m) { answer += nBinary[i] }

	return answer.toUpperCase();
}
