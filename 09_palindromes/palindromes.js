const palindromes = function (message) {
  message = message.replaceAll(/[^A-Za-z0-9]/g, "");
  console.log(message);

  let messageReverse = "";
  for (let i = message.length - 1; i >= 0; i--) {
    messageReverse += message.charAt(i);
  }
  console.log(message + "     " + messageReverse);
  return messageReverse.toLowerCase() === message.toLowerCase();
};
palindromes("Racecar!");
// Do not edit below this line
module.exports = palindromes;
