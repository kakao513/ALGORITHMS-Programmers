// 삼총사

function solution(number) {
	let matchCount = 0;
	let firstPointer = 0;
	let secondPointer = firstPointer + 1;
	let thirdPointer = firstPointer + 2;

	while(firstPointer < number.length - 2) {
		if (
			number[firstPointer] + number[secondPointer] + number[thirdPointer] === 0
			) matchCount++;

		if (thirdPointer < number.length - 1) thirdPointer++;

		else if ((secondPointer < number.length - 2) && (thirdPointer === number.length - 1)) { 
			secondPointer++; thirdPointer = secondPointer + 1
		} 

		else if ((secondPointer === number.length - 2) && (thirdPointer === number.length - 1)) { 
			firstPointer++; secondPointer = firstPointer + 1; thirdPointer = firstPointer + 2
		} 
	}

	return matchCount;
}

function solution(number) {
	let result = 0;
	
	const combination = (current, start) => {
			if (current.length === 3) {
					result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
					return;
			}


			for (let i = start; i < number.length; i++) {
					combination([...current, number[i]], i + 1);
			}
	}
	combination([], 0);
	return result;
}