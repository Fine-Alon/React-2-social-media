import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {HashRouter as Router} from "react-router-dom";
import App from "./App";
import store from "./Redux/redux_store";
import {Provider} from "react-redux";
import ErrorBoundary from "./components/common/Preloader/Preloader";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireThree = (state) => {
    root.render(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <ErrorBoundary fallback={<p>Something went wrong</p>}>
                        <App/>
                    </ErrorBoundary>
                </Provider>
            </Router>
        </React.StrictMode>
    );
}

renderEntireThree(store.getState());
store.subscribe(() => {
    renderEntireThree(store.getState())
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
