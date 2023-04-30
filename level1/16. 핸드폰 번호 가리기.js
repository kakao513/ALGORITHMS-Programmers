// 핸드폰 번호 가리기

function solution(mobile) {
	const arr = mobile.split("").reverse();

	return arr.slice(0, 4).concat(arr.slice(4).map((el) => "*")).reverse().join("");
}