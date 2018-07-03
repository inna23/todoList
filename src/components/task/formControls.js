import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';

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
      <Form onSubmit={this.handleCreateTask} className="bg-light p-3 mb-4">
        <FormGroup row>
          <Label for="title" sm={2}> Title </Label>
          <Col sm={10}>
            <Input type="text" id="title" onChange={this.onChangeTitle} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}> Description </Label>
          <Col sm={10}>
            <Input type="textarea" id="description" onChange={this.onChangrDescription} />
          </Col>
        </FormGroup>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button block color="secondary" size="lg" >Create</Button>{' '}
        </Col>
      </Form>
    );
  }
}

export default FormControl;
