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

const App = () => {
    return (
        <BrowserRouter>
            <div className={style.app_wrapper}>
                <Header/>
                <NavBar/>
                <div className={style.app_wrapper_content}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
