import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import Index from './layout/Index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
