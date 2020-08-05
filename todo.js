let state = {
  tasks: [],
}

const pushTask = (text) => {
  const task = {
    text,
    completed: false,
    id: Date.now() // fix this
  }
  state.tasks.push(task);
  window.dispatchEvent(new Event('statechange'));
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.querySelector('.todoInput').value.trim();
  text === '' ? alert('Please enter a task') : pushTask(text);
});


const list = document.querySelector('.list-container');

const htmlString = state => {
  state.tasks.map(el => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(el.text));
    list.appendChild(li);
  })
}

window.addEventListener('statechange', () => {
  list.innerHTML = '';
  htmlString(state);
})
