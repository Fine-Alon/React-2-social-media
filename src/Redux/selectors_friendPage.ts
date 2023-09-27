import {createSelector} from "reselect";
import {AppStateType} from "./redux_store";

const getUsersSelector = (state: AppStateType) => {
    return state.friendsPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true)
    }
)

export const getCountPerPage = (state: AppStateType) => {
    return state.friendsPage.countPerPage
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.friendsPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.friendsPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.friendsPage.isFetching
}
export const getFollowingProgress = (state: AppStateType) => {
    return state.friendsPage.followingProgress
}