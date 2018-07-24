// console.log('🙊');
import { createStore, combineReducers } from 'redux';

const handleSubmit = event => {
  event.preventDefault();
  const data = new FormData(form);
  const title = data.get('title');
  console.log(title);
};

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const initialState = [
  {
    title: 'Despacito'
  },
  {
    title: 'One more time'
  },
  {
    title: 'Echame la culpa'
  }
];

const store = createStore(
  state => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById('playlist');
const playlist = store.getState();

playlist.forEach(item => {
  const template = document.createElement('p');
  template.textContent = item.title;
  // Añadir hijo
  container.appendChild(template);
});

console.log(store.getState());
