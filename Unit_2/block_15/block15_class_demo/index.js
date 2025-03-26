/**
 * STEP 1: Create an object for a user with the name Grace Hopper, phone number 1112223333, email: grace.hopper@fullstackacademy.com
 */

const user = {
  first_name: "Grace",
  last_name: "Hopper",
  phone: "1112223333",
  email: "grace.hopper@fullstackacademy.com",
};

/**
 * STEP 2: Print the object `user` using console.log and console.table
 */

console.log(user);
console.table(user);

/**
 * STEP 3: Use dot notation to get the user's first name. Print the result.
 */

console.log(user.first_name);

/**
 * STEP 4: Use bracket notation to get the user's last name. Print the result.
 */

console.log(user["last_name"]);

/**
 * STEP 5: Change the user's last name to Kelly. Print the updated last name.
 */

user.last_name = "Kelly";
console.table(user);

/**
 * STEP 6: Iterate over the user object printing each key and value pair
 */

for(const key in user){
    console.log(key)
    console.log(user[key])
}

/**
 * STEP 7: Print the result of using Object.keys on the user object
 */

console.log(Object.keys(user));

/**
 * STEP 8: Print the result of using Object.values on the user object
 */

console.log(Object.values(user));

/**
 * STEP 9: Print the result of using Object.entries on the user object
 */

console.log(Object.entries(user));

/**
 * STEP 10: Create a function called printObject that takes an object as a
 * parameter and prints each each key and value pair in the object.
 *
 * Test the function using the user object and a different object
 */

function printObject(obj) {
    for(const key in obj){
        console.log(`From Fuction ${key}, Value: ${obj[key]}`)
    }
}

printObject(user);
printObject({breed: "border collie", name: "Cora"})


/**
 * STEP 11: Create a function called addObjectProperty that takes an object, key
 * and value as parameters and returns the original object which includes the new
 * key and value pair given.
 *
 * Test the function using the user object and a different object
 */

const addObjectProperty = (obj, key, val) => {
    obj[key] = val
    return obj
}
console.table(addObjectProperty(user, "username", "ghopper"))
console.table(addObjectProperty({breed: "border collie", name: "Cora"}, "type", "dog"))

printObject (addObjectProperty(user, "username", "ghopper"))
/**
 * STEP 12: Create a function called removeObjectProperty that takes an object and
 * key as parameters and returns the original object which no longer has the
 * specificed key
 *
 * Test the function using the user object and a different object
 */

function removeObjectProperty(obj, key) {
    delete obj[key]
    return obj
}

console.table(removeObjectProperty(user, "phone"));