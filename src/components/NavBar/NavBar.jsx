import React from 'react'
import styles from './NavBar.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";

const isActiveLink = ({isActive}) => isActive ? styles.active : ''
const NavBar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <NavLink className={isActiveLink} to='/profile'>Profile</NavLink>
                </div>
                <div><NavLink className={isActiveLink} to='/dialogs'>Messages</NavLink></div>
                <div><NavLink className={isActiveLink} to='/news'>News</NavLink></div>
                <div><NavLink className={isActiveLink} to='/music'>Music</NavLink></div>
                <div><NavLink className={isActiveLink} to='/settings'>Settings</NavLink></div>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar;