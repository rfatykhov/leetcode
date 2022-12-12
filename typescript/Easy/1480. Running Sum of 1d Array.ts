//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.

//Solution 1 (initial not so great solution)

const runningSumTS1 = (nums: Array<number>): Array<number> => {
	let res: Array<number> = [];
	const len: number = nums.length;
	for (let i = 0; i < len; i++) {
		nums.length = len - i;
		res.push(nums.reduce((a: number, b: number) => a + b));
	}

	return res.reverse();
};

//Solution 2

const runningSumTS2 = (nums: Array<number>): Array<number> => {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}

	return nums;
};
