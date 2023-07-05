import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div><a href='#1'>Profile</a></div>
            <div><a href='#1'>Messages</a></div>
            <div><a href='#1'>News</a></div>
            <div><a href='#1'>Music</a></div>
            <div><a href='#1'>Settings</a></div>
        </nav>
    )
}

export default NavBar;