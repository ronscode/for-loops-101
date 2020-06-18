/* Problem: Exam Countdown
•Write a function to print a "countdown to an exam":
▪ Receives an integer d: the count of days before an exam
▪ For each day d...1 prints: "{currentDay} days before the exam"
▪ At the end prints: "The exam has come"
  */

 function examCountdown(days) { 
   for (let i = days; i >= 1; i--) {
    console.log(`${i} days before the exam`); 
  }
  
  // once the for loop finishes this line executes.

    console.log('The exam has come'); 
}


  examCountdown(5);
  examCountdown(10);
