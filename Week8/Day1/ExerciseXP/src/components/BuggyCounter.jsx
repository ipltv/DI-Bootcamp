import React, { Component } from 'react'


export default class BuggyCounter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        if (this.state.counter > 5) {
            throw new Error("I crashed!");
        }
        return (
            <>
                <div onClick={this.handleClick}>BuggyCounter: {this.state.counter}</div>
            </>
        )
    }
}
