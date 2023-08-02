import React from "react";
import {connect} from "react-redux";
import {
    ACFollowUser, ACIsFetching,
    ACSetCurrentPage,
    ACSetTotalUsersCount,
    ACSetUser,
    ACUnFollowUser
} from "../../Redux/reducer_friendPage";
import axios from "axios";
import Friends from "./Friends";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/` +
            `users?count=${this.props.countPerPage}&page=${this.props.currentPage}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/` +
            `users?count=${this.props.countPerPage}&page=${pageNumber}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {
        return <Friends users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        countPerPage={this.props.countPerPage}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        followUser={this.props.followUser}
                        unFollow={this.props.unFollow}
                        followed={this.props.followed}
                        isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        countPerPage: state.friendsPage.countPerPage,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
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
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(ACSetTotalUsersCount(totalUsersCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(ACIsFetching(isFetching))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)

