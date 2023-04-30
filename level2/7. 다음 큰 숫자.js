// 다음 큰 숫자

function solution(n) {
	const oneCount = n.toString(2).match(/[1]/g).length;
	let isNumber = false;

	n = n + 1;

	while (!isNumber) {
		oneCount == n.toString(2).match(/[1]/g).length ? isNumber = true : n++;
	}

	return n;
}