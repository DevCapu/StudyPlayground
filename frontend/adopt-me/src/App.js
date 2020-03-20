import { createElement } from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

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
