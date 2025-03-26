const mockApiUrl = "https://jsonplaceholder.typicode.com/posts"; //this is for our mock api calls (POST and DELETE since pokeApi doesn't allow those methods)
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=20"; //this is our API url, which we will use to fetch data from.

//this will be our state object that we will update after each api call.
const state = {
  allPokemon: [],
  singlePokemon: {},
  favPokemon: {},
};
const currFav = document.querySelector("#currFav");
currFav.innerHTML = `Current Fav: ${state.favPokemon.name || null}`;

/* Step 1. Select the root div and store it in a variable */

const root = document.querySelector("#root");

/* Step 2. Select the button from the HTML and store it in a variable */

const button = document.querySelector("#getButton");

/**  Step 3. Create a `render` function to display data dynamically.
 * This function will take in either an array (for all Pokémon) or an object (for a single Pokémon)
 * and update the DOM accordingly.
 *
 * @param {Array | Object} data - The Pokémon data to display
 *
 */

const render = (content) => {
  if (Array.isArray(content)) {
    content.forEach((pokemon) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
      <h1>${pokemon.name}</h1>
      <button class="getDetails" data-url="${pokemon.url}">Get Details</button>
      `;
      root.appendChild(card);
    });

    const buttons = document.querySelectorAll(".getDetails")
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        getSinglePokemon(e.target.dataset.url);
      });
    });
  } else {
    const card = document.createElement("div");
    card.classList.add('card', 'single');
    card.innerHTML = `
    <img src="${content.sprites.front_default}" alt="${content.name}>
    <h1>${content.name}</h1>
    <p>${content.height}</p>
    <p>${content.weight}</p>
    <button class="getDetails" id="goBack"> Go Back </button>
    <button class="addFav" id="addFav"> Add to Favorites </button>
    `;

    root.replaceChildren(card)

    document.querySelector("#goBack").addEventListener('click', ()=> render(state.allPokemon))

    document.querySelector('#addFav').addEventListener('click', () => addToFavorites(content))
  }
};

/* Step 4.  Write an `async` function to fetch Pokémon from the API, using `try/catch` and console.log the result. */
// 4a. test out the function both with and without async/await. What are the differences? Does it matter if we forget one of them?
/* Step 5. Parse the response with `.json()` and log the data. */
/* Step 6. Destructure the API response to extract an array of Pokémon. */
/* Step 7. Render the mapped elements. */

// async function getPokemon() {}
const getPokemon = async () => {
  try {
    const res = await fetch(baseUrl);
    console.log(res);
    const data = await res.json();
    console.log(data);

    state.allPokemon = data.results;
    console.log(state);
    render(state.allPokemon);
  } catch (error) {
    console.error("error when fetching Pokemon", error);
  }
};


/* Step 8. Inside the render function, map over the Pokémon to create a `div` with an `h1`, a "card" class, and a "Get Details" button. */

/* Step 9. Inside the render function, add an event listener to "Get Details" that calls `singlePokemon(url)`.  */

/* Step 10. Write a function to fetch a single Pokemon using `async/await` and `try/catch`. After the data is fetched, render the single pokemon */

async function getSinglePokemon(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    state.singlePokemon = data;
    render(state.singlePokemon);
  } catch (error) {
    console.error(error);
  }
}


/* Step 11. Inside the render function, create a detailed Pokémon view with a "Go Back" button. */

/* Step 13. Inside the render function, add an event listener to "Go Back" to re-render all Pokémon from state. */

/* Step 14. Write an `async` `POST` request to `mockApiUrl` to add a favorite Pokémon. */

const addToFavorites = async (pokemon) =>{
  try{
    const res = await fetch(mockApiUrl,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name:pokemon.name, id:pokemon.id})
    })
    const data = await res.json()
    console.log(data)
    state.favPokemon = data

    currFav.innerHTML = `Current Favorite is: ${state.favPokemon.name}`
    console.log(state)

  }catch(error){
    console.log(error)
  }
}

/* Step 15. Inside the render function, add an "Add to Favorites" button in `singlePokemon`. */

/* Step 16. Write an `async` `DELETE` request to remove the favorite Pokémon. */

const removeFavorite = async () =>{
  try{
    if(!state.favPokemon.id){
      return
    }
    await fetch(`${mockApiUrl}/${state.favPokemon.id}`, {
      method: 'Delete'
    })
    state.favPokemon = {}
    currFav.innerHTML = "Current Favorite is: NONE"
    console.long('removed')

  }catch(error){
    console.error(error)
  }
}

/* Step 17. Add an event listener to `currFav` to handle removal.*/
currFav.addEventListener("click", removeFavorite);

//------------------------Leave below untouched ------------------------------------
button.addEventListener("click", getPokemon);
const gottaCatchEmAll = document.querySelector("#catchEm");

gottaCatchEmAll.addEventListener("click", () => {
  document.body.style.cursor = `
  url(http://www.sherv.net/cursors/pm2.ani),
  url(http://www.sherv.net/cursors/pm2.cur),
  url(http://www.sherv.net/cursors/pm2.gif),
  auto`;
  const allBtns = window.document.querySelectorAll("button");
  allBtns.forEach((btn) => addBtnInteraction(btn));
});

function addBtnInteraction(btn) {
  if (btn.dataset.hasInteraction) return;
  btn.addEventListener("mouseover", moveAway);
  btn.addEventListener("click", moveAway);
  btn.dataset.hasInteraction = true;
  function moveAway() {
    const randX = Math.floor(Math.random() * (window.innerWidth - 150));
    const randY = Math.floor(Math.random() * (window.innerHeight - 60));
    const randRotate = Math.floor(Math.random() * 720) - 360;

    btn.style.transform = `translate(${randX}px, ${randY}px) rotate(${randRotate}deg)`;
  }
}
