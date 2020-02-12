import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'
class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
        this.randomNum = this.randomNum.bind(this);
    }
    randomNum() {
        this.setState({ num: Math.floor(Math.random() * 6) })
    };
    render() {
        let numArray = ['one', 'two', 'three', 'four', 'five', 'six'];
        return (
            <div>
                <Die face={numArray[this.state.num]} />
                <button onClick={this.randomNum} className='RollDice-btn'>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;