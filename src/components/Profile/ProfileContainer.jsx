import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileInfo,
    getProfileStatus,
    updateProfilePhoto,
    updateProfileStatus
} from "../../Redux/reducer_profilePage";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {initializeApp} from "../../Redux/reducer_app";
import withRouter from "../../HOC/WithRouter";

class ProfileContainer extends React.Component {

    refreshProfileData() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedId
        }
        this.props.getProfileInfo(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.refreshProfileData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            this.refreshProfileData()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.router.params.userId}
                     userProfile={this.props.userProfile}
                     userStatus={this.props.userStatus}
                     updateStatus={this.props.updateProfileStatus}
                     updateProfilePhoto={this.props.updateProfilePhoto}
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
    connect(mapStateToProps, {
        initializeApp, updateProfilePhoto,
        getProfileInfo, getProfileStatus, updateProfileStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)