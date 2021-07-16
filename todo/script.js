var tasks = []

function addNewTask() {
    var taskField = document.getElementById("task-input")
    if (taskField.value) {
        tasks.push({text: taskField.value, isComplete: false});
        addTasksToHTML()
        taskField.value = ""
    }
}

function addTasksToHTML() {
    var targetDiv = document.getElementById("tasks")
    targetDiv.innerHTML = ""
    for (var task of tasks) {
        var taskElement = document.createElement("div")
        taskElement.className = "task"
        taskElement.innerHTML = `
            <input type="checkbox" onclick="completeTask(event, ${task.text})">
            <div class="${task.isComplete ? 'is-complete' : ''}">${task.text}</div>
            <button onclick="deleteTesk()">Delete</button>
        `
        targetDiv.appendChild(taskElement)
    }
}

function completeTask(event, text) {
    tasks = tasks.map(function (item) {
        if (item.text === text) {
            item.isComplete = event.target.checked
        }
    })
    addTasksToHTML()
}

addTasksToHTML()