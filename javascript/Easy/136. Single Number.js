//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//Solution 1 (Set)

const singleNumber1 = (nums) => {
	let unique = new Set();

	for (num of nums) {
		if (unique.has(num)) {
			unique.delete(num);
		} else {
			unique.add(num);
		}
	}

	return Array.from(unique)[0];
};

//Solution 2 (Bitwise XOR)

const singleNumber2 = (nums) => {
	return nums.reduce((prev, curr) => prev ^ curr);
};
