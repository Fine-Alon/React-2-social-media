import React from "react";
import Preloader from "../common/Preloader/Preloader"
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

type MapStatePropsType = {
    countPerPage: number | undefined
    currentPage: number | undefined
    isFetching: boolean
    totalUsersCount: number | undefined
    followed?: boolean
    users: Array<UsersType>
    followingProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (countPerPage: number, currentPage: number) => void
    onPageChanged?: (pagesButtons: number) => void
    subscribeFollower: (userId: any) => void
    deleteFollower: (userId: any ) => void
    followConfirm: (userId: number | undefined) => void
    unfollowConfirm: (userId: number | undefined) => void
    toggleFollowingProgress: (isFetching: boolean, id: number | undefined) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class FriendsContainer extends React.Component<PropsType> {

    componentDidMount() {
        let {countPerPage, currentPage} = this.props
        this.props.getUsers(countPerPage, currentPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(this.props.countPerPage, pageNumber)
    }

    render() {
        return <>
            <h1>{this.props.pageTitle}</h1>
            {this.props.isFetching ? <Preloader width={{width: "100%"}}/> : null}
            <Friends users={this.props.users}
                     totalUsersCount={this.props.totalUsersCount}
                     countPerPage={this.props.countPerPage}
                     onPageChanged={this.onPageChanged}
                     currentPage={this.props.currentPage}
                     isFetching={this.props.isFetching}
                     followingProgress={this.props.followingProgress}
                     deleteFollower={this.props.deleteFollower}
                     subscribeFollower={this.props.subscribeFollower}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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

let mapDispatchToProps = (dispatch): MapDispatchPropsType => {
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
// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
export default compose(
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps, mapDispatchToProps),
)(FriendsContainer)

