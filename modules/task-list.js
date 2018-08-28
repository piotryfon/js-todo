function showTasks(){
    tasks.forEach(function(title){
        console.log(title)
        addNewTask(title)
    })
}

function toggleTaskComplete(task){
    task.classList.toggle("btn-success")
}
function deleteTask(){

}