const removeDuplicatesTS = (s: string): string => {
	const result: Array<string> = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === result[result.length - 1]) {
			result.pop();
		} else {
			result.push(s[i]);
		}
	}
	return result.join("");
};
