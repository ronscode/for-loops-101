/* Problem: Biggest Number
• Write a function to find the biggest among given n numbers: • Receives n (the amount of input numbers) and n numbers
• Finds and prints the biggest number
  */

 function biggestNumber(n, numbers) { let max = -Infinity;
  for (let i = 0; i <= n; i++) {
  let number = numbers.shift(); if (number > max) {
  max = number; }
  }
  console.log(max); }

  biggestNumber(
    3, [40, 5, 90]);

  biggestNumber(
    2, [-90, -40]);

