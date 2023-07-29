import React from 'react'
import './App.module.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Music from "./components/Music/Music";
import {Route, Routes} from "react-router-dom";
import style from './App.module.css'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendContainer from "./components/Friend/FriendContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className={style.app_wrapper}>
            <Header/>
            <NavBar/>
            <div className={style.app_wrapper_content}>
                <Routes>
                    <Route path={'/profile'} element={<ProfileContainer/>}/>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/friends'} element={<FriendContainer/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
