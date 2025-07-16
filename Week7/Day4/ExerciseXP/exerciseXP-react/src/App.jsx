import { use } from 'react';
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX"</p>
      <UserFavoriteAnimals favAnimals = {user.favAnimals} />
      <Exercise />
    </>
  )
}

export default App
