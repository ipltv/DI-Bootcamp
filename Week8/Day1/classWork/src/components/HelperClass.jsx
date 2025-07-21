import React, { Component } from 'react'

export default class HelperClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 10,
            post: []
        }
    }

    addOne = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    }

    componentDidMount = () => {
        console.log("componentDidMount");

    };

    componentDidUpdate = (prevProps, prevState) => {
        console.log("prevProps =>", prevProps);
        console.log("prevState =>", prevState);
    }

    componentWillUnmount = () => {
        // alert("nooooo");
    }

    render() {
        return (
            <>
                <h2 style={{ color: "blue" }}>Helper Class Component</h2>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={() => this.addOne()}>+</button>
            </>

        )
    }
}
