import React, { Component } from 'react';
import ToDoControl from '../todoList/ToDoControl';
import ToDoItem from '../todoList/ToDoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
    };

    this.handleToDoCreate = this.handleToDoCreate.bind(this);
  }

  handleToDoCreate(todo) {
    this.setState({
      todolist: this.state.todolist.concat(todo),
    });
  }


  render() {
    return (
      <div className="container">
        <div className="">
          <div>
            <ToDoControl onAdd={this.handleToDoCreate} />
          </div>
          <div>
            <ul>
              {this.state.todolist.map(todo => <ToDoItem name={todo} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
