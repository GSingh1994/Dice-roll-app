import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        let { face, shake } = this.props;
        return (
            <div className={`Die-dice ${shake && "shake"}`}>
                <i className={`fas fa-dice-${face}`}></i>
            </div>
        );
    }
}

export default Die;
