// function addTask() {
//     var taskInput = document.getElementById('task');
//     var taskList = document.getElementById('taskList');
//     var newTask = document.createElement('li');
//     newTask.appendChild(document.createTextNode(taskInput.value));
//     taskList.appendChild(newTask);
//     taskInput.value = "";
// }


function addTask() {
    var taskInput = document.getElementById('task');//input
    var taskList = document.getElementById('taskList');//ul
    var newTask = document.createElement('li');//li
    var taskName = taskInput.value;
    var taskText = document.createTextNode(taskName);
    newTask.appendChild(taskText);
    taskList.appendChild(newTask);
    
    // Check if the task is completed or not
    newTask.addEventListener('click', function() {
        if (newTask.classList.contains('completed')) {
            newTask.classList.remove('completed');
            newTask.style.color = "black"; // Change the text color back to black
            alert(taskName + " vazifasi hali bajarmagan");
        }
        else if(newTask === ''){
            alert("You didn't write the habit");
        }
         else {
            newTask.classList.add('completed');
            newTask.style.color = "red"; // Change the text color to red when completed
            alert(taskName + " vazifasi bajargan");
        }
    });

    taskInput.value = "";
}