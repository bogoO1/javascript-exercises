const repeatString = function (string, numRepeat) {
	if (numRepeat < 0) {
		return "ERROR"
	}
	let answer = ""
	for (let i = 0; i < numRepeat; i++) {
		answer += string;
	}
	return answer
};

// Do not edit below this line
module.exports = repeatString;
