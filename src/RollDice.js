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
            num2: 'six',
            isRolling: false
        };
    }
    roll = () => {
        this.setState({
            isRolling: true
        })
        setTimeout(() => {
            this.setState({
                num1: this.props.numArray[Math.floor(Math.random() * this.props.numArray.length)],
                num2: this.props.numArray[Math.floor(Math.random() * this.props.numArray.length)],
                isRolling: false
            })
        }, 1000);
    };
    render() {
        return (
            <div>
                <div className="Rolldice-face">
                    <Die face={this.state.num1} shake={this.state.isRolling} />
                    <Die face={this.state.num2} shake={this.state.isRolling} />
                </div>
                <div className="RollDice-btn">
                    <button onClick={this.roll} disabled={this.state.isRolling}>
                        {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
                    </button>
                </div>

            </div>
        );
    }
}

export default RollDice;