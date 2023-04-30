// 올바른 괄호

function solution(s){
	const arr = s.split("");
	const stack = [arr[0]];

	for (let i = 1 ; i < arr.length; i ++) {
		stack.push(arr[i]); 

		if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
			stack.pop();
			stack.pop();
		}
	}

	return stack.length === 0 ? true : false; 
}