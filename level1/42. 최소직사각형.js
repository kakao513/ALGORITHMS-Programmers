// 최소직사각형

function solution(sizes) {
	const arr = sizes.reduce((prev, cur) => [...prev].concat(cur));

	let widthMax = arr.sort((a, b) => a - b)[arr.length - 1];
	let heightMax = 0;

	for(let i = 0; i < sizes.length; i++) {
		for(let j = 0; j < sizes[i].length - 1; j++) {
			const min = Math.min(sizes[i][j], sizes[i][j + 1]);
			if (min > heightMax) heightMax = min;
		}
	}

	return widthMax * heightMax;
}

function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}
