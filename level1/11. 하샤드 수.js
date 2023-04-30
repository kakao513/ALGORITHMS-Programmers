// 하샤드 수

function solution(x) {
	const sum = x.toString().split("").reduce((prev, cur) => Number(prev) + Number(cur), 0);

	return x % sum === 0 ? true : false;
}