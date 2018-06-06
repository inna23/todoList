import React from 'react';
import FormControl from '../components/task/formControls';
import TaskItem from '../components/task/taskItem';

const Page = () => (
  <div>
    <div>
      <h2>
        Form Control
      </h2>
      <FormControl />
    </div>
    <div>
      <h2>
        Task list
      </h2>
      <ul>
        <li>
          <TaskItem />
        </li>
      </ul>
    </div>
  </div>


);

export default Page;
// componentDidMount() {
//   fetch('https://tranquil-spire-74602.herokuapp.com/tasks')
//     .then(response => response.json())
//     .then((response) => {
//       this.setState({
//         taskList: response,
//       });
//     });
// }

