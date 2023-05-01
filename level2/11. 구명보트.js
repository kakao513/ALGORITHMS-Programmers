// 구명보트

function solution(people, limit) {
	people.sort((a, b) => b - a);

	if (people[people.length - 1] > limit / 2) return people.length;

	let left = 0;
	let right = 1;
	let boatCount = 0;

	while(left < people.length) {
		if (people[left] + people[right] <= limit) {
			people.splice(right, 1); 

			boatCount++;
			left++;
			right = left + 1;
		}

		else if (right > people.length) {
			boatCount++;
			left++;
			right = left + 1;
		}

		else right++;
	}

	return boatCount;
}


function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}
