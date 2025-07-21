import { useState } from 'react'
import './App.css'
import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    }
  }
  async componentDidMount() {
    const response = await fetch("/api/hello");
    const { message } = await response.json();
    this.setState({ title: message })
  }

  async makePOST(e) {
    e.preventDefault();
    const message = e.target.elements.userInput.value;
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        message: message
      })
    })
    console.log("ok", response);
  }

  render() {
    return (
      <>
        <h2>{this.state.title}</h2>
        <h1>POST to server</h1>
        <form onSubmit={(e) => this.makePOST(e)}>
          <input type="text" name='userInput' />
          <input type="submit" />
        </form>
      </>
    )
  }
}

