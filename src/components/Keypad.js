import React, { Component } from 'react'

class Keypad extends Component {
    buttonClick = e => {
        this.props.buttonClick(e.target.name)
    }
    render() {

        return (
            <div className="buttons">

                <div className="row">
                    <button name="(" onClick={this.buttonClick}>(</button>
                    <button name=")" onClick={this.buttonClick}>)</button>
                    <button name="DEL" onClick={this.buttonClick}>DEL</button>
                    <button name="AC" onClick={this.buttonClick}>AC</button>
                </div>
                <div className="row">
                    <button name="7" onClick={this.buttonClick}>7</button>
                    <button name="8" onClick={this.buttonClick}>8</button>
                    <button name="9" onClick={this.buttonClick}>9</button>
                    <button name="/" onClick={this.buttonClick}>/</button>
                </div>
                <div className="row">
                    <button name="4" onClick={this.buttonClick}>4</button>
                    <button name="5" onClick={this.buttonClick}>5</button>
                    <button name="6" onClick={this.buttonClick}>6</button>
                    <button name="*" onClick={this.buttonClick}>X</button>
                </div>

                <div className="row">
                    <button name="1" onClick={this.buttonClick}>1</button>
                    <button name="2" onClick={this.buttonClick}>2</button>
                    <button name="3" onClick={this.buttonClick}>3</button>
                    <button name="-" onClick={this.buttonClick}>-</button>
                </div>

                <div className="row">
                    <button name="." onClick={this.buttonClick}>.</button>
                    <button name="0" onClick={this.buttonClick}>0</button>
                    <button name="+" onClick={this.buttonClick}>+</button>
                    <button name="=" onClick={this.buttonClick}>=</button>
                </div>

            </div>

        )
    }
}

export default Keypad
