const isPalindrome = (x) => {
	return x.toString().split("").reverse().join("") === x.toString() ? true : false;
};
