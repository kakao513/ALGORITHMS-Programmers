// 짝지어 제거하기

function solution(s) {
	let result = 0;
	const arr = s.split("");

	let pointer = 0;

	while (pointer < arr.length) {
		if (arr[pointer] === arr[pointer + 1]) { arr.splice(pointer, 2); pointer = -1; }
		if (!arr.length) { result = 1; break; }

		pointer++;
	}

	return result;
}

function solution(s) {
	const stack = [];
	
	for (let i = 0; i < s.length; i++) {
		stack.push(s[i]);

		if (stack[stack.length - 1] === s[i]) { stack.pop(); }
	}
	
	return stack.length ? 0 : 1;
}