import React from "react";
import style from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog
const Dialog = ({id,name}) => {
    let path = `/dialogs/${id}`;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <img className={style.avatar} src="https://cdn.dribbble.com/userupload/8386880/file/original-3de2e5251e00225b221b5658f2b6c254.jpg?compress=1&resize=840x630&vertical=center" alt="ava"/>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default Dialog