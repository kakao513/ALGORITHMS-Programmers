 // 방문 길이

 function solution(dirs) {
	let sum = 0;
	let location = [0, 0];
	const commands = { "U": [0, 1], "D": [0, -1], "R": [1, 0], "L": [-1, 0] }
	const history = {};

	for (let i = 0; i < dirs.length; i++) {
		let original = `${location[0]}` + `${location[1]}`;
		let changed = `${location[0] + commands[dirs[i]][0]}`+ `${location[1] + commands[dirs[i]][1]}`;

		if (
			(
			location[0] + commands[dirs[i]][0] > 5 || 
			location[0] + commands[dirs[i]][0] < -5
			) || (
			location[1] + commands[dirs[i]][1] > 5 ||
			location[1] + commands[dirs[i]][1] < -5
			)
		) continue;

		else 
		{
			if (!history.hasOwnProperty(original + changed)) sum++;

			location[0] = location[0] + commands[dirs[i]][0];
			location[1] = location[1] + commands[dirs[i]][1];
			history[original + changed] = 1;
			history[changed + original] = 1;
		}
	}

	return sum
}	
