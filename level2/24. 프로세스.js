// 프로세스

function solution(priorities, location) {
	const queue = [];

	for (let i = 0; i < priorities.length; i++) {
		const obj = {};
		(i === location) ? obj["id"] = "A" : obj["id"] = "B";
		obj["value"] = priorities[i];
		queue.push(obj);
	}

	let count = 0;

	while(queue.length) {
		let isProcessed = true;
		const task = queue.shift();

		count++;

		for (let i = 0; i < queue.length - 1; i++) {
			if (task["value"] < queue[i]["value"]) { queue.push(task); count--; isProcessed = false; break; }
		}

		if (isProcessed && task["id"] === "A") break;
	} 

	return count;
}

