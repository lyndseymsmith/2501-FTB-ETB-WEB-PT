

function convertToMeters(yards){
    return yards*0.9144;
}

function createMessage(yards, meters){
    let message = '';
    const numYards = yards * 1;

    if (numYards === 1760){
        message = "That's as long as a mile!"
    }
    else if (numYards === 100){
        message = "That's as long as a football field!"
    }
    else if (numYards === 26){
        message = "That's as long as a tennis court!"
    } 
    else if (numYards === 46145){
        message = "That's as long as a marathon!"
    }
    

    return `${yards} yards is ${ meters} meters. ${message}`;
}








//Step 3. 
//Create a variable using "let" called inputYards
//Prompt user for a yard amount to convert
let inputYards = prompt("Enter a number, we will convert that number from yards to meters");
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters);
console.log("Converted Meters: ", convertedMeters);
console.log("Input Yards: ", inputYards);
console.log(output);