function showTasks(){
    tasks.forEach(function(title){
        console.log(title)
        addNewTask(title)
    })
}