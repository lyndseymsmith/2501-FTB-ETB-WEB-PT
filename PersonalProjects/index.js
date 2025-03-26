const tasks= [];

const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

console.log("Form: ", form);
console.log("Input: ", input);
console.log("Task List: ", taskList);

//What happens when the user clicks 'submit'?

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    console.log("User enterd task: ", taskText);

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false});
        console.log("Current ta0sks: ", tasks);
        updateTaskList();
        input.value = ""
    }else {
        console.log("Empty task ignored");
    }
})

//Updating the Task List

function updateTaskList() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            console.log(`Toggle task ${index}: `, tasks[index]);
            updateTaskList();
        })

        taskList.appendChild(li);
    })

    console.log("Updated task list in the DOM")
}


