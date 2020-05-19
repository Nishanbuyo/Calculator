import React, { Component } from 'react'
import Keypad from './components/Keypad'
import Result from './components/Result'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: ""
    }
  }

  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    })
  }

  clear = () => {
    this.setState({
      result: ""
    })
  }

  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  buttonClick = buttonName => {
    if (buttonName === "=") {
      this.calculate()
    }
    else if (buttonName === "AC") {
      this.clear()
    }
    else if (buttonName === "DEL") {
      this.delete()
    }
    else {
      this.setState({ result: this.state.result + buttonName })
    }
  }

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <h1>Simple Calculator</h1>
          <div className = "calc">
            <Result result={this.state.result} />
            <Keypad buttonClick={this.buttonClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
