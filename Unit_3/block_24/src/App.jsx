import { useState } from "react";
import "./App.css";

function App() {
  const [pets, setPets] = useState([
    { id: 1, name: "Mo", type: "cat", age: "18" },
    { id: 2, name: "Cora", type: "dog", age: "1" },
    { id: 3, name: "Jackalope", type: "cat", age: "6" },
  ]);

  const [newPets, setNewPets] = useState([
    { id: 4, name: "Steve", type: "dog", age: "3" },
    { id: 5, name: "Merv", type: "cat", age: "2" },
    { id: 6, name: "Bear", type: "cat", age: "5" },
  ]);


  const addPet = ()=>{
    const newPet = newPets.shift();
    setPets([...pets, newPet]);
    setNewPets([...newPets]);
  }

  return (
    <div>
      <h1>Pets from React!</h1>
      {
        newPets.length === 0 ? 
        <p>No More Pets</p> :
        <button onClick={addPet}>Add a Pet</button>
      }

      <div id="petsContainer">
        {pets.map((pet) => {
          return (
            <div className="pets" key={pet.id}>
              <h2>
                <strong>Name: </strong>
                {pet.name}
              </h2>
              <p>
                <strong>Type: </strong>
                {pet.type}
              </p>
              <p>
                <strong>Age: </strong>
                {pet.age}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
