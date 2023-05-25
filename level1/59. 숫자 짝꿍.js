// 숫자 짝꿍

function solution(X, Y) {
	const nums = [];
	const x = {};
	const y = {};
	let great
	let less;

	for (let i = 0;  i < X.length; i++) { x[X[i]] = (x[X[i]] || 0) + 1; }
	for (let i = 0;  i < Y.length; i++) { y[Y[i]] = (y[Y[i]] || 0) + 1; }

	if (Object.keys(x).length > Object.keys(y).length) { great = x; less = y }
	else { great = y; less = x }

	const arr = Object.keys(less);
	
	for (let i = 0; i < arr.length; i++) {
		if (less.hasOwnProperty(arr[i])) {
			while (less[arr[i]] > 0 && great[arr[i]] > 0) {
				nums.push(arr[i]);
				less[arr[i]]--;
				great[arr[i]]--;
			}
		}
	}

	nums.sort((a, b) => b - a)

	if (nums[0]  == 0 && nums[nums.length - 1] == 0) return "0";
	else return nums.length ? nums.join("") : "-1";
}
