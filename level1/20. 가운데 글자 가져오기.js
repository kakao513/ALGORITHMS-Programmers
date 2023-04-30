// 가운데 글자 가져오기

function solution(s) {
	const idx = Math.floor(s.length / 2);
	return s.length % 2 !== 0 ? s[idx] : s.slice(idx - 1, idx + 1);
}