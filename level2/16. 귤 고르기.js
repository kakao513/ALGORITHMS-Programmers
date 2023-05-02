// 귤 고르기

function solution(k, tangerine) {
	tangerine.sort((a, b) => a - b);

	let left = 0;
	let right = 1;
	let count = 1;
	const countBox = [];

	while(right < tangerine.length + 2) {
		if (tangerine[left] === tangerine[right]) { right++; count++; }
		else { left = right; right++; countBox.push(count); count = 1; }; 
	}

	countBox.sort((a, b) => b - a);

	count = 0;
	let sum = 0;

	for (let i = 0; i < countBox.length; i++) {
		if (k <= sum) break;

		sum += countBox[i];
		count++; 
	}

	return count;
}

function solution(k, tangerine) {
	let answer = 0;
	const tangerineBox = {};

	tangerineBox.forEach((el) => tangerineBox[el] = (tangerineBox[el] || 0) + 1);

	const countArr = Object.values(tDict).sort((a, b) => b - a);
  for (const count of countArr) {
    answer++;
    if (k > count) k -= count;
    else break;
  }
  return answer;
}



