//Solution 1 (while loop)

const reverseString1 = (s) => {
	let start = 0;
	let end = s.length - 1;

	while (start <= end) {
		let temp = s[start];
		s[start] = s[end];
		s[end] = temp;
		start++;
		end--;
	}
};

//Solution 2 (for loop)

const reverseString2 = (s) => {
	for (let start = 0, end = s.length - 1; start < end; start++, end--) {
		let temp = s[start];
		s[start] = s[end];
		s[end] = temp;
	}
};
