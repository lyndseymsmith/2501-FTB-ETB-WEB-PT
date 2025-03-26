// You are creating a simple application that prompts the user for their name and age. 
// Using the provided age, calculate the year they were born. 
// Prompt the user for input and store their responses in two variables. 
// Perform a calculation to determine the year the user was born and store it in a third variable. 
// Finally, display a personalized greeting, including the calculated year of birth in an alert popup.

// STEPS TO COMPLETE
// 1. Prompt the user for their name
// 2. Store the name in a variable
// 3. Prompt the user for their age
// 4. Store the age in a variable
// 5. Know or store the current year
// 6. Calculate the birth year
// 7. Store the calculated year in a variable
// 8. Send the user a message with name and year of birth


//STEP 1 & 2:
const username = prompt ("What is your name?");
console.log(username);


const age = prompt("What is your age?");
console.log(age);


const year = 2025
const birthYear = year - age 

console.log(birthYear)


alert(`Hello ${username}! You were born in the year ${birthYear}`)
