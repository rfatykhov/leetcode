//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//Solution 1 (two for loops)
const twoSum1 = (nums, target) => {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

//Solution 2 (Map)
const twoSum2 = (nums, target) => {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const diff = target - num;

		if (map.has(diff)) {
			const secondIndex = map.get(diff);
			return [i, secondIndex];
		}

		map.set(num, i);
	}
};
