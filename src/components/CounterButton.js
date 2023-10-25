import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true
        }
        return false
    }

    updateCount = () => {
        this.setState(state => {
            return { count: state.count+1}
        })
    }

    render() {
        return (
            <div>
                <button color={this.props.color} onClick={this.updateCount} id='counter'>Count: {this.state.count} </button>
                
            </div>
        )
    }
}

export default CounterButton;