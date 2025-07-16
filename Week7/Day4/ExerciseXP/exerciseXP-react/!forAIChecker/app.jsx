// Node.js & React Introduction To React Exercises XP

//This is App.jsx file
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

//This is UserFavoriteAnimals.jsx file
import React, { Component } from 'react'

export default class UserFavoriteAnimals extends Component {
    render() {
        return (
            <>
                <ul>
                    {this.props.favAnimals.map((item, index) => {
                        return (
                            <li>Favorite animal #{index+1}: {item}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

//This is Exercise3.jsx file
import React, { Component } from 'react'
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

export default class Exercise extends Component {
    render() {
        return (
            <>
                <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a header</h1>
                <p className='para'>This is a paragraph.</p>
                <a href='https://fishman.platovich.com/'>This is a link.</a>
                <form>
                    <input type="text" placeholder='this is a form' id="formTextInput" />
                    <input type="button" value="PUSH ME NOW!" />
                </form>
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*ieewsD2l5FLfrycF.png" alt="ReactLogo" style={{ width: '100%', maxWidth: '500px' }} />
                <ol>
                    {[1, 2, 3].map((n) => (
                        <li key={n}>this is item {n}</li>
                    ))}
                </ol>
                <h1 style={style_header}>This is a styled H1-header.</h1>
            </>
        )
    }
}

//This is Exercise.css file
.para {
    background-color: #282c34;
    color: white;
    padding: 40px;
    font-family: Arial;
    text-align: center;
}