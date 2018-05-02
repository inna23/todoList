import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      sum: 0,
      sub: 0
    };
  }

  sum() {
    fetch('https://tranquil-spire-74602.herokuapp.com/calculator/sum', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ a: this.state.a, b: this.state.b }),
    })
      .then(result => result.json())
      .then((result) => {
        this.setState({ sum: result });
        console.log(result);
      });
  }

  sub() {
    fetch('https://tranquil-spire-74602.herokuapp.com/calculator/sub', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ a: this.state.a, b: this.state.b }),
    })
      .then(result => result.json())
      .then((result) => {
        this.setState({ sub: result });
        console.log(result);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Calculator</h2>
          <input
            className="form-control"
            type="text"
            onChange={(e) => { this.setState({ a: e.target.value }); }}
          />
          <input
            className="form-control"
            type="text"
            onChange={(e) => { this.setState({ b: e.target.value }); }}
          />
          <button className="btn btn-outline-dark" onClick={() => this.sum()}> Sum </button>
          <button className="btn btn-outline-dark" onClick={() => this.sub()}> Sub </button>
        </div>
        <h4> Sum: {this.state.sum}</h4>
        <h4>Sub: {this.state.sub}</h4>
      </div>
    );
  }
}

export default Calculator;
