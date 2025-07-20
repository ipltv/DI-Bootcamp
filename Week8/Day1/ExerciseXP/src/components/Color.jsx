import React, { Component } from 'react'

export default class Color extends Component {
    constructor() {
        super();
        this.state = { favoriteColor: "red", show: true };
    }

    shouldComponentUpdate() {
        return true; //if false, you won’t be able to change the value of the favoriteColor property to “blue”
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.favoriteColor !== "yellow" && this.state.favoriteColor !== "yellow") {
            this.setState({ favoriteColor: "yellow" });
        }
        console.log("after update");
    }

    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }

    render() {
        return (
            <>
                <h2>My Favorite Color is {this.state.favoriteColor}</h2>
                <button onClick={() => this.setState({ favoriteColor: "blue" })}>Change fav color</button>
            </>
        )
    }
}


