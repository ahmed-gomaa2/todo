var tasksContainer = document.querySelector('.Tasks');
var taskForm = document.querySelector('.Task__form');
var taskInput = document.querySelector('.Task__input');

var todos = [
    {
        id: 1,
        title: 'Doing homework',
        done: false
    },
    {
        id: 2,
        title: 'Doing homework',
        done: false
    },
    {
        id: 3,
        title: 'Doing homework',
        done: true
    },
];

function draw(todos) {
    tasksContainer.innerHTML = '';

    todos.forEach(function(todo) {
        tasksContainer.innerHTML += `<div id=${todo.id} class="Tasks__task d-flex align-items-center p-2 border mb-2 ${todo.done && 'Task__row-done'}"}>
                                        <input ${todo.done && 'checked'} onclick= completeTask(${todo.id}) class="Task__complete mr-4" type="checkbox" >
                                        <span class="d-flex h-100 align-items-center ${todo.done ? 'Task__done' : ''}">${todo.title}</span>
                                        <i onclick=deleteTask(${todo.id}) class="Task__delete fas fa-trash-alt ml-auto text-danger d-lg-none d-block"></i>
                                    </div>`;
    });
}

function addTodo(e) {
    e.preventDefault();
    if(taskInput.value == '') return alert('Please, add title to the todo!');
    var lastTodo = todos[todos.length - 1];
    var todo = {
        id: lastTodo ? lastTodo.id + 1 : 1,
        title: taskInput.value
    }

    todos.push(todo);
    tasksContainer.innerHTML += `<div class="Tasks__task d-flex align-items-center p-2 border mb-2 ${todo.done && 'Task__row-done'}"}>
                                        <input ${todo.done && 'checked'} onclick= completeTask(${todo.id}) class="Task__complete mr-4" type="checkbox" >
                                        <span class="d-flex h-100 align-items-center ${todo.done ? 'Task__done' : ''}">${todo.title}</span>
                                        <i onclick=deleteTask(${todo.id}) class="Task__delete fas fa-trash-alt ml-auto text-danger d-lg-none d-block"></i>
                                    </div>`;
    taskInput.value = '';
}

taskForm.addEventListener('submit', addTodo);

function completeTask (id) {
    var index = todos.map((todo, index) => {
        return todo.id;
    }).indexOf(id);

    if(index != -1) {
        todos[index].done = !todos[index].done;
        draw(todos);
    }
}


function deleteTask(id) {
    var index = todos.map((todo, index) => {
        return todo.id;
    }).indexOf(id);

    if(index != -1) {
        todos.splice(index, 1);
        draw(todos);
    }
}


window.addEventListener('load' , function() {
    draw(todos)
});