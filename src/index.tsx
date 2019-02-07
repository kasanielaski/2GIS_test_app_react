import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import styled from 'styled-components';

import { store } from './store';
import App from './components/App';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
