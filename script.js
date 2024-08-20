document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText} 
        <button class="delete">Eliminar</button>
    `;

    taskList.appendChild(li);

    li.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskInput.value = '';
}
