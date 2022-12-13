/*
Given an integer n, return a string array answer(1 - indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

*/

//Solution 1

const fizzBuzz1 = (n) => {
	let counter = 1;
	let answer = [];

	while (counter <= n) {
		answer.push(String(counter));
		counter++;
	}

	for (let i = 0; i < answer.length; i++) {
		if (answer[i] % 15 === 0) {
			answer[i] = "FizzBuzz";
		} else if (answer[i] % 3 === 0) {
			answer[i] = "Fizz";
		} else if (answer[i] % 5 === 0) {
			answer[i] = "Buzz";
		}
	}

	return answer;
};

//Solution 2

var fizzBuzz2 = function (n) {
	const answer = [];

	for (let i = 1; i <= n; i++) {
		if (i % 15 === 0) {
			answer.push("FizzBuzz");
		} else if (i % 5 === 0) {
			answer.push("Buzz");
		} else if (i % 3 === 0) {
			answer.push("Fizz");
		} else {
			answer.push(String(i));
		}
	}

	return output;
};
