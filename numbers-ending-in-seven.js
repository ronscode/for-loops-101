/* Problem: Numbers Ending in 7
•Write a function to print numbers ending in 7 in given range:
•Receives a number n
•Prints all numbers from 7 to n, ending in 7
  */

 function numbersEndingInSeven(n) { 
   for (let i = 7; i <= n; i += 10) {
     console.log(i); 
   }
  }

  numbersEndingInSeven(27);
  numbersEndingInSeven(40);