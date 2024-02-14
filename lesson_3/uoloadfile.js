// Selecting elements
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText === '') return;

        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);

        input.value = '';
    });

    function createTodoItem(text) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.textContent = text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '⌫';
        deleteButton.style.color = 'red';
        deleteButton.classList.add('delete-btn');

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                span.classList.add('done');
            } else {
                span.classList.remove('done');
            }
        });

        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        return li;
    }
});