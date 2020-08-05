// CHANGE THE DYNAMIC CREATION OF ELEMENTS TO HTML BLOCK. Then can add onclick functionalty
// TODO - mark as done based on state rather than eventlistener

const form = document.querySelector('form');
const list = document.querySelector('.list-container');
const listItem = document.querySelector('.list-item__card');
const input = document.querySelector('.todoInput');

let state = {
  tasks: [
  ],
}

const pushTask = (text) => {
  const task = {
    text,
    completed: false,
    id: Date.now() // fix this
  }
  state.tasks.push(task);
  console.log(state.tasks);
  window.dispatchEvent(new Event('statechange'));
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.querySelector('.todoInput').value;
  text.trim();
  text === '' ? alert('Please enter a task') : pushTask(text);
});


const htmlString = state => {
  state.tasks.map(el => {
    const section = document.createElement('section');
    section.className = 'list-item__card';
    section.id = el.id;
    // section.onclick = markAsDone(section.id);
    const li = document.createElement('li');
    li.className = 'list-item__text';
    li.appendChild(document.createTextNode(el.text));
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox'
    const label = document.createElement('label');
    label.htmlFor = 'checkbox';
    section.appendChild(checkbox);
    section.appendChild(label);
    section.appendChild(li);
    list.appendChild(section);
  })
}

// const markAsDone = (sectionId) => {
//     // the state.tasks.completed of the state.tasks.stateID = true
// }
if (typeof(listItem) != 'undefined' && listItem != null) {
  listItem.addEventListener('click', () => {
    listItem.classList.add = 'complete';
  })
}


window.addEventListener('statechange', () => {
  list.innerHTML = '';
  htmlString(state);
})

