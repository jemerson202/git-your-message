import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bool: true,
      errors: {   }
    };
    this.btnOnClick = this.btnOnClick.bind(this)
  };

  btnOnClick() {
      this.setState({
        bool: !this.state.text
      });
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
        <p>{this.state.text}</p>
        <button id="button-click" type="button" onClick={this.btnOnClick}>Click this Button</button>
      </div>
    );
  }
}

export default App;
