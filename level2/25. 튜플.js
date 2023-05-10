// 튜플

function solution(s) {
	const set = [];
	const tuple = [];
	let stack = [];

	s = s.slice(1, s.length - 1).replace(/,/g, "").split("");

	let i = 3;
	let j = 1;

	while (s.length) {
		const letter = s.shift();
		stack.push(letter);

		if ((letter === "}") && (j === i)) { tuple.push(stack.join("").replace(/[{, }]/g, "")); stack = []; i++; j = 1; }
		if ((letter === "}") && (j !== i)) { s = [...s, ...stack];  stack = []; j = 1; }
		else j++;
	}

	tuple.join("").split("").forEach((el) => {
		if (set.indexOf(el) === -1) set.push(el);
	});

	return set.map((el) => Number(el));
}

function solution(s) {
  const answer = [];
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  arr.sort((a, b) => a.length - b.length);
  arr.forEach((col) => {
    col.forEach((row) => {
      if (!answer.includes(row)) answer.push(row);
    });
  });
  return answer;
}

