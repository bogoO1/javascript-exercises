const findTheOldest = function (people) {
  let oldestPerson;
  let oldestAge = -1;
  for (person of people) {
	if (typeof person.yearOfDeath !== "number") {
		person.yearOfDeath = 2023;
	}
    let age = person.yearOfDeath - person.yearOfBirth;
	console.log("age is " + age + " of " + person.name)
	if (age >= oldestAge) {
		oldestAge = age
		oldestPerson = person
	}
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
