function changeTitle(value) {
  return {
    type: 'CHANGE_TITLE',
    payload: value,
  };
}

function changeDescription(value) {
  return {
    type: 'CHANGE_DESCRIPTION',
    payload: value,
  };
}

function createTaskList(response) {
  return {
    type: 'CREATE_TASK',
    payload: response,
  };
}

function addTaskList(result) {
  console.log(result);
  return {
    type: 'ADD_TASK',
    payload: result,
  };
}

export { changeTitle, changeDescription, createTaskList, addTaskList };
