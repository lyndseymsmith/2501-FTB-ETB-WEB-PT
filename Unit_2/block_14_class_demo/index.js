
// Modify the array using various array methods:
// .pop(), .push(), .unshift(), .shift()

// As you modify the array, check the array.length to see how the array changes.

//create an array of fruits that contains "lemon", "strawberry", "grape", "orange", "lime"

const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];
console.log("Fruits Array:", fruits);

// STEP 1: console.log the length of the array
console.log("Array length is:", fruits.length);

// STEP 2: console.log the first and last items in the array
console.log("The first item in the array is:", fruits[0]);
console.log("The last item in the array is:", fruits[fruits.length -1]);

// STEP 3: Remove lime from the end of fruits array.
fruits.pop()
console.log("Fruits step 3:", fruits);

// STEP 4: Remove orange from the end of fruits array.
fruits.pop()
console.log("Fruits step 4:", fruits);

// STEP 5: Add lime to the end of the fruits array.
fruits.push("lime")
console.log("Fruits step 5:", fruits);

// STEP 6: Add banana and dragonfruit to the end of the fruits array.
fruits.push("banana", "dragonfruit");
console.log("Fruits step 6:", fruits);

// STEP 7: Remove the first fruit in the fruits array.
fruits.shift();
console.log("fruits step 7:", fruits);

// STEP 8: Add apple to the beginning of the fruits array.
fruits.unshift("apple");
console.log("fruits step 8:", fruits);

// STEP 9: Add peach and watermelon to the beginning of the fruits array.
fruits.unshift("peach", "watermelon");
console.log("fruits step 9:", fruits);

// STEP 10: Create a for loop that console.logs out the name of every fruit in the array

for(let i=0; i<=fruits.length-1; i++){
    console.log("current index", i, "current value:", fruits[i])
}
console.log("_______________________________");
/**
 * STEP 11: Create a function that console.logs the fruits at an even index, starting with the passed in index
 *
 * @param {number} index number of which element to start in the array
 */

function printEven (index) {
    for(let i=index; i<fruits.length; i++){
        if(i % 2 === 0){
            console.log(fruits[i])
        }
    }
}

printEven(0)

console.log("_________________________________")

// STEP 12: Create a while loop that console.logs the name of every fruit in the array 

let idx=0;
while(idx<fruits.length){
    console.log(fruits[idx])
    idx++
}

console.log("_________________")

/**
 *  STEP 13: Create a function to console.log the fruits at an odd index using a while loop, starting with the passed in index
 *
 * @param {number} idx number of which element to start in the array
 */

function printOdd(index){
    while(index <fruits.length){
        if(index % 2 !== 0){
            console.log(fruits[index])
        }
        index++
    }
}

printOdd(0)

  /**
 *  STEP 14: Create a function that creates a new array, containing the first and last elements in the array
 *
 * @param {array} fruits the array passed into the function
 */

 function firstAndLast(arr){
    let newArr = []
    console.log("this is the original:", arr)

    newArr.push(arr[0])
    newArr.push(arr[arr.length-1])

    return newArr
 } 

 console.log(firstAndLast(fruits))