import React from 'react'
import './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import style from './App.module.css'
import News from "./components/News/News";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    let friendPage = {
        chats: [
            {
                id: '1', name: 'Ilona',
                src: "https://cdn.dribbble.com/userupload/8375518/file/original-72857307fff5fd7bdf6a8f0263426c3c.png?compress=1&resize=840x630&vertical=center"
            },
            {
                id: '2',
                name: 'Sambo',
                src: "https://cdn.dribbble.com/userupload/8389623/file/original-f9a95a02a522b67fa6690cb71ff01a31.jpg?compress=1&resize=840x630&vertical=center"
            },
            {
                id: '3',
                name: 'Andrey',
                src: "https://cdn.dribbble.com/userupload/8247912/file/original-aaada9d631f65e62a47e000684572621.png?compress=1&crop=0x191-2000x1691&resize=840x630&vertical=center"
            },
        ]
    };
    return (
        <div className={style.app_wrapper}>
            <Header/>
            <NavBar/>
            <div className={style.app_wrapper_content}>
                <Routes>
                    <Route path={'/profile'} element={<Profile addPostToState={props.addPostToState}
                                                               profilePage={props.state.profilePage}/>}/>
                    <Route path='/dialogs' element={<Dialogs dialogPage={props.state.dialogPage}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/friends'} element={<Friends chats={friendPage.chats}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
