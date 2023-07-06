import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog
const Dialog = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={`/dialogs/1${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props)=>{
    return(
        <div className={style.dialog}>{props.name}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                <Dialog name={'Sambo'} id={'1'}/>
                <Dialog name={'Ilona'} id={'2'}/>
                <Dialog name={'Andrey'} id={'3'}/>
                <Dialog name={'Misha'} id={'4'}/>
                <Dialog name={'Dima'} id={'5'}/>
            </div>
            <div className={style.messages}>
                <Message name={'wound'}/>
                <Message name={'charity'}/>
                <Message name={'who are you?'}/>
                <Message name={'tic ti tic'}/>
            </div>
        </div>
    )
}

export default Dialogs