// 나누어 떨어지는 숫자 배열

function solution(arr, div) {
	const result =  arr.sort((a, b) => a - b).filter((el) => el % div === 0);
	return !result.length ? [-1] : result;
}