import { createElement } from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return createElement('div', {}, [
    createElement('h1', {}, name),
    createElement('h2', {}, animal),
    createElement('h2', {}, breed)
  ]);
};

const App = () => {
  return createElement('div', {}, [
    createElement('h1', {}, 'Adopt Me!'),
    createElement(Pet, {
      name: 'Jhow Jhow',
      animal: 'Dog',
      breed: 'Mixed'
    }),
    createElement(Pet, {
      name: 'Cadela',
      animal: 'Cat',
      breed: 'Mixed'
    }),
    createElement(Pet, {
      name: 'Blue',
      animal: 'Papagaio',
      breed: 'Arara Azul'
    })
  ]);
};

render(createElement(App), document.getElementById('root'));
