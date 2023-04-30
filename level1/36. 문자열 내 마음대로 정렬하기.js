// 문자열 내 마음대로 정렬하기 

function solution(strings, n) {
	const arr = strings.slice();

	for(let i = 0; i < arr.length; i ++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i][n] === arr[j][n]) {
				const greater = arr[i] > arr[j] ? arr[i] : arr[j];
				const lower = arr[i] > arr[j] ? arr[j] : arr[i];

				arr[i] = lower;
				arr[j] = greater;
			}

			else if (arr[i][n] > arr[j][n]) {
				const temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}
	return arr;
}