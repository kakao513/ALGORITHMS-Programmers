// 영어 끝말잇기

function solution(n, words) {
	const resultObj = {};
	resultObj[words[0]] = 0;

	let prev = words[0];
	let count = 1;

	for (let i = 1; i < words.length; i++) {
		count++;

		if (words[i].length === 1) break;
		else if (resultObj.hasOwnProperty([words[i]])) break;
		else if (prev[prev.length - 1] !== words[i][0]) break;

		resultObj[words[i]] = i;
		prev = words[i];
	}

	if (prev === words[words.length - 1]) return [0,0];

	const person = count % n === 0 ? n : count % n;
	const nthTime = Math.ceil(count / n);

	return [person, nthTime];
}

function solution(n, words) {
	let answer = 0;
	words.reduce((prev, now, idx) => {
			answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
			return now[now.length-1];
	}, "")

	return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}