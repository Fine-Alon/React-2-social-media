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
import {UsersType} from "../../Types/Types";
import {AppStateType} from "../../Redux/redux_store";


type PropsType = {
    countPerPage: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    followed: boolean

    users: Array<UsersType>
    followingProgress: Array<number>

    getUsers: (countPerPage: number, currentPage: number) => void
    onPageChanged: (pagesButtons: number) => void
    subscribeFollower: () => void
    deleteFollower: () => void
    followConfirm: () => void
    unfollowConfirm: () => void
    toggleFollowingProgress: () => void
}

class FriendsContainer extends React.Component<PropsType> {

    componentDidMount() {
        let {countPerPage, currentPage} = this.props
        this.props.getUsers(countPerPage, currentPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(this.props.countPerPage, pageNumber)
    }

    render() {
        return <Friends users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        countPerPage={this.props.countPerPage}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        isFetching={this.props.isFetching}
                        followingProgress={this.props.followingProgress}
                        deleteFollower={this.props.deleteFollower}
                        subscribeFollower={this.props.subscribeFollower}
        />
    }
}

let mapStateToProps = (state:AppStateType) => {
    // using selectors bellow
    return {
        users: getUsersSuperSelector(state),
        countPerPage: getCountPerPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

// type State

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

