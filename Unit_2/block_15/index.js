const string = prompt("Please enter a list of grocery items separated by commas:", "milk, eggs, bread, cheese");

const groceries = string.split(",")

console.log(groceries.length)

console.log("First Item:", groceries[0]);
console.log("Last Item:" , groceries[groceries.length-1]);

groceries.pop();
groceries.push("bananas");
console.log(groceries);

groceries.shift();
groceries.unshift("bluebs");
console.log(groceries);
