// 1. Define 1st variable for lock combination
// 2. Define 2nd variable for lock combination
// 3. Define 3rd variable for lock combination
// 4. Create a string for the user
// 5. Create an alert to display the string which includes the lock combination


//First lock combination number (10)
const firstCombo = 5 + 5;

//Second lock combination number (40)
const secCombo = 67 - 27;

//Thirds lock combination number (39)
const thirdCombo = 13 * 3; 

//Completed string to display to user
const message = `You have received this message becuase you have been chosen to open an important vault.  Here is the secret combination: ${firstCombo} - ${secCombo} - ${thirdCombo}`;

//Alert displayed to user with message and lock combination
alert(message);