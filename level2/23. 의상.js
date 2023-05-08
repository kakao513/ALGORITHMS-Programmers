// 의상

function solution(clothes) {
	const outfits = {};
	let sum = 1;

	for (const cloth of clothes) {
		outfits[cloth[1]] = (outfits[cloth[1]] || 0) + 1;
	}

	for (const value of Object.values(outfits)) {
		sum *= (value + 1);
	}

	return sum - 1;
}
