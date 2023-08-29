import reducer_friendPage, {
    ACIsFetching,
    ACSetCurrentPage,
    ACSetTotalUsersCount,
    ACSetUser, ACToggleFollowingProgress,
    followConfirm
} from "./reducer_friendPage";
import reducerFriendsPage from "./reducer_friendPage";

let state = {
    users: [],
    countPerPage: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [1,2,3,4,5],
}

test('should user be added', () => {

    let action = ACSetUser([{alon:1}])

    let newState = reducerFriendsPage(state, action)

    expect(newState.users.length).toBe(1)
})
test('should page be setted', () => {

    let action = ACSetCurrentPage(22)

    let newState = reducerFriendsPage(state, action)

    expect(newState.currentPage).toBe(22)
})
test('should total users count be setted', () => {

    let action = ACSetTotalUsersCount(10)

    let newState = reducerFriendsPage(state, action)

    expect(newState.totalUsersCount).toBe(10)
})
test('should isFetching status be changed', () => {

    let action = ACIsFetching(false)

    let newState = reducerFriendsPage(state, action)

    expect(newState.isFetching).toBe(false)
})
test('should followingProgress array be decremented', () => {

    let action = ACToggleFollowingProgress(false,5)

    let newState = reducerFriendsPage(state, action)

    expect(newState.followingProgress.length).toBe(4)
})
test('should followingProgress array be incremented', () => {

    let action = ACToggleFollowingProgress(true,44)

    let newState = reducerFriendsPage(state, action)

    expect(newState.followingProgress.length).toBe(6)
})