// 최솟값 만들기

function solution(A, B){
	const sortedA = A.sort((a, b) => b - a);
	const sortedB = B.sort((a, b) => a - b);

	return sortedA.reduce((prev, cur, idx) => prev += (cur * sortedB[idx]), 0);
}