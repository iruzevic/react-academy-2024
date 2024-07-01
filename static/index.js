let mockTodos = [
	{
		title: 'Learn HTML',
		done: true,
	},
	{
		title: 'Learn CSS',
		done: true,
	},
	{
		title: 'Learn JS',
		done: false,
	},
];

function saveToLocalStorage(todoList) {
	localStorage.setItem('todo-list', JSON.stringify(todoList));
}

function loadFromLocalStorage() {
	const todoList = localStorage.getItem('todo-list');

	if (todoList) {
		return JSON.parse(todoList);
	}
}

function renderTodoList() {
	const todoListElement = document.getElementById('todo-list');
	todoListElement.innerHTML = '';

	mockTodos.forEach((todo) => {
		todoListElement.appendChild(createTodoItem(todo));
	});

	saveToLocalStorage(mockTodos);
}

function createTodoItem(todo) {
	const todoItemElement = document.createElement('div');
	todoItemElement.classList = ['todo-item'];

	const todoItemCheckboxElement = document.createElement('input');
	todoItemCheckboxElement.type = 'checkbox';
	todoItemCheckboxElement.checked = todo.done;
	todoItemCheckboxElement.onchange = () => {
		todo.done = !todo.done;
		renderTodoList();
	}
	todoItemElement.appendChild(todoItemCheckboxElement);

	const todoItemTextElement = document.createElement('span');
	todoItemTextElement.textContent = todo.title;
	todoItemElement.appendChild(todoItemTextElement);

	const todoItemDeleteButton = document.createElement('button');
	todoItemDeleteButton.textContent = 'Delete';
	todoItemDeleteButton.onclick = () => {
		mockTodos = mockTodos.filter((t) => t !== todo);
		renderTodoList();
	}
	todoItemElement.appendChild(todoItemDeleteButton);

	return todoItemElement;
}

const addButtonHandler = () => {
	const todoListInputElement = document.getElementById('todo-input');

	mockTodos.push({
		title: todoListInputElement.value,
		done: false,
	});

	renderTodoList();

	todoListInputElement.value = '';
}

mockTodos = loadFromLocalStorage();
renderTodoList();
