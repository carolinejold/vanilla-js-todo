let state = {
    tasks: [],
}

const pushTask = (text) => {
    const task = {
        text,
        completed: false,
        id: Date.now() //fix this
    }
    console.log(state.tasks)
    state.tasks.push(task);
    console.log(state.tasks)
    appendToDom(task);
}

// below, should i iterate over the state array and add the latest addition rather than attaching one at a time?
const appendToDom = (task) => {
  const li = document.createElement('li')
  li.className = 'list-item';
  li.appendChild(document.createTextNode(task.text));
  document.querySelector('.list-container').appendChild(li);
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.querySelector('.todoInput').value.trim();
  pushTask(text);
});
