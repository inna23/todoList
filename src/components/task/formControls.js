import React, { Component } from 'react';

class FormControl extends Component {
  constructor(props) {
    super(props);
    this.handleCreateTask = this.handleCreateTask.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangrDescription = this.onChangrDescription.bind(this);
  }

  onChangeTitle(e) {
    this.props.changeTitle(e.target.value);
  }

  onChangrDescription(e) {
    this.props.changeDescription(e.target.value);
  }

  handleCreateTask(e) {
    e.preventDefault();
    console.log('create');

    fetch('https://tranquil-spire-74602.herokuapp.com/tasks', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: this.props.title, description: this.props.description }),
    })
      .then(result => result.json())
      .then((result) => {
        this.props.addTaskList(result);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleCreateTask}>
        <input onChange={this.onChangeTitle} />
        <textarea onChange={this.onChangrDescription} />
        <button>Create</button>
      </form>
    );
  }
}

export default FormControl;
