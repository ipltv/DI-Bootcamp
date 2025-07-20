import React, { Component } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import BuggyCounter from './components/BuggyCounter'
import Color from './components/Color'

export default class App extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <h2>Simulation 1:</h2>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <h2>Simulation 2:</h2>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary >
        <h2>Simulation 3:</h2>
        <BuggyCounter />

        <Color />
        
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete</button>
      </>
    )
  }
}

export class Child extends Component {
  componentWillUnmount() {
    alert("The component named Child is about to be unmounted.")
  }
  render() {
    return (
      <h2>Hello World!</h2>
    )
  }
}
