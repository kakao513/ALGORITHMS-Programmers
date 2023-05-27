// 오픈채팅방

function solution(records) {
	const result = [];
	const users = {};

	for (const record of records) {
		[ command, id, nickname ] = record.split(" ");
		if (command === "Enter") { users[id] = nickname; result.push([ id, "님이 들어왔습니다." ]) }
		else if (command === "Leave") { result.push([ id, "님이 나갔습니다." ]) }
		else { users[[id]] = nickname; }
	}

	return result.map((el) => users[el[0]] + el[1]);
}
