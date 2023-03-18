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
                                        <i onclick=deleteTask(${todo.id}) class="Task__delete fas fa-trash-alt ml-auto text-danger opacity-25"></i>
                                    </div>`;
    });
}

function addTodo(e) {
    e.preventDefault();
    console.log(taskInput.value);
    if(taskInput.value == '') return alert('Please, add title to the todo!');
    var todo = {
        id: todos[todos.length - 1].id + 1,
        title: taskInput.value
    }

    console.log(todo);

    todos.push(todo);
    tasksContainer.innerHTML += `<div class="Tasks__task d-flex align-items-center p-2 border mb-2 ${todo.done && 'Task__row-done'}"}>
                                        <input ${todo.done && 'checked'} onclick= completeTask(${todo.id}) class="Task__complete mr-4" type="checkbox" >
                                        <span class="d-flex h-100 align-items-center ${todo.done ? 'Task__done' : ''}">${todo.title}</span>
                                        <i onclick=deleteTask(${todo.id}) class="Task__delete fas fa-trash-alt ml-auto text-danger opacity-25"></i>
                                    </div>`;
    console.log(todos)
}

taskForm.addEventListener('submit', addTodo);

draw(todos);

function completeTask (id) {
    console.log(id);
    var index = todos.map((todo, index) => {
        return todo.id;
    }).indexOf(id);

    console.log(index);

    console.log(todos);
    if(index != -1) {
        todos[index].done = !todos[index].done;
        draw(todos);
    }
}


function deleteTask(id) {
    console.log(id);
    var index = todos.map((todo, index) => {
        return todo.id;
    }).indexOf(id);

    console.log(index);

    console.log(todos);
    if(index != -1) {
        todos.splice(index, 1);
        draw(todos);
    }
}
