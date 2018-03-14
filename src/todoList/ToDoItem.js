import React, { Component } from 'react';

class ToDoItem extends Component {
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}
export default ToDoItem;
