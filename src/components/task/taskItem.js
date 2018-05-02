import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item" key={this.props.key}>
        <h4>{this.props.name.title}</h4>
        <p>{this.props.name.description}</p>
      </li>
    );
  }
}

export default TaskItem;
