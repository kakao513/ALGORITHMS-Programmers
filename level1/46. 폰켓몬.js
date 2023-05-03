// 폰켓몬

function solution(nums) {
	const pokemons = {};
	let takable = nums.length / 2;
	let count = 0;

	nums.forEach((el) => pokemons[el] = (pokemons[el] || 0) + 1);

	const pokemonNums = Object.values(pokemons).sort((a, b) => a - b).length;

	for (let i = 0; i < pokemonNums; i++) {
		if (takable <= 0) break;
		
		takable -= 1;
		count++;
	}

	return count;
}

