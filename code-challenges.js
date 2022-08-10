// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
//func named boilingPoint 
// argument to check if boiling point <,> ,=== 212
// want to return given temps
// give parameter with console.log


const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (degrees) => {
 if ( degrees > 212) {
 return `${temp2} is above boiling point`
 } else if (degrees === 212) {
    return `${temp3} is at boiling point`
 } else if (degrees < 212) {
    return `${temp1} is below boiling point`
 }

}
 console.log(boilingPoint(temp1))
// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// use .concat and .length
// console.log
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const numbersTogether = (myNumbers1.concat(myNumbers2).length)
console.log(numbersTogether)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// use .reverse .split .join // 4 vars total
// I want to use .split first
// then reverse, join -> console.log
const currentCohort = "Echo 2022"

const splitCohort = (currentCohort.split(''))
console.log(splitCohort) 
const reverseCohort = splitCohort.reverse()
const joinCohort = reverseCohort.join('')
console.log(joinCohort)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// use a for loop
// use logical operators to check for even
// catch all for odds, could create an else if but not needed
// outputs even or odd
const myArray = [13, 34, 5, 10, 27, 42]

    for(let i =0; i < myArray.length; i++) {
        if(myArray[i] % 2 === 0) {
            console.log("Even")
        } else {
            console.log("Odd")
        }
    }
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// create function w/ new var 
// compare bigger num w/ small num > < 
// return with it subtracting big - small
// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subTotal = (numInput1,numInput2) => {
   if (numInput1 < numInput2)
 { return (numInput2 - numInput1)
 } else if (numInput1 > numInput2) {
   return numInput1 - numInput2
 }

}
console.log(subTotal(number1,number2)) ;
console.log(subTotal(number3,number4))