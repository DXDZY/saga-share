import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component'
import registerServiceWorker from './registerServiceWorker';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import myReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Login />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
