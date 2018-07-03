import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import FormControl from './formControls';
import TaskItem from './taskItem';
import * as todoActionCreators from '../../actions/action';

class Page extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>
              Form Control
            </h2>
            <FormControl
              title={this.props.title}
              description={this.props.description}
              addTaskList={this.props.addTaskList}
              changeTitle={this.props.changeTitle}
              changeDescription={this.props.changeDescription}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              Task list
            </h2>
            <TaskItem list={this.props.list} createTaskList={this.props.createTaskList} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.taskList.list,
  title: state.taskList.title,
  description: state.taskList.description,
});

const mapDaspatchToProps = dispatch => (
  bindActionCreators(todoActionCreators, dispatch)
);

export default connect(mapStateToProps, mapDaspatchToProps)(Page);
