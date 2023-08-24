import React from 'react'
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Music from "./components/Music/Music";
import {Route, Routes} from "react-router-dom";
import style from './App.module.css'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendContainer from "./components/Friend/FriendContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./Redux/reducer_app";

class App extends React.Component<{}> {

    componentDidMount() {
        this.props.initializeApp()

    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader width={{width: "100%"}}/>
        }

        return (
            <div className={style.app_wrapper}>
                <HeaderContainer/>
                <NavBar/>
                <div className={style.app_wrapper_content}>
                    <Routes>
                        <Route path={'/profile/:userId?'} element={<ProfileContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/friends'} element={<FriendContainer/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})

export default connect(mapStateToProps, {initializeApp})(App);
