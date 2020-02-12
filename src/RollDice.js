import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'
class RollDice extends Component {
    static defaultProps = {
        numArray: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {
            num1: 'six',
            num2: 'six'
        };
        // this.roll = this.roll.bind(this);
    }
    roll = () => {
        this.setState({
            num1: this.props.numArray[Math.floor(Math.random() * this.props.numArray.length)],
            num2: this.props.numArray[Math.floor(Math.random() * this.props.numArray.length)]
        })
    };
    render() {
        return (
            <div>
                <Die face={this.state.num1} />
                <Die face={this.state.num2} />
                <button onClick={this.roll} className='RollDice-btn'>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;