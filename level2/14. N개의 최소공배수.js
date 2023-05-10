// N개의 최소공배수

function solution(arr) {
	arr.sort((a, b) => b - a);

	function lcm(a, b) {
		return (a * b) / gcd(a, b)
	}
	
	function gcd(a, b) {
		let r
		while (b != 0) {
			r = a % b
			a = b
			b = r
		}
		return a
	}

	let multiple = lcm(arr[0], arr[1]);

	for (let i = 2; i < arr.length; i++) {
		multiple = lcm(multiple, arr[i]);
	}

	return multiple;
}

