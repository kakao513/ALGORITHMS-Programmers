// 정수 제곱근 판별

function solution(n) {
	const isSqrt = (Math.sqrt(n) === Math.floor(Math.sqrt(n))) ? true : false;

	if (!isSqrt) return -1;
	
	else return (Math.sqrt(n) + 1) ** 2;
}