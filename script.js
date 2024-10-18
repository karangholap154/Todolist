function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value;
    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }
    var taskItem = document.createElement("li");
    var taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("change", function() {
        if (taskCheckbox.checked) {
            moveTaskToCompleted(taskItem);
        }
    });
    var taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;
    var incompleteTaskNumber = document.querySelectorAll("#incomplete-tasks-list li").length + 1;
    taskItem.textContent = `${incompleteTaskNumber}. `;
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(taskCheckbox);
    document.getElementById("incomplete-tasks-list").appendChild(taskItem);
    taskInput.value = "";
}
function moveTaskToCompleted(taskItem) {
    var completedTasksList = document.getElementById("completed-tasks-list");
    var incompleteTasksList = document.getElementById("incomplete-tasks-list");
    var taskLabel = taskItem.querySelector("label").textContent;
    var completedTaskNumber = document.querySelectorAll("#completed-tasks-list li").length + 1;
    var completedTaskItem = document.createElement("li");
    completedTaskItem.textContent = `${completedTaskNumber}. ${taskLabel}`;
    completedTasksList.appendChild(completedTaskItem);
    taskItem.remove();
    updateTaskNumbers("#completed-tasks-list");
}
function updateTaskNumbers(listSelector) {
    var tasksList = document.querySelectorAll(listSelector + " li");
    for (var i = 0; i < tasksList.length; i++) {
        tasksList[i].textContent = (i + 1) + ". " + tasksList[i].textContent.slice(tasksList[i].textContent.indexOf(' ') + 1);
    }
}