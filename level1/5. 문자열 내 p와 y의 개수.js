// 문자열 내 p와 y의 개수

function solution(s){
	const p = [];
	const y = [];

	s.toLowerCase().split("").map((el) => {
		if (el === "p") p.push(el);
		if (el === "y") y.push(el);
	});

	return p.length === y.length;
}