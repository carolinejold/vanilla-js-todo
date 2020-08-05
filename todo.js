const form = document.querySelector('.form');
const taskInput = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');

let state = {
  tasks: [],
};

const render = (htmlString, el) => {
  el.innerHTML += htmlString;
};


const addRemoveButton = (task) => {
  if (task.complete) {
    return `<div><button type="button"
    class="button todo__list__item__remove__btn" 
    onclick="removeTask(${task.id})">Remove</button></div>`;
  }
  return '';
};

const template = (task) => `<div
  class="todo-list__item ${task.complete && 'todo-list__item done'}"
    id="${task.id}" 
    onclick="markAsDone(${task.id})">
    <p>${task.task}</p>
    ${addRemoveButton(task)}
  </div>`;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTask = {
    task: taskInput.value,
    id: Date.now(),
    complete: false,
  };

  state.tasks = [...state.tasks, newTask];
  render(template(state.tasks[state.tasks.length - 1]), todoList);
  taskInput.value = '';
});

const loadTasks = () => {
  state.tasks.map(el => render(template(el), todoList));
};

const markAsDone = (id) => {
  const i = state.tasks.findIndex((item) => item.id === id);
  if (i !== -1) {
    state.tasks[i].complete = true;
    todoList.innerHTML = '';
    loadTasks();
  }
};

const removeTask = (id) => {
  const index = state.tasks.findIndex((item) => item.id === id);
  state.tasks.splice(index, 1);
  todoList.innerHTML = '';
  loadTasks();
};