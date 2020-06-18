/* Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays: */

var arrayOfFish = [ "Bass", "Striper", "Goldfish", "Tarpon", "Shark", "Catfish" ]

var text = "";
var textForLoop = "";

text += arrayOfFish[0] + "<br>";
text += arrayOfFish[1] + "<br>";
text += arrayOfFish[2] + "<br>";
text += arrayOfFish[3] + "<br>";
text += arrayOfFish[4] + "<br>";
text += arrayOfFish[5] + "<br>";

console.log(text)


/*

The For Loop to the rescue!

The for loop has the following syntax:

  for (statement 1; statement 2; statement 3) {
    // code block to be executed
  }

  -Statement 1 is executed (one time) before the execution of the code block. 

  -Statement 2 defines the condition for executing the code block.

  -Statement 3 is executed (every time) after the code block has been executed.

*/

for (i = 0; i < arrayOfFish.length; i++) {
  textForLoop += arrayOfFish[i] + "<br>";
} 

console.log("For Loop: " + textForLoop)

/* From the example above, you can read:

Statement 1 sets a variable before the loop starts (var i = 0). Normally you will use statement 1 to initialize the variable used in the loop (i = 0). Is optional. 

Statement 2 defines the condition for the loop to run (i must be less than the length of items in the array).

Often statement 2 is used to evaluate the condition of the initial variable. Statement 2 is also optional. If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

Statement 3 increases a value (i++) each time the code block in the loop has been executed. Often statement 3 increments the value of the initial variable. Also optional. */



