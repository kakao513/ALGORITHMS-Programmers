// 직사각형 별찍기

function solution(n, m) {
	const stars = `${"*".repeat(n)}\n`;

	return stars.repeat(m).trim();
}