// 괄호 회전하기

function solution(s) {
	let strArr = s.split("");

	let j = 0;
	let k = 0;

	while(k < s.length) {
		const stack = [strArr[0]];

		for (let i = 1; i < strArr.length; i++) {
			if ((stack[stack.length - 1] === "(") && (strArr[i] === ")")) stack.pop();
			else if ((stack[stack.length - 1] === "{") && (strArr[i] === "}")) stack.pop();
			else if ((stack[stack.length - 1] === "[") && (strArr[i] === "]")) stack.pop();
	
			else stack.push(strArr[i]);
		}
	
		if (!stack.length) j++;
	
		strArr = strArr.slice(1).concat(strArr[0]);
		k++;
	}

	return j;
}
