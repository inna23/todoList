import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
        <ListGroup>
          {
            this.props.list.map(task => (
              <ListGroupItem color="secondary">
                <h3 className="h4">{task.title}</h3>
                <p>{task.description}</p>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    );
  }
}

export default TaskItem;

