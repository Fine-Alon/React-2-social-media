import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, setUserProfile} from "../../Redux/reducer_profilePage";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

function withRouter(Component) {
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
            userId = 29655
        }
        this.props.getProfileInfo(userId)
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileInfo}),
    withRouter,
)
(ProfileContainer)