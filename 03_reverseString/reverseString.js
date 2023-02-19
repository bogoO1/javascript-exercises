const reverseString = function(string) {

	let answer = ""
	
	let charString = string.slice()

	for (let i=charString.length-1; i >= 0; i --){
		answer += charString[i]
	}
	
	return answer

};

// Do not edit below this line
module.exports = reverseString;
