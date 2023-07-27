import React from "react";
import {connect} from "react-redux";
import {ACFollowUser, ACSetCurrentPage, ACSetUser, ACUnFollowUser} from "../../Redux/reducer_friendPage";
import Friend from "./Friend";


let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        countPerPage: state.friendsPage.countPerPage,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(ACFollowUser(userId))
        },
        unFollow: (userId) => {
            dispatch(ACUnFollowUser(userId))
        },
        setUsers: (users) => {
            dispatch(ACSetUser(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(ACSetCurrentPage(currentPage))
        }
    }
}

let FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friend)

export default FriendContainer;