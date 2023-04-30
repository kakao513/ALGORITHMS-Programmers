// 크기가 작은 부분문자열

function solution(t, p) {
	const numbers = [];
	let number = "";

	for (let i = 0; i < p.length; i++) {
		number += t[i];
	}

	numbers.push(number);

	for (let i = p.length; i < t.length; i++) {
		number = number.split("").slice(1).join("");
		number += t[i];
		numbers.push(number);
	}

	return numbers.filter((el) => +el <= +p).length;
}