//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//Solution 1 (Set)

const singleNumberTS1 = (nums: Array<number>) => {
	let unique = new Set<number>();

	for (let num of nums) {
		if (unique.has(num)) {
			unique.delete(num);
		} else {
			unique.add(num);
		}
	}

	return Array.from(unique)[0];
};

//Solution 2 (Bitwise XOR)

const singleNumberTS2 = (nums: Array<number>) => {
	return nums.reduce((prev: number, curr: number) => prev ^ curr);
};
