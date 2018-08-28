function addNewTask(title){
    let taskLi = document.createElement("li");
    taskLi.classList.add("single-task")
    taskLi.innerHTML = prepareTaskHTML(title);

    let toggleCompleteBtn = taskLi.querySelector(".toggle-complete-btn");
let deleteBtn = taskLi.querySelector(".delete-task-btn");

toggleCompleteBtn.addEventListener("click", function(){
    toggleTaskComplete(this);
});
deleteBtn.addEventListener("click", function(){
    deleteTask(this);

});
    taskContainer.appendChild(taskLi);
}

function prepareTaskHTML(title){
    return(
        `<div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>
            </span>
            <input type="text" class="form-control" placeholder="Tytuł zadania..." value="${title}">
            <span class="input-group-btn">
                <button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>
            </span>
        </div>`
        )
}

function bindNewTaskEvents(){
    newTaskForm.addEventListener("submit", function(e){
        e.preventDefault();
        let title = this.querySelector("input").value;
        if(title){
        addNewTask(title);
        }
    });
}