import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let dialogs = [
    {id: '1', name: 'Sambo'},
    {id: '2', name: 'Ilona'},
    {id: '3', name: 'Andrey'},
    {id: '4', name: 'Misha'},
    {id: '5', name: 'Dima'},
];
let messages = [
    {id: '1', name: 'wound'},
    {id: '2', name: 'charity'},
    {id: '3', name: 'who are you?'},
    {id: '4', name: 'tic ti tic'},
];
let postInfo = [
    {id: 1, countOfLikes: 11, message: 'I like write in the morning'},
    {id: 2, countOfLikes: 43, message: 'This is my first post'},
    {id: 3, countOfLikes: 25, message: 'so how are u today'},
];

root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} postInfo={postInfo}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
