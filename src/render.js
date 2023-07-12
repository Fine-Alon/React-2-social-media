import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPostToState} from "./Redux/state";


export let renderEntireThree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPostToState={addPostToState}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}