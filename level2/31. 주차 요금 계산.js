// 주차 요금 계산

function solution(fees, records) {
	const result = [];
	const IN = {};
	const OUT = {};
	const TIMES = {};

	for (let record of records) {
		record = record.split(" ");

		if (record[2] === "IN") IN[record[1]] = record[0];
		else if (record[2] === "OUT")
		{
			OUT[record[1]] = record[0];

			const time = (
				Number(OUT[record[1]].split(":")[0]) * 60 + Number(OUT[record[1]].split(":")[1])
				) - (
				Number(IN[record[1]].split(":")[0]) * 60 + Number(IN[record[1]].split(":")[1])
				);

			TIMES[record[1]] = (TIMES[record[1]] || 0) + time;
		}
	}

	for (const record in IN) {
		if (OUT.hasOwnProperty(record)) {
			let time = (
				Number(OUT[record].split(":")[0]) * 60 + Number(OUT[record].split(":")[1])
				) - (
				Number(IN[record].split(":")[0]) * 60 + Number(IN[record].split(":")[1])
				);

			if (time < 0) {
				time = 23 * 60 + 59 - (Number(IN[record].split(":")[0]) * 60 + Number(IN[record].split(":")[1]));
				TIMES[record] = (TIMES[record] || 0) + time;
			}
		}
		if (!OUT.hasOwnProperty(record)) {
			let time = 23 * 60 + 59 - (Number(IN[record].split(":")[0]) * 60 + Number(IN[record].split(":")[1]));
			TIMES[record] = (TIMES[record] || 0) + time;
		}
	}

	for (const key in TIMES) {
		if (TIMES[key] - fees[0] <= 0) { result.push([key, fees[1]]) }
		else 
		{ 
			const extra = (
				(TIMES[key] - fees[0]) % fees[2] === 0) ?
				Math.floor((TIMES[key] - fees[0]) / fees[2]) * fees[3] :
				Math.floor((TIMES[key] - fees[0]) / fees[2]) * fees[3] + fees[3];

			result.push([key, fees[1] + extra]);
		}
	}
	
	return result.sort().map((el) => el[1]);
}

