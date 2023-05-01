function isPalindrome(word) {
	// Remove spaces and punctuation from the input string
	word = word.replace(/[^0-9a-z]/gi, "").toLowerCase();

	// Loop through the string and check if the characters match
	for (let i = 0; i < Math.floor(word.length / 2); i++) {
		const leftChar = word[i];
		const rightChar = word[word.length - 1 - i];
		if (leftChar !== rightChar) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Rats live on in bunkers"));
console.log(isPalindrome("Step on no pets"));
console.log(isPalindrome("Mr. Owl ate my metal worm"));
