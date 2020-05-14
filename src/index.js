import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {listData} from './data/dataStore.js';

ReactDOM.render(<App {...listData}/>, document.getElementById('app'));

