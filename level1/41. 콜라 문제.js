// 콜라 문제

function solution(a, b, n) {
	let emptyBottles = n;
	let cokeCount = 0;
	let keptCokes = 0;
	

	while(emptyBottles >= a) {
		keptCokes = emptyBottles % a;
		newCoke = Math.floor(emptyBottles / a);
		keptCokes += newCoke * b;

		cokeCount += newCoke * b;
		emptyBottles = keptCokes;
	}

	return cokeCount;
}