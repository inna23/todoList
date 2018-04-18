import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import App from './layout/App';
import Calculator from './calculator/calculator';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
