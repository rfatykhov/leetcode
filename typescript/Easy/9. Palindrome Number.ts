const isPalindromeTS = (x: number): boolean => {
	return x.toString().split("").reverse().join("") === x.toString() ? true : false;
};
