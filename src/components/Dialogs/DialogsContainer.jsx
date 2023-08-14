import React from "react";
import {addNewMessageAC} from "../../Redux/reducer_dialogPage";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        isAuth: state.userAuth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (text) => {
            dispatch(addNewMessageAC(text))
        },
    }
}

export default compose(
    connect(mapStateToProps,
        mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
