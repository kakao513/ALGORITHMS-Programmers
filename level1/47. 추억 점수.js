// 추억 점수

function solution(name, yearning, photo) {
	const yearningObj = {};
	const result = [];

	name.forEach((el, idx) => yearningObj[el] = yearning[idx]);

	for (let i = 0; i < photo.length; i++) {
		let score = 0;

		for (let j = 0; j < photo[i].length; j++) {
			if (yearningObj.hasOwnProperty(photo[i][j])) score += yearningObj[photo[i][j]];
		}

		result.push(score);
	}

	return result;
}

