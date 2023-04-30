// 숫자 짝꿍

function solution(X, Y) {
	let answer = "";
	const resultArr = [];
	
	const greaterArr = Math.max(X, Y).toString().split("");
	const smallerArr = Math.min(X, Y).toString().split("");

	smallerArr.forEach((el) => {
		if (greaterArr.includes(el)) {
			resultArr.push(el);
			greaterArr.splice(greaterArr.indexOf(el), 1);
		}
	});

	if (!resultArr.length) answer = "-1";

	resultArr.sort((a, b) => b - a);

	for (let i = 0; i < resultArr.length; i++) {
		answer += resultArr[i];
	}

	if (answer[0] == 0) answer = "0";

	return answer;
}