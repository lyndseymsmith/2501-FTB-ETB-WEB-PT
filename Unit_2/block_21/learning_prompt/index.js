// const counter = document.querySelector("#counter")
// const p = document.createElement("p")
// const count = 0;
// p.innerHTML = `Count is: ${count}`;
// counter.append(p);

// //buttons
// const clickMe = document.createElement("button")
// clickMe.textContent = "Click Me";

// const reset = document.createElement("button")
// reset.textContent = "Reset";

// counter.append(clickMe, reset);

// clickMe.addEventListener("click", function (event) {
//    count += 1
//    p.innerHTML = `Count is: ${count}`
//     event.preventDefault();
// })

const state = {
    random: [],
    total: 0 ,
}

function init () {
    const root = document.querySelector('#root')
    const clickMe = document.createElement ("button")

clickMe.innerHTML = "clickMe"
clickMe.id = "clickMe"

root.append (clickMe)

const reset = document.createElement ("button")

reset.innerHTML = "reset"
root.append(reset)

const container = document.createElement("div")
root.append(container)

}
init()
const clickMe = document.querySelector("#clickMe")
clickMe.addEventListener("click", function(){
    state.total += 1
    console.log(state.total)
})
