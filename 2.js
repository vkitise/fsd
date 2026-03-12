const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a string: ", function(str) {
  console.log("Length of the string:", str.length);
  if (str.includes("JavaScript")) {
    console.log("Extracted word: JavaScript");
  } else {
    console.log("Word 'JavaScript' not found in the string.");
  }
  let newStr = str.replace("JavaScript","JavaScript lab program");
  console.log("New string after replacement:", newStr);
  let rev = str.split("").reverse().join("");
  if (str === rev)
    console.log("Is the string a palindrome? true");
  else
    console.log("Is the string a palindrome? false");
  rl.close();
});
