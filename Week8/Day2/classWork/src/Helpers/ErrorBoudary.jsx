import React, { Component } from 'react'

export default class ErrorBoudary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch = (error, errorInfo) => {
        console.log("error => ", error);
        console.log("errorInfo =>", errorInfo);
        // this.setState({ hasError: true });
    }

    static getDerivedStateFromError = (error) => {
        console.log("getDerivedStateFromError =>", error.message);
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) 
            return (<p>{this.props.fallback}</p>);
    }
}
