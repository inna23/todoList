const initialState = {
  list: [],
  title: '',
  description: '',
};
const taskList = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return Object.assign({}, state, { title: action.payload });

    case 'CHANGE_DESCRIPTION':
      return Object.assign({}, state, { description: action.payload });

    case 'CREATE_TASK':
      return Object.assign({}, state, { list: action.payload });

    case 'ADD_TASK':
      return Object.assign({}, state, { list: state.list.concat(action.payload) });

    default:
    {
      return state;
    }
  }
};

export default taskList;
