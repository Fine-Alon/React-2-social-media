import React from "react";
import {connect} from "react-redux";
import {
    ACToggleFollowingProgress, deleteFollower, followConfirm, getUsers, subscribeFollower, unfollowConfirm
} from "../../Redux/reducer_friendPage";
import Friends from "./Friends";
import {compose} from "redux";
import {
    getCountPerPage,
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getTotalUsersCount, getUsersSuperSelector,
} from "../../Redux/selectors_friendPage";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.countPerPage, this.props.currentPage)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.countPerPage, pageNumber)
    }

    render() {
        return <Friends users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        countPerPage={this.props.countPerPage}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        followConfirm={this.props.followConfirm}
                        unfollowConfirm={this.props.unfollowConfirm}
                        followed={this.props.followed}
                        isFetching={this.props.isFetching}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingProgress={this.props.followingProgress}
                        deleteFollower={this.props.deleteFollower}
                        subscribeFollower={this.props.subscribeFollower}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        countPerPage: getCountPerPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followConfirm: (userId) => {
            dispatch(followConfirm(userId))
        },
        unfollowConfirm: (userId) => {
            dispatch(unfollowConfirm(userId))
        },
        toggleFollowingProgress: (isFetching, id) => {
            dispatch(ACToggleFollowingProgress(isFetching, id))
        },
        getUsers: (countPerPage, currentPage) => {
            dispatch(getUsers(countPerPage, currentPage))
        },
        deleteFollower: (userId) => {
            dispatch(deleteFollower(userId))
        }
        , subscribeFollower: (userId) => {
            dispatch(subscribeFollower(userId))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(FriendsContainer)

