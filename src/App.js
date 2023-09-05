import React, {lazy, Suspense} from 'react'
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Music from "./components/Music/Music";
import {Route, Routes} from "react-router-dom";
import style from './App.module.css'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import FriendContainer from "./components/Friends/FriendsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./Redux/reducer_app";
import LazySuspense from "./HOC/WithRouter";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const FriendContainer = lazy(() => import('./components/Friends/FriendsContainer'));

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
                            <Route path={'/profile/:userId?'}
                                   element={<Suspense fallback={'loading...'}><ProfileContainer/></Suspense>}/>
                            <Route path='/dialogs'
                                   element={<Suspense fallback={'loading...'}><DialogsContainer/></Suspense>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/friends'}
                                   element={<Suspense fallback={'loading...'}><FriendContainer/></Suspense>}/>
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
