const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

myInstruments.push("tuba", "bassoon");
myInstruments.splice(2,1);
myInstruments.unshift("saxophone");

console.log(myInstruments);

//Step 1
function getFirstInstrument(instruments) {
    return instruments[0];
}
console.log(getFirstInstrument(myInstruments));

//Step 2
function getLastInstrument(instruments) {
    return instruments[instruments.length-1]
}

console.log(getLastInstrument(myInstruments));

//Step 3
function getFirstAndLast(instruments) {
    const newArr = [];
    newArr.push(getFirstInstrument(instruments), getLastInstrument(instruments));
    //return instruments[0, instruments.length-1]
    return newArr;
}

console.log(getFirstAndLast(myInstruments));

//Step 4
function getFirstThree(instruments) {

}

function getLongestNamedInstrument(instruments) {
    let longestInstrument = "";
    // Here we use a for..of loop as syntactic sugar for the index loop
    for (const instrument of instruments) {
      if (instrument.length > longestInstrument.length) {
        longestInstrument = instrument;
      }
    }
    return longestInstrument;
  }
  
  console.log(getLongestNamedInstrument(myInstruments))

  function test(instr) {
    // create longest instrument
    const longest = "";
    // go through each instrument
    for (const instrument of instruments)
    // if the instrument is longer than the current longest instrument, make it new longest

    // return the longest instrument
  }