// 음양 더하기

function solution(absolutes, signs, s = 0) {
	for (let i = 0; i < absolutes.length; i ++) {
		signs[i] === true ? s += absolutes[i] : s -= absolutes[i];
	}

	return s;
}