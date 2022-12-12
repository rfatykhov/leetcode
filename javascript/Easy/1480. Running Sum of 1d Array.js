//1480. Running Sum of 1d Array

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.

//Solution 1 (initial not so great solution)

const runningSum1 = (nums) => {
	let res = [];
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		nums.length = len - i;
		res.push(nums.reduce((a, b) => a + b));
	}

	return res.reverse();
};

//Solution 2

const runningSum2 = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}

	return nums;
};
