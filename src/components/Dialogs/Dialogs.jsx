import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const Dialogs = ({messages,dialogs}) => {

    let dialogsElements = dialogs.map((d)=>(<Dialog name={d.name} id={d.id}/>))

    let messagesElements = messages.map((m)=>(<Message name={m.name}/>))

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs