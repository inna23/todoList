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
    this.handleToDoDelete = this.handleToDoDelete.bind(this);
  }

  handleToDoCreate(todo) {
    this.setState({
      todolist: this.state.todolist.concat(todo),
    });
  }

  handleToDoDelete(i) {
    this.setState({
      todolist: this.state.todolist.filter((el, index) => index != i),
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
              {this.state.todolist.map((todo, i) => <ToDoItem onDelete={this.handleToDoDelete} name={todo} key={i} id={i} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
