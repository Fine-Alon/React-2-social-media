import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogs.map((d) => (<Dialog name={d.name} id={d.id}/>))

    let messagesElements = props.dialogPage.messages.map((m) => (<Message name={m.name}/>))

    let areaMessages = React.createRef()

    let sendMessage = () => {
        alert(
            areaMessages.current.value
        )
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.flex_colomn}>
                    <textarea ref={areaMessages}></textarea>
                    <button onClick={sendMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs