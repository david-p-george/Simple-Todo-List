const form = document.querySelector('form');
const input = document.querySelector("[name='todo']");
const reset = document.querySelector("[class='reset-btn']");
const todoList = document.querySelector('#todo-list');

const existingTodos = JSON.parse(localStorage.getItem('todoList'));

const todoData = existingTodos || [];

todoData.forEach(todo => {
    addTodo(todo);
})

function addTodo(todoText) {
    todoData.push(todoText);

    const li = document.createElement('li');
    li.innerHTML = todoText;
    todoList.appendChild(li);

    localStorage.setItem('todoList', JSON.stringify(todoData))
}

form.onsubmit = (event) => {
    event.preventDefault();

    addTodo(input.value);
    input.value = '';
}

reset.addEventListener('click', () => {
    todoList.innerHTML = '';
    localStorage.removeItem('todoList');
})