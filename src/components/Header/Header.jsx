import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={style.header}>
            <NavLink to={'profile/'}>
                <img alt='kartinka'
                     src="https://cdn.dribbble.com/userupload/8221147/file/original-26ba49bbf930577e669aa44086a1345e.png?compress=1&resize=400x300&vertical=center"></img>
            </NavLink>
            {props.isAuth
                ? <button onClick={props.logoutUser} className={style.logout}>log out</button>
                : <NavLink to={"login/"}>
                    <div className={style.login}>Login</div>
                </NavLink>
            }
        </header>
    )
}

export default Header