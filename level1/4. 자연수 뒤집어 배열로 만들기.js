// 자연수 뒤집어 배열로 만들기

function solution(n) {
	const answer = n.toString().split("").reverse().map((el) => Number(el));

	return answer;
}
