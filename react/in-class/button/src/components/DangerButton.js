// components/DangerButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './DangerButton.css';

class DangerButton extends React.Component {

    state = {
        counter: 0
    }

    handleButtonClick = () => {
        console.log("button clicked");
        this.setState((oldState) => ({
            counter: (oldState.counter + 1)
        }))
    }

    render() {
        return <button onClick={this.handleButtonClick} className="danger">{this.props.label + " " + this.state.counter}</button>
    }
}

DangerButton.propTypes = {
    label: PropTypes.string.isRequired
};

export default DangerButton;