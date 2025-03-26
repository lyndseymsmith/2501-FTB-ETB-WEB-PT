const pets = [
  { name: "Norma", type: "cat", age: "12" },
  { name: "Carly", type: "cat", age: "3" },
  { name: "Bruce", type: "dog", age: "8" },
];

const newPets = [
  { name: "Buddy", type: "dog", age: "3" },
  { name: "Porky", type: "pig", age: "1" },
  { name: "Spirit", type: "horse", age: "5" },
];

function init() {
  // console.dir(document);
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */

  const root = document.querySelector("#root")
  console.dir(root)

  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Pets"
   *    Add the new h1 to the root div
   */

  const h1 = document.createElement("h1")
  console.dir(h1)

  h1.innerHTML = "Pets"
  root.append(h1)

  /**
   * 👉 STEP 3:
   *    Create and add a container div to hold our pets in
   */

  const petsContainer = document.createElement("div");
  petsContainer.id = "petsContainer";
  petsContainer.classList.add("pets");
  root.append(petsContainer);

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
  renderPets();
}

/**
 * 👉 STEP 4:
 *    Create a function to render the pets in our pets array
 */

function renderPets() {
  const container = document.querySelector("#petsContainer");
  container.innerHTML = "";

  pets.forEach((pet) => {
    const petDiv = document.createElement("div");
    petDiv.classList.add("pet");
    petDiv.innerHTML = `<span> Name: ${pet.name}</span> 
                            <span> Type: ${pet.type}</span>
                            <span> Age: ${pet.age}</span>  
        `;
    container.append(petDiv);
  });
}

/**
 * 👉 STEP 6:
 *    Create a function to add a new pet to the pets array
 */

const addPet = () => {
  const randomIndex = Math.floor(Math.random() * newPets.length)
  const newPet = newPets[randomIndex]
  pets.push(newPet)
  renderPets()
}


/**
 * 👉 STEP 7:
 *    Add an interval to add a new pet every second
 */

const add = setInterval(addPet, 1000)

setTimeout(() =>{
  clearInterval(add)
}, 10000)


//call init function
init();
