function solution(n) {
	let batteryCount = 0;

	while (n > 0) {
		if (n % 2 === 0) { n = n / 2; }
		else if (n % 2 !== 0) { n = (n - 1) / 2; batteryCount++ }
	}

	return batteryCount;
}

// 밑에거는 왜 틀린건지 의문 ?

// function solution(n) {
// 	let batteryCount = 0;

// 	while (n > 0) {
// 		if (n % 2 === 0) { n = n / 2; }
// 		else if (n % 2 !== 0) { n = (n - 1) / 2; batteryCount++ }
// 	}

// 	return batteryCount > 5 ? 5 : batterCount;
// }

