// 2016년

function solution(a, b) {
	const dates = [ "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" ];
	const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let days = b;

	for (let i = 1; i < a; i ++) {
		days += monthDays[i];
	}

	return days % 7 === 0 ? dates[dates.length - 1] : dates[days % 7 - 1];
}
