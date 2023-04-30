// 정수 내림차순으로 배치하기

function solution(n) {
	return +n.toString().split("").sort((a, b) => b - a).join("");
}