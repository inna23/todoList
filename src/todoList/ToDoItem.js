import React, { Component } from 'react';
import FaTrash from '../../node_modules/react-icons/lib/fa/trash';

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete() {
     this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li>
        {this.props.name}
        <button
          onClick={this.handleClickDelete}
          className="close"
        >
          <FaTrash />
        </button>
      </li>
    );
  }
}

export default ToDoItem;
