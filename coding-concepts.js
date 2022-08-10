// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

// const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: The length of "LEARN 2022", which is 10.
// b) Verify and explain:

// .length counts how many characters are in the value. It also will count spaces. I can also use it an Array its not limited to a string.
// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: It would log 'o'.
// b) Verify and explain:

// It logs the letter 'o' because you are using [4] to pick the value at the 4th index. And it is using the zero index. Which starts with 'H' being 0.

// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: It would return "JavaScript".
// b) Verify and explain:
// It logged "Ruby" because each string is its own element in the Array. It would count 0,1,2,3 because of the zero-index. And the index [] is being used to insert the value of 1 from the declared variable index.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays[0,1].toUpperCase())

// a) Your answer: It would log SATURDAY, SUNDAY in the terminal
// b) Verify and explain: 
// It gave an error and didn't log as I thought it would right away because I need to pick the index. I need to specify because .toUpperCase is a string method. But the values are strings inside of an Array so I need to tell it which index when using it an a Array. .toUpperCase also capitalizes every character when used.


// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: It would tell what me data type the values in the Array are. The .length should give me how many values i have in the Array. So the output should be string, 2.
// b) Verify and explain:
// It did not give me that output because dataTypes.length is returning 2. Then the typeOf is telling us that 2 is a number data type in the terminal. I thought it would go through the values in the Array also. But the .length is just returning the length of the Array here.
