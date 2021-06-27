// What are Floops ? For Loops are similar to while loops, but instead of testing a condition, we're specifying the number of times that we want the loop to run.

////  Example for loop code ////

//  for (var i=1; i<2; i++) {
  // console.log(i);
// }

// Syntax Breakdown //

// beginning with the for keyword

// the first statement in the parentheses, is defining the starting point in the for loop. So in this example code. we're starting at 1. 

// the next step is defining the end point, so we're ending when i is less than 2. 

// the last step we tell the loop what is the change, or which direction are we changing i. Is i increasing by 1 each time?, or you can increase it by 2, or 3 or you can even decrease i. 

// so when creating a for loop we define the starting point, ending point, & how much i is going to change, & the code that should be carried out every single time the loop runs. 


///////////////// For Loop Further Breakdown //////////////////////


// in our example the computer will run i = 1; and create a variable i & set it to equal 1.

// then it reaches the second part of the for loop where it check to see whether the current value of i is less than 2, & 1 is in fact less than 2. So it then proceeded to run the code inside the curly braces. which in out case is console.log(i);

// once it reaches the end of the for loop this is when the third value in the for loop is caried out. i++ which in this case i is incremented by 1 so i is now equal to 2. 

// Now the code loops back to run the for loop again, and it then first checks whether if it should continue running the loop. So currently i = 2 and 2 is not less than 2. So the conditions are not met and the code exits the for loop and instead goes to the next line. 

///////////////////// Lets now test this on a familiar FizzBuzz program./////////////////// 



var output = [];
// var count = 1; added this inside the parentheses as first staetment

function fizzBuzz() {
    // while(count <= 100) Changed he keyword from while to for loop
    for(var count = 100; count > 1; count--) {
    if (count % 3 === 0 && count % 5 === 0){
              output.push("FizzBuzz");
            } else if (count % 3 === 0){
              output.push("Fizz");
            } else if (count % 5 === 0 ){
              output.push("Buzz");
            } else {
              output.push(count);
            }
        // count++; added this as the third statement in the parentheses. 
      }
    console.log(output);
}
fizzBuzz();


// If we run the code we get the same result with the while loop, but its less wordy, more concise, and this is the format most progammers will prefer for a use case like this.

/////////////////  when to use while loop or for loop ?   ////////////////

//  keep in mind while is essentially checking for a state, so its while something is true. for example while player one is still alive. So essentially you want to repeatedly run an instruction while the program is in a certain state. 

// And for the for loop you're essentially trying to iterate, meaning you're tryng to run a peice of code many many times and you're going to use the for loop to define how many times exactly.

//  So with enough practice you'll naturally gravitate toward one or the other type of loops while you're writing code with different purposes. 
