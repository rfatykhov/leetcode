//Given an integer num, return the number of steps to reduce it to zero.
//In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

//Solution 1
const numberOfSteps = (num) => {
	let steps = 0;

	while (num > 0) {
		if (num % 2 == 0) {
			num /= 2;
		} else {
			num -= 1;
		}
		steps++;
	}

	return steps;
};

//Solution 2 (recursion)
const numberOfStepsTS2 = (num, steps = 0) => (num === 0 ? steps : numberOfStepsTS2(num & 1 ? num - 1 : num >> 1, ++steps));
