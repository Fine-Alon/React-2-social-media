import React from "react";
import style from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={style.dialog}>
            <img className={style.ava} src="https://cdn.dribbble.com/userupload/8386880/file/original-3de2e5251e00225b221b5658f2b6c254.jpg?compress=1&resize=840x630&vertical=center" alt="ava"/>
            <div className={style.chat}>{props.name}</div>
        </div>

    )
}

export default Message