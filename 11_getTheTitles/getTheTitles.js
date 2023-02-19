const getTheTitles = function(books) {
	let ans = []
	for (book of books) {
		ans.push(book.title)
	}
return ans
};

// Do not edit below this line
module.exports = getTheTitles;
