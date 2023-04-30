// 숫자 문자열과 영단어

function solution(s) {
	const arr = [
		/zero/ig, /one/ig, /two/ig, 
		/three/ig, /four/ig, /five/ig, 
		/six/ig, /seven/ig, /eight/ig, 
		/nine/ig,
	];

	for (let i = 0; i < 10; i++) {
		let answer = s.replace(arr[i], i);
		s = answer;
	}

	return Number(s);
}

function solution(s) {
	let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	var answer = s;

	for(let i=0; i< numbers.length; i++) {
			let arr = answer.split(numbers[i]);
			answer = arr.join(i);
	}

	return Number(answer);
}