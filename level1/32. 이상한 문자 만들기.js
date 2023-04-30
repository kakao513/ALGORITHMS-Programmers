// 이상한 문자 만들기

function solution(s) {
	let lengthCount = 0; 
	let wordCount = 1;
	let answer = "";

	while (lengthCount < s.length) {
		if (s[lengthCount] === " ") wordCount = 0;
		wordCount % 2 != 0 
		? answer += s[lengthCount].toUpperCase() 
		: answer += s[lengthCount].toLowerCase();

		wordCount++;
		lengthCount++;
	}

	return answer;
}