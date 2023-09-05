import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getProfileStatus, setUserProfile, updateProfileStatus} from "../../Redux/reducer_profilePage";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {initializeApp} from "../../Redux/reducer_app";
import withRouter from "../../HOC/WithRouter";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedId
        }
        this.props.getProfileInfo(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     userProfile={this.props.userProfile}
                     userStatus={this.props.userStatus}
                     updateStatus={this.props.updateProfileStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    authorizedId: state.userAuth.authUserId
})

export default compose(
    connect(mapStateToProps, {initializeApp,
        setUserProfile, getProfileInfo, getProfileStatus, updateProfileStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)