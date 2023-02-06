import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducer";
import {logger} from "redux-logger/src";
import {Provider} from "react-redux";


const store = createStore(rootReducer, applyMiddleware(logger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
