import {addNewMessageAC} from "../../Redux/reducer_dialogPage";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

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
