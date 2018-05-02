import React, { Component } from 'react';

class FormControls extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);

    this.state = {
      title: '',
      description: '',
      task: [],
    };
  }
  createTask(e) {
    e.preventDefault();

    fetch('https://tranquil-spire-74602.herokuapp.com/tasks', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: this.state.title, description: this.state.description }),
    })
      .then(result => result.json())
      .then((result) => {
        console.log('result', result);
        const newTaskList = this.state.task.concat(result);
        this.setState({
          task: newTaskList,
        });
        this.props.onAdd(this.state.task);
        console.log('task', this.state.task);

      });
  }

  render() {
    return (

      <form onSubmit={this.createTask}>
        <div className="form-group">
          <label>Create task name</label>
          <input
            className="form-control"
            onChange={(e) => {
              this.setState({
                title: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label>Create task description</label>
          <textarea
            className="form-control"
            cols="30"
            rows="10"
            onChange={(e) => {
              this.setState({
                description: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>

    );
  }
}

export default FormControls;
