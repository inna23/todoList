import React, { Component } from 'react';

class ToDoControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick() {
    if (!this.state.todo) {
      return;
    }

    this.props.onAdd(this.state.todo);
  }

  handleInputChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleInputChange}
        />
        <button
          onClick={this.handleClick}
        >Create
        </button>
      </div>
    );
  }
}
export default ToDoControl;
