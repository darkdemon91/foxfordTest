import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store'

const target = document.querySelector('#root')

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>,
        target
)
