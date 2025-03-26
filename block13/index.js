//Write a program that prompts the user for a number in minutes, and console.log() the number in hours, and display a message based on the input time
//Complete the fuctions below to run our program!

/**
 * STEP 1
 * Write a function called convertToHours that converts the given minutes to hours.
 * @param {number} minutes 
 * @returns {number} hours
 */

function convertToHours(minutes){
    console.log(minutes)
    return (minutes/60).toFixed(2);

}



/**
 * STEP 2
 * Write a function called timeMessage returns a message based on the input time.
 * @param {number} minutes 
 * @returns {string} 
 * if less than 30 mins - "Thats a short amount of time"
 * if between 30 - 119 mins - "Thats about the length of a movie"
 * if between 120- 300 mins - "Thats a long study session!"
 * if equal to 300 or 480 - "Thats a full work day!"
 * else "Thats a lot of time!"
 */

function timeMessage(minutes){
    if(minutes < 30){
        return "That's a short amount of time"
    }
    else if(minutes >= 30 && minutes < 120){
        return "That's about the length of a movie"
    }
    else if(minutes >= 120 && minutes < 300){
        return "That's a long study session!"
    }
    else if(minutes === 300 || minutes === 480){
        return "That's a full work day!"
    }
    else{
        return "That's a lot of time!"
    }

}


  

/**
 * STEP 3
 * Write a function called createMessage that prints a helpful message to the user including the input minute to hours conversion, and the message to the user.
 * @param {number} minutes 
 * @param {number} hours 
 * @returns {string} a message containing the minutes, hours, and a message to the user
 */
  
  function createMessage(minutes, hours){
    return `${minutes} minutes is ${hours} hours. ${timeMessage(minutes)}`
  }


  // User inputs and global variables
  let inputMinutes = Number(prompt("Enter a number of minutes to convert to hours:"));
  const hours = convertToHours(inputMinutes);
  const output = createMessage(inputMinutes, hours);
  console.log(output);