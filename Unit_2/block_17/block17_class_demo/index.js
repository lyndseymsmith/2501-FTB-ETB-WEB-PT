// A class to represent a pet
console.log({})

class Pet {
    constructor(name, species) {
      this.name = name; // The name of the pet
      this.species = species; // The species of the pet
      this.energy = 100; // Default energy level
    }

  
    /**
     * 👉 STEP 1: Add a method to the pet class called `eat` that increases the pet's energy based on the amount of food provided. The method should print to the console
     * "Thor ate and gained 10 energy. Current energy: 20"
     *
     * @param {Number} foodAmount
     *
     */
  
    eat(foodAmount){
        this.energy = this.energy + foodAmount
        console.log(`${this.name} ate and gained ${foodAmount} energy. Current Energy: ${this.energy}`);
    }

    /**
     * 👉 STEP 2: Add a method to the pet class called `play` that decreases the energy of the pet.
     *
     * The function calcualtes the energy spent which is the time given times 10
     *
     * It should print `Thor is too tired to play for 10 mins` if the energySpent is greater than the pet's current energy
     *
     * Otherwise it should decrease the energySpent from the pet's energy and print to the console `Thor played for 10 minutes and now has 5 energy left.
     *
     * @param {Number} time
     */
  
    play(time){
      const energySpent = time * 10;
      if(energySpent > this.energy) {
        console.log(`${this.name} is too tired to play for ${time} minutes.`)
      }else{
        this.energy -= energySpent
        console.log(`${this.name} played for ${time} minutes and has ${this.energy} left.`);
      }
    }

    /**
     * 👉 STEP 3:  Add a method to the pet class called `checkEnergy` that checks the pet energy level. It prints `Thor, the dog, has 10 energy` when called
     */

    checkEnergy() {
      console.log(`${this.name}, the ${this.species}, has ${this.energy} energy`)
    }
  }
  


  // Create an instance of the Pet class

const dog = new Pet("Cora", "dog");
dog.eat(50)
dog.toy = "ball"
dog.play(15)
dog.checkEnergy()

console.log(dog)



  
  // A class to represent a shelter
  class Shelter {
    constructor(name) {
      this.name = name;
      this.pets = [];
    }
  
    /**
     * 👉 STEP 4: Add a method to the shelter class called `addPet` that adds the given pet to the list of pets the shelter has
     * @param {Object} pet
     */
  
    add(pet){
      this.pets.push(pet);
      console.log(`${pet.name} the ${pet.species} was added to ${this.name}.`)
    }

    /**
     * 👉 STEP 5: Add a method to the shelter class called `listPets` that prints the pets to the console.
     *
     * Example
     * "Pets at Animal Rescue:"
     * "Name: Bella, Species: cat, Energy: 10"
     * "Name: Cerberus, Species: dog, Energy: 20"
     *
     */

    listPets() {
      this.pets.forEach((pet)=>{
        console.log(`Name: ${pet.name}, Species: ${pet.species}, Energy: ${pet.energy}`)
      })
    }

  }
  
  //create pets for our shelter

const buddy = new Pet("Buddy", "dog");
console.log(buddy);
const norma = new Pet("Norma", "cat");
console.log(norma);
const jack = new Pet("Jackalope", "cat")

const shelter = new Shelter("Animal Rescue");
  shelter.add(buddy);
  shelter.add(norma);
  shelter.listPets();
console.log(shelter);


const spca = new Shelter("SPCA");
  shelter.add(jack);
  
  