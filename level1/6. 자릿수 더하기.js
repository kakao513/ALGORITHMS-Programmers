// 자릿수 더하기

function solution(n) {
	return n
	.toString()
	.split("")
	.reduce((prev, cur) => Number(prev) + Number(cur), 0);
}