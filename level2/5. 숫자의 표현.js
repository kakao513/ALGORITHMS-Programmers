// 숫자의 표현

function solution(n) {
	let i = 1;
	let j = 2; 
	let count = 1;
	let total = i;

	while(j < Math.ceil(n / 2) + 1) {
		total += j;
		if (total == n) {
			count++;

			i++;
			j = i;
			total = i;
		}

		if (total > n) {
			i++;
			j = i;
			total = i;
		}

		j++;
	}

	return count;
}