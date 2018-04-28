import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import App from './layout/App';
//import Tasks from './calculator/calculator';
import Tasks from './tasks/tasks';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tasks />, document.getElementById('root'));
registerServiceWorker();
