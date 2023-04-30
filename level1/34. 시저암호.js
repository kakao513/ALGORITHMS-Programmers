// 시저 암호

function solution(s, n) {
	const ALPHABETS = [
		'A', 'B', 'C', 'D', 'E', 'F',
		'G', 'H', 'I', 'J', 'K', 'L',
		'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X',
		'Y', 'Z', 'A', 'B', 'C', 'D', 
		'E', 'F','G', 'H', 'I',  'J', 
		'K', 'L','M', 'N', 'O',  'P', 
		'Q', 'R','S', 'T', 'U',  'V', 
		'W', 'X','Y', 'Z'
	]
	const alphabets = [
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
		'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
		'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
		'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 
		'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
		'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
		'w', 'x', 'y', 'z' 
	]

	const stringArr = s.split("");
	const resultArr = [];

	for (let i = 0; i < s.length; i++) {		
		if (stringArr[i] === " ") resultArr.push(" ");

		else if (stringArr[i] === stringArr[i].toUpperCase()) 
		resultArr.push(ALPHABETS[ALPHABETS.indexOf(stringArr[i]) + n]);
		
		else if (stringArr[i] === stringArr[i].toLowerCase()) 
		resultArr.push(alphabets[alphabets.indexOf(stringArr[i]) + n]);
	}

	return resultArr.join("");
}