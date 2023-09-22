import React, {lazy} from 'react'
import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Music from "./components/Music/Music";
import {Navigate, Route, Routes} from "react-router-dom";
import style from './App.module.css'
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import ErrorBoundary from "./components/common/Preloader/ErrorBoundary";
import {initializeApp} from "./Redux/reducer_app";
import {WithSuspenseLazy} from "./HOC/WithSuspenseLazy";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const FriendContainer = lazy(() => import('./components/Friends/FriendsContainer'));

const DialogsContainerWithSuspense = WithSuspenseLazy(DialogsContainer)
const ProfileContainerWithSuspense = WithSuspenseLazy(ProfileContainer)
const FriendContainerWithSuspense = WithSuspenseLazy(FriendContainer)

class App extends React.Component<{}> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <ErrorBoundary width={{width: "100%"}}/>
        }

        return (
            <div className={style.app_wrapper}>
                <HeaderContainer/>
                <NavBar/>
                <div className={style.app_wrapper_content}>
                    <Routes>
                        <Route path={'/profile/:userId?'}
                               element={<ProfileContainerWithSuspense/>}/>
                        <Route path='/dialogs'
                               element={<DialogsContainerWithSuspense/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/friends'}
                               element={<FriendContainerWithSuspense/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path="/" element={<Navigate to="/profile"/>}/>
                        <Route path='*' element={<div>NOT FOUND 404</div>}/>
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
