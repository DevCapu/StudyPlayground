import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return createElement('div', {}, [
  //   createElement('h1', {}, 'Adopt Me!'),
  //   createElement(Pet, {
  //     name: 'Jhow Jhow',
  //     animal: 'Dog',
  //     breed: 'Mixed'
  //   }),
  //   createElement(Pet, {
  //     name: 'Cadela',
  //     animal: 'Cat',
  //     breed: 'Mixed'
  //   }),
  //   createElement(Pet, {
  //     name: 'Blue',
  //     animal: 'Papagaio',
  //     breed: 'Arara Azul'
  //   })
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name={'Jhow'} animal={'Dog'} breed={'Mixed'} />
      <Pet name={'Cadela'} animal={'Cat'} breed={'Mixed'} />
      <Pet name={'Blue'} animal={'Papagaio'} breed={'Arara Azul'} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
