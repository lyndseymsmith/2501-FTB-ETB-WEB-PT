//Step 1 
let dinner = {
    burger: 12,
    steak: 20,
    soup: 8, 
    mac_and_cheese: 14, 
    soup_salad: 16, 
};

//Step 2 
console.log(Object.keys(dinner));

//Step 3
console.log(Object.values(dinner));

//Step 4
let bill = 0
for(const meal in dinner){
    bill += dinner[meal];
}
console.log(bill);

//Step 5

function calculateCost(meal) {
    let total = 0;
    for(const item in meal){
        total += dinner[food];
    }
    return total;
}

console.log(calculateCost(dinner));