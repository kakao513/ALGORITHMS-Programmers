// 단어 변환

function solution(begin, target, words) {
	let min = Infinity;

	const BFS = (start, count, current) => {
		if (start === target && count < min) { min = count; return; }
		if (!current.length) { return; }

		const tempArr = [ ...current ];
		let lists = {};

		for (let i = 0; i < start.length; i++) {
			lists[start[i]] = (lists[start[i]] || 0) + 1;
		}

		for (let j = 0; j < tempArr.length; j++) {
			let offCount = 0;
			let isWord = true;
			const tempList = { ...lists };

			for (let k = 0; k < tempArr[j].length; k++) {
				if (lists.hasOwnProperty(tempArr[j][k])) tempList[tempArr[j][k]]--;
				else offCount++;
				if (offCount === 2) { isWord = false; break; }
			}

			Object.values(tempList).forEach((el) => { 
				if (el < -1) { isWord = false; }
			});

			if (isWord) {
				const word = tempArr[j];
				current.splice(current.indexOf(word), 1); 
				BFS(word, count + 1, current);
			}
		}
	}

	BFS(begin, 0, words);

	return min == Infinity ? 0 : min;
}

