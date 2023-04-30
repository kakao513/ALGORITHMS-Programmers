// 이진 변환 반복하기

function solution(s, recurCount = 0, zeroCount = 0) {
	if (s == 1) return [recurCount, zeroCount];

	zeroCount += (s.match(/0/g) || []).length;
	
	recurCount++;

	return solution(s.match(/1/g).length.toString(2), recurCount, zeroCount);
}
