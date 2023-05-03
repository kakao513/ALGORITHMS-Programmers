// [1차] 비밀지도

function solution(n, arr1, arr2) {
	const result = [];

	for (let i = 0; i < arr1.length; i++) {
		const str = (arr1[i] | arr2[i]).toString(2);
		const arr = str.split("");

		while (arr.length < n) {
			arr.unshift("0");
		}

		const dec = arr.map((el) => el === "1" ? "#" : " ").join("");
		result.push(dec);
	}

	return result;
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); 