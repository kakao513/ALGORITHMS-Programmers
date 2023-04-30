// 제일 작은 수 제거하기

function solution(arr) {
	const min = arr.slice().sort((a, b) => a - b)[0]
	const result = arr.filter((el) => el > min);

	return !result.length ? [-1] : result; 
}