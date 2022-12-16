//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//Each letter in magazine can only be used once in ransomNote.

//Solution 1

var canConstruct1 = function (ransomNote, magazine) {
	let arrMagazine = magazine.split("");
	for (const char of ransomNote) {
		const index = arrMagazine.indexOf(char);
		if (index >= 0) {
			arrMagazine.splice(index, 1);
		} else {
			return false;
		}
	}
	return true;
};

//Solution 2 (HashMap)

var canConstruct2 = function (ransomNote, magazine) {
	const mMap = new Map();

	for (let i = 0; i < magazine.length; i++) {
		mMap.set(magazine[i], (mMap.get(magazine[i]) ?? 0) + 1);
	}

	for (let j = 0; j < ransomNote.length; j++) {
		if (!mMap.has(ransomNote[j]) || mMap.get(ransomNote[j]) <= 0) {
			return false;
		}

		mMap.set(ransomNote[j], (mMap.get(ransomNote[j]) ?? 0) - 1);
	}

	return true;
};
