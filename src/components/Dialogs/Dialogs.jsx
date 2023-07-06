import React from "react";
import style from "./Dialogs.module.css"

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                <div className={style.dialog+' '+ style.active}>hi</div>
                <div className={style.dialog}>who are you?</div>
                <div className={style.dialog}>tic ti tic</div>
                <div className={style.dialog}>wound</div>
                <div className={style.dialog}>charity</div>

            </div>
            <div className={style.messages}>
                messages
            </div>
        </div>
    )
}

export default Dialogs