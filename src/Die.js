import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

    render() {
        let fa = "fas fa-dice-"
        let { face } = this.props;
        return (
            <div>
                <div className='Die-dice'>
                    <i className={fa + face}></i>
                </div>
            </div>
        );
    }
}

export default Die;
