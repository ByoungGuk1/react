import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import {legacy_createStore as createStore} from "redux";
// ㄴ> 별명 만들기 // 깃 단축어 생각해보기
import {Provider}from "react-redux";
import {devtoolsEnhancer, devToolsEnhancerLogOnly}from "@redux-devtools/extension";
import count from './modules/count';

const store = createStore(count, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
