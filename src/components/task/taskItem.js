import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../../actions/action';

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

const mapStateToProps = state => ({
  list: state.taskList.list,
});

const mapDaspatchToProps = dispatch => (
  bindActionCreators(todoActionCreators, dispatch)
);
export default connect(mapStateToProps, mapDaspatchToProps)(TaskItem);

