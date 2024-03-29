import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    firstVal: 0,
    secondVal: 0
  };

  updateInputValue = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: parseInt(value)
    });
  };

  add = () => {
    const { firstVal, secondVal } = this.state;
    alert("The SUM is " + (firstVal + secondVal));
  };

  substract = () => {
    const { firstVal, secondVal } = this.state;
    alert("The DIF is " + (firstVal - secondVal));
  };

  multiply = () => {
    const { firstVal, secondVal } = this.state;
    alert("The Multiplication is " + (firstVal * secondVal));
  };

  divide = () => {
    const { firstVal, secondVal } = this.state;
    alert("The DIVISION is " + (firstVal / secondVal));
  };

  render() {
    return (
      <div>
        <input
          placeholder="first value"
          value={this.state.inputValue}
          name="firstVal"
          onChange={evt => this.updateInputValue(evt)}
        />
        <input
          placeholder="second value"
          value={this.state.inputValue}
          name="secondVal"
          onChange={evt => this.updateInputValue(evt)}
        />
        <button onClick={this.add}>+</button>
        <button onClick={this.substract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default App;
