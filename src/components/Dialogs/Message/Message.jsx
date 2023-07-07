import React from "react";
import style from "../Dialogs.module.css"

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.name}</div>
    )
}

export default Message