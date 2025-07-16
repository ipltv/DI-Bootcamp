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
