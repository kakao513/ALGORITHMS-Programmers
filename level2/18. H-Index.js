// H-Index

function solution(citations) {
	let maxHIndex = 0;
	
	let hIndex = 0;
	
	while (hIndex < citations.length) {
		let qualifiers = 0;
		let disqualifiers = 0;

		hIndex++;
	
		for (let i = 0; i < citations.length; i++) {
			if (hIndex <= citations[i]) qualifiers++;
			else if (hIndex >= citations[i]) disqualifiers++;
		}
	
		if ((qualifiers >= hIndex) && (disqualifiers <= hIndex)) maxHIndex = hIndex;
		else break;
	}
	
	return maxHIndex;
}

function solution(citations) {
	citations = citations.sort((a, b) => b - a);

	let i = 0;

	while(i + 1 <= citations[i]){
		console.log(i + 1, citations[i])
		i++;
	}
	return i;
}


