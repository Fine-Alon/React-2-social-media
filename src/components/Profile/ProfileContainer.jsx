import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getProfileStatus, setUserProfile, updateProfileStatus} from "../../Redux/reducer_profilePage";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";

const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

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
    connect(mapStateToProps, {setUserProfile, getProfileInfo, getProfileStatus, updateProfileStatus}),
    withRouter,
)
(ProfileContainer)