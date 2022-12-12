const reverseString = (s: string): Array<string> => {
	let result: Array<string> = [];

	for (let i = s.length - 1; i >= 0; i--) {
		result.push(s[i]);
	}

	return result;
};
