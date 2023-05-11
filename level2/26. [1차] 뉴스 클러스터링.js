// [1차] 뉴스 클러스터링

function solution(str1, str2) {
	const set1 = {};
	const set2 = {};
	const combinedSet = [];
	let interCount = 0;

	str1 = str1.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, " ").replace(/[0-9]/g, " ").toUpperCase();
	str2 = str2.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, " ").replace(/[0-9]/g, " ").toUpperCase();

	for (let i = 0; i < str1.length - 1; i++) {
		const subStr = str1[i] + str1[i + 1];
		if (!subStr.includes(" ")) { set1[subStr] = (set1[subStr] || 0) + 1; }
	}

	for (let i = 0; i < str2.length - 1; i++) {
		const subStr = str2[i] + str2[i + 1];
		if (!subStr.includes(" ")) { set2[subStr] = (set2[subStr] || 0) + 1; }
	}

	for (const key of Object.keys(set1)) {
		if (set2.hasOwnProperty(key) && set2[key] > 0) { 
			while (set1[key] > 0 && set2[key] > 0) {
				set1[key] = set1[key] - 1; 
				set2[key] = set2[key] - 1; 
				interCount++; 
				combinedSet.push(key) 
			}
		}
		
		if (set1[key] > 0){ 
			while (set1[key] > 0) {
				set1[key] = set1[key] - 1; 
				combinedSet.push(key); 
			}
		}
	}

	for (const key of Object.keys(set2)) {
		if (set2[key] > 0) {
			while (set2[key] > 0) {
				set2[key] = set2[key] - 1;
				combinedSet.push(key);
			}
		}
	}

	return combinedSet.length ? Math.floor((interCount / combinedSet.length) * 65536) : 65536;
}

