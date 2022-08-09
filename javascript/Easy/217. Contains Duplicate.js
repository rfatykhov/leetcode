const containsDuplicate = (nums) => {
	const unique = [...new Set(nums)];
	if (nums.length === unique.length) {
		return false;
	} else {
		return true;
	}
};
