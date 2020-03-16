<<<<<<< HEAD
import { createElement } from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return createElement('div', {}, [
    createElement('h1', {}, name),
    createElement('h2', {}, animal),
    createElement('h2', {}, breed)
=======
const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
>>>>>>> 9b8dfbdfdde0b9ee9c0cba3fb55ce0733ca709d5
  ]);
};

const App = () => {
<<<<<<< HEAD
  return createElement('div', {}, [
    createElement('h1', {}, 'Adopt Me!'),
    createElement(Pet, {
=======
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
>>>>>>> 9b8dfbdfdde0b9ee9c0cba3fb55ce0733ca709d5
      name: 'Jhow Jhow',
      animal: 'Dog',
      breed: 'Mixed'
    }),
<<<<<<< HEAD
    createElement(Pet, {
=======
    React.createElement(Pet, {
>>>>>>> 9b8dfbdfdde0b9ee9c0cba3fb55ce0733ca709d5
      name: 'Cadela',
      animal: 'Cat',
      breed: 'Mixed'
    }),
<<<<<<< HEAD
    createElement(Pet, {
=======
    React.createElement(Pet, {
>>>>>>> 9b8dfbdfdde0b9ee9c0cba3fb55ce0733ca709d5
      name: 'Blue',
      animal: 'Papagaio',
      breed: 'Arara Azul'
    })
  ]);
};

<<<<<<< HEAD
render(createElement(App), document.getElementById('root'));
=======
ReactDOM.render(React.createElement(App), document.getElementById('root'));
>>>>>>> 9b8dfbdfdde0b9ee9c0cba3fb55ce0733ca709d5
