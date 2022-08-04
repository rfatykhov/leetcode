const containsDuplicate = (nums) => {
	const unique = Array.from(new Set(nums));
	if (nums.length === unique.length) {
		return false;
	} else {
		return true;
	}
};
