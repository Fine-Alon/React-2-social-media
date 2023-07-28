import {type} from "@testing-library/user-event/dist/type";

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SHOW_MORE_BTN = 'SHOW_MORE_BTN'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'

let initialState = {
    users: [],
    countPerPage: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
        case SHOW_MORE_BTN :
            return state;
        default:
            return state;
    }
}

export let ACFollowUser = (userId) => ({type: FOLLOW_USER, userId})
export let ACUnFollowUser = (userId) => ({type: UNFOLLOW_USER, userId})
export let ACSetUser = (users) => ({type: SET_USERS, users})
export let ACSetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export let ACSetTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USER_COUNT, count: totalUsersCount})
export let ACShowMoreBtn = () => ({type: SHOW_MORE_BTN})

export default reducerFriendsPage