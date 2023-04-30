// JadenCase 문자열 만들기

function solution(s) {
	return s.split(" ").map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
}