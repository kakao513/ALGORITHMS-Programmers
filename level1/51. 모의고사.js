// 모의고사

function solution(answers) {
	const result = [];

	const first = "12345".repeat(Math.ceil(answers.length / 5)).split("");
	const second = "21232425".repeat(Math.ceil(answers.length / 8)).split("");
	const third = "3311224455".repeat(Math.ceil(answers.length / 10)).split("");

	let firstCount = 0;
	let secondCount = 0;
	let thirdCount = 0;

	for (let i = 0; i < answers.length; i++) {
		if (first[i] == answers[i]) firstCount++;
		if (second[i] == answers[i]) secondCount++;
		if (third[i] == answers[i]) thirdCount++;
	}

	const max = Math.max(firstCount, secondCount, thirdCount);

	if (firstCount == max) result.push(1);
	if (secondCount == max) result.push(2);
	if (thirdCount == max) result.push(3);

	return result;
}
