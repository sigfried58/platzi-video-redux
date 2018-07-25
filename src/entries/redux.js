// console.log('🙊');
import { createStore, combineReducers } from 'redux';

const handleSubmit = event => {
  event.preventDefault();
  const data = new FormData(form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    type: 'ADD_SONG',
    payload: { title }
  });
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  const container = document.getElementById('playlist');
  const playlist = store.getState();
  // Reemplaza el contenido de <div> con una cadena vacía
  container.innerHTML = '';
  playlist.forEach(item => {
    const template = document.createElement('p');
    template.textContent = item.title;
    // Añadir hijo
    container.appendChild(template);
  });
}
render();

function handleChange() {
  render();
}

store.subscribe(handleChange);
