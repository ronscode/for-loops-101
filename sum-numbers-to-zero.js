/* Problem: Sum Numbers Until 0
▪ Write a function to process numbers from the input parameters and print their sum until 0 is reached
  */

function sumNumsUntil0(nums) { 
  let sum = 0;
  for (;;) {
    let num = nums.shift(); if (num == 0) 
    break;
    
    sum += num; console.log(`Sum = ${sum}`);
  }
    console.log('Good bye'); 
}

sumNumsUntil0([5, 3, 2, 0]);

