import React from "react";
import {connect} from "react-redux";
import {ACFollowUser, ACSetUser, ACUnFollowUser} from "../../Redux/reducer_friendPage";
import Friend from "./Friend";


let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
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
        }
    }
}


let FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friend)

export default FriendContainer;