// 스킬트리

function solution(skill, skill_trees) {
	let count = 0;
	let queue = [];

	for (let i = 0; i < skill_trees.length; i++) {
		let isWord = true;
		
		for (let j = 0; j < skill_trees[i].length; j++) {
			if (skill.includes(skill_trees[i][j])) queue.push(skill_trees[i][j]);
		}

		for (let k = 0; k < queue.length; k++) {
			if (skill[k] !== queue[k]) { isWord = false; break; }
		}

		if (isWord) count++;
		queue = [];
	}

	return count;
}
