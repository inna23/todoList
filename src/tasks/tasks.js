import React, { Component } from 'react';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);

    this.state = {
      taskList: [],
    };
  }

  componentDidMount() {
    console.log('dsad');
    fetch('https://tranquil-spire-74602.herokuapp.com/tasks')
      .then(response => response.json())
      .then((response) => {
        // const newTaskList = this.state.taskList.concat(response);
        this.setState({
          taskList: response,
        });
      });
    console.log(this.state.taskList);
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
        console.log(result);
        const newTaskList = this.state.taskList.concat(result);
        this.setState({
          taskList: newTaskList,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1>Create task</h1>
            <form onSubmit={this.createTask}>
              <div className="form-group">
                <label>Create task name</label>
                <input
                  className="form-control"
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Create task description</label>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="10"
                  onChange={
                    e => this.setState({ description: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">Create</button>
            </form>
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>Tasks list</h1>
            <ul className="list-group">
              {this.state.taskList.map(el => (
                <li className="list-group-item"><strong>{el.title}</strong><p>{el.description}</p></li>))}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Tasks;
