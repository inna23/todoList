import React, { Component } from 'react';

class TaskItem extends Component {
  componentDidMount() {
    fetch('https://tranquil-spire-74602.herokuapp.com/tasks')
      .then(response => response.json())
      .then((response) => {
        this.props.createTaskList(response);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map(task => (
              <li>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TaskItem;

