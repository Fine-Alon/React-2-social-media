import React from 'react'
import styles from './NavBar.module.css'
import { NavLink, Outlet} from "react-router-dom";

const isActiveLink = ({isActive}) => isActive ? styles.active : ''
const NavBar = (props) => {
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <NavLink className={isActiveLink} to='/profile/'>Profile</NavLink>
                </div>
                <div><NavLink className={isActiveLink} to='/dialogs'>Messages</NavLink></div>
                <div><NavLink className={isActiveLink} to='/news'>News</NavLink></div>
                <div><NavLink className={isActiveLink} to='/music'>Music</NavLink></div>
                <div className={styles.friendBox}>
                    <NavLink className={isActiveLink} to='/friends'>Find Friends</NavLink>
                </div>
                <div><NavLink className={isActiveLink} to='/settings'>Settings</NavLink></div>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar;