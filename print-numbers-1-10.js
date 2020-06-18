/*
Problem: First N Numbers Sum
• Write a function, which sums the numbers 1...N: • Receive number n from the input
• Sums all numbers from 1 to n
• Prints the sum on the console as shown below:
 
*/

function sumFirstNumbers(n) { let sum = 1;
  let result = '1';
  for (let i = 2; i <= n; i += 1) {
  result = result + '+' + i;
  sum += i; }
  result = result + '=' + sum;
  console.log(result); }

  sumFirstNumbers(5);
  sumFirstNumbers(7);
  sumFirstNumbers(9);
  