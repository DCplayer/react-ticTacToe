import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Totito from './Totito';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Totito />, document.getElementById('root'));
registerServiceWorker();
