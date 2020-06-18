/* Problem: Latin Letters
• Write a function to print the Latin letters in certain range: • Receives 2 letters, each on separate line
• Prints all letters in the specified range i */

function latinLetters(startChar, endChar) {
  let startValue = startChar.charCodeAt(0);
  let endValue = endChar.charCodeAt(0);
  let result = '';
  for (let i = startValue; i <= endValue; i++) {
    result += String.fromCharCode(i) + ' ';
}
  console.log(result);
}

latinLetters('a', 'c');

latinLetters('b', 'e');

