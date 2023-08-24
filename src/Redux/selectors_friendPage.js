import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.friendsPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true)
    }
)

export const getCountPerPage = (state) => {
    return state.friendsPage.countPerPage
}
export const getTotalUsersCount = (state) => {
    return state.friendsPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage
}
export const getIsFetching = (state) => {
    return state.friendsPage.isFetching
}
export const getFollowingProgress = (state) => {
    return state.friendsPage.followingProgress
}