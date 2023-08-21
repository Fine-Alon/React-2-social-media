import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logoutUser} from "../../Redux/reducer_auth";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.userAuth.isAuth,
    userId: state.userAuth.authUserId,
    authLogin: state.userAuth.authLogin,
})

export default connect(mapStateToProps, {getAuthUserData,logoutUser})(HeaderContainer);