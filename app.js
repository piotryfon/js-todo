let newTaskForm = document.querySelector(".new-task-container form"); 

let taskContainer = document.querySelector(".tasks-container ul");

document.addEventListener("DOMContentLoaded", function(){
    bindNewTaskEvents();
    showTasks();
});