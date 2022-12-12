const containsDuplicate = (nums: Array<number>): boolean => {
	const unique: Array<number> = [...new Set(nums)];

	if (nums.length === unique.length) {
		return false;
	} else {
		return true;
	}
};
