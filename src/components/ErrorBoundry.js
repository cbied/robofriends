import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        
        return (
            this.state.hasError ?
            <div>
                <h1>Oh no! Something went wrong</h1>
            </div>
            :
            this.props.children
        )
        
    }
}

export default ErrorBoundry;