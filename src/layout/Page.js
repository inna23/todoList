import React, { Component } from 'react';
import FormControls from '../components/task/formControls';
import TaskItem from '../components/task/taskItem';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.handleItemCreate = this.handleItemCreate.bind(this);
  }

  componentDidMount() {
    fetch('https://tranquil-spire-74602.herokuapp.com/tasks')
      .then(response => response.json())
      .then((response) => {
        this.setState({
          taskList: response,
        });
      });
  }

  handleItemCreate(item) {
    this.setState({
      taskList: this.state.taskList.concat(item),
    });
    console.log(this.state.taskList);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1>Create task</h1>
            <FormControls onAdd={this.handleItemCreate} />
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>Tasks list</h1>
            <ul className="list-group">
              {this.state.taskList.map((task, i) => <TaskItem name={task} key={i} />)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
