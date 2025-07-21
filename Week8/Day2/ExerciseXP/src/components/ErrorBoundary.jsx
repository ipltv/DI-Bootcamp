import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch = (error, errorInfo) => {
        console.log("error => ", error);
        console.log("errorInfo =>", errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError)
            return (<p>{this.props.fallback}</p>);
        return this.props.children;
    }
}
