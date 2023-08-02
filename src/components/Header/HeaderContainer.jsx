import React from 'react'
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserAuthData, setUserData} from "../../Redux/reducer_auth";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                if (!response.data.resultCode) {
                    let {email, id, login} = response.data.data
                    this.props.setUserAuthData(email, id, login)
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id).then(
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

export default connect(mapStateToProps, {setUserAuthData,setUserData})(HeaderContainer);