// 할인 행사

function solution(want, number, discount) {
	const cart = {};
	let count = 0;
	
	want.forEach((el, idx) => { cart[el] = number[idx] });

	let i = 0;

	while (i < discount.length - 9) {
		const tempCart = { ...cart };
		let isValid = true;

		for (let k = i; k < i + 10; k++) {
			if (!tempCart.hasOwnProperty(discount[k])) { isValid = false; break; }
			else tempCart[discount[k]] -= 1;
		}

		for (const value of Object.values(tempCart)) {
			if (value > 0) { isValid = false; break; }
		}

		if (isValid) count++;
		i++;
	}

	return count;
}




