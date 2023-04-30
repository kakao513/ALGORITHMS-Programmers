// 행렬의 덧셈

function solution(arr1, arr2) {
	const finalArr = [];

	for (let i = 0 ; i < arr1.length; i ++) {
		const resultArr = [];

		for (let j = 0; j < arr1[i].length; j++) {
			resultArr.push(arr1[i][j] + arr2[i][j]);
		}

		finalArr.push(resultArr);
	}

	return finalArr;
}