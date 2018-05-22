// counting poneys since 27th April 2018
import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {counter: 0};
    }

    handleIncreaseButtonClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
        console.log("increase state", this.state);
    }

    handleDecreaseButtonClick = () => {
        this.setState({
            counter: this.state.counter - 1
        });
        console.log("decrease state", this.state);
    }

    render = () => (
        <React.Fragment>
            <span>hello</span>
            <div>
                counter = {this.state.counter}
            </div>
            <button onClick = {(e) => this.handleIncreaseButtonClick(e)}>UP</button>
            <button onClick = {(e) => this.handleDecreaseButtonClick(e)}>DOWN</button>
        </React.Fragment>
    )
}

export default Counter;