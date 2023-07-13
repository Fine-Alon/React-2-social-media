import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPostToState, textUpdating} from "./Redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireThree = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPostToState={addPostToState} textUpdating={textUpdating}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}