import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        let fa = "fas fa-dice-"
        let { face } = this.props;
        return (
            <div className='Die-dice'>
                <i className={fa + face}></i>
            </div>
        );
    }
}

export default Die;
