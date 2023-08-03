import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setUserAuthData, setUserData} from "../../Redux/reducer_auth";
import {getAuthInfo, getProfileInfo, usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.getAuthInfo().then(response => {
            if (!response.resultCode) {
                let {email, id, login} = response.data
                this.props.setUserAuthData(email, id, login)

                usersAPI.getProfileInfo(id, true).then(
                    response => {
                        this.props.setUserData(response.data)
                    }
                )
            }
        })
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

export default connect(mapStateToProps, {setUserAuthData, setUserData})(HeaderContainer);