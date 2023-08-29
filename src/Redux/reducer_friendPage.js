import {usersAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SHOW_MORE_BTN = 'SHOW_MORE_BTN'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    countPerPage: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}

const reducerFriendsPage = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetch
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        case SHOW_MORE_BTN :
            return state;
        default:
            return state;
    }
}

export let followConfirm = (userId) => ({type: FOLLOW_USER, userId})
export let unfollowConfirm = (userId) => ({type: UNFOLLOW_USER, userId})
export let ACSetUser = (users) => ({type: SET_USERS, users})
export let ACSetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export let ACSetTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USER_COUNT, count: totalUsersCount})
export let ACIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export let ACToggleFollowingProgress = (isFetch, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetch, userId})
export let ACShowMoreBtn = () => ({type: SHOW_MORE_BTN})

export const getUsers = (countPerPage, currentPage) => {
    return (dispatch, getState) => {
        dispatch(ACIsFetching(true))
        usersAPI.getUsers(countPerPage, currentPage)
            .then(response => {
                dispatch(ACSetCurrentPage(currentPage))
                dispatch(ACSetUser(response.items))
                dispatch(ACIsFetching(false))
                dispatch(ACSetTotalUsersCount(response.totalCount))
            })
    }
}

export const deleteFollower = (userId) => {

    return (dispatch, getState) => {
        dispatch(ACToggleFollowingProgress(true, userId))
        usersAPI.unsubscribeUser(userId).then(response => {
            if (response.resultCode == 0) dispatch(unfollowConfirm(userId))
            dispatch(ACToggleFollowingProgress(false, userId))
        })
    }
}
export const subscribeFollower = (userId) => {

    return (dispatch, getState) => {
        dispatch(ACToggleFollowingProgress(true, userId))
        usersAPI.subscribeUser(userId).then(response => {
            if (response.resultCode == 0) dispatch(followConfirm(userId))
            dispatch(ACToggleFollowingProgress(false, userId))
        })
    }
}

export default reducerFriendsPage