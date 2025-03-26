const state = {
  numbers: [],
  total: 0,
};

/**
   * STEP 1: Add the form dynamically to the page using DOM methods. it should look like this when completed:
   * <form>
        <label>Please enter a number</label>
        <input name="number" type="text" />
        <input type="submit" />
     </form>
   */

function init() {
  const formContainer = document.querySelector("#form");

  const form = document.createElement("form");
  const label = document.createElement("lable");
  label.textContent = "Please enter a number";
  const inputNumber = document.createElement("input");
  inputNumber.setAttribute("name", "number");
  inputNumber.setAttribute("type", "text");

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");

  form.append(label);
  form.append(inputNumber);
  form.append(submitButton);

  formContainer.append(form);
}

init();

/**
 * STEP 2: Grab the `form`, `output` and div with a class of `total`
 * from the html document and save them to variables
 */

const form = document.querySelector("form");
const output = document.querySelector("#form > output");
const total = document.querySelector(".total");

console.log(form);
console.log(output);
console.log(total);

/**
 * STEP 3: Add an event listener to the form element which will wait for
 * a submit event and call the function `addNumber`
 *
 * Listening for `submit` is almost always better than the button `click`
 */

//form.addEventListener("submit", function (event) {
//  event.preventDefault();
//  console.log("hello");
//});

form.addEventListener("submit", addNumber)

/**
 * STEP 4: Add an event listener to the total element which will wait for
 * a click event and call the function `onNumberClick`
 *
 * This function uses event bubbling:
 *      we attach the event listener to the parent so that we don't have to attach it to each child
 */

total.addEventListener("click", onNumberClick)


/**
 * STEP 5: Complete the function so that it renders an array of numbers separated by commas to the element passed
 *
 * Note: This will be used in the addNumber function
 *
 *
 * @param {Number[]} numberBank - array of integers
 * @param {Object} element - DOM element to replace the children of
 */
function renderNumbers(numberBank, element) {
  const bank = numberBank.join(", ");
  console.log(bank)
  element.innerHTML = bank

}



/**
 * STEP 6: Complete the function so that it adds the submitted number from the form into `numbers`, clears the form, and re-renders the page.
 *
 * Hint: Make sure to check it's a number before adding it into `numbers`
 *
 * Note: use renderNumbers to re-render the page
 *
 * @param {Event} event the deepest element that was clicked
 */
function addNumber(event) {
  event.preventDefault();

  const number = form.elements.number.value
  console.log(number)

  state.numbers.push(number);

  renderNumbers(state.numbers, output)
  state.total += parseInt(number)
  total.replaceChildren(state.total);

  form.elements.number.value = null;

}

/**
 * STEP 7: Complete the function so that it updates the class of the event target to `active`
 *
 * Note: There are css styles applied to this class so the style of the
 * number should toggle on and off when clicking the total number
 *
 * @param {Event} event the deepest element that was clicked
 */
function onNumberClick(event) {
  console.log(event.target);
  if(event.target.classList.contains("active")){
    event.target.classList.remove("active")
  }else{
    event.target.classList.add("active")
  }

}
