import {usersAPI} from "../api/api";
import {updateObjInArr} from "../utils/object-helpers";
import {UsersType} from "../Types/Types";
import {AppStateType} from "./redux_store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SHOW_MORE_BTN = 'SHOW_MORE_BTN'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UsersType>,
    countPerPage: 5,
    totalUsersCount: 0,
    currentPage: 53,
    isFetching: true,
    followingProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState

const reducerFriendsPage = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjInArr(state.users, 'id', action.userId, {followed: true})
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateObjInArr(state.users, 'id', action.userId, {followed: false})
            };
        case SET_USERS:
            return {...state, users: action.users}
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

type ActionsType = FollowConfirmACType | UnfollowConfirmACType | SetUserACType | SetCurrentPageACType |
    SetTotalUsersCountACType | IsFetchingACType | ToggleFollowingProgressACType | ShowMoreBtnACType


type FollowConfirmACType = {
    type: typeof FOLLOW_USER
    userId: number
}
export let followConfirm = (userId: number): FollowConfirmACType => ({type: FOLLOW_USER, userId})

type UnfollowConfirmACType = {
    type: typeof UNFOLLOW_USER
    userId: number
}
export let unfollowConfirm = (userId: number): UnfollowConfirmACType => ({type: UNFOLLOW_USER, userId})

type SetUserACType = {
    type: typeof SET_USERS
    users: UsersType[]
}
export let ACSetUser = (users: UsersType[]): SetUserACType => ({type: SET_USERS, users})

type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export let ACSetCurrentPage = (currentPage: number): SetCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

type SetTotalUsersCountACType = {
    type: typeof TOTAL_USER_COUNT
    count: number
}
export let ACSetTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountACType => ({
    type: TOTAL_USER_COUNT, count: totalUsersCount
})

type IsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export let ACIsFetching = (isFetching: boolean): IsFetchingACType => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

type ToggleFollowingProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    userId: number
    isFetch: boolean
}
export let ACToggleFollowingProgress = (isFetch: boolean, userId: number): ToggleFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetch, userId
})

type ShowMoreBtnACType = {
    type: typeof SHOW_MORE_BTN
}
export let ACShowMoreBtn = (): ShowMoreBtnACType => ({type: SHOW_MORE_BTN})


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsType>

export const getUsers = (countPerPage: number,
                         currentPage: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(ACIsFetching(true))
        const response = await usersAPI.getUsers(countPerPage, currentPage)
        dispatch(ACSetCurrentPage(currentPage))
        dispatch(ACSetUser(response.items))
        dispatch(ACIsFetching(false))
        dispatch(ACSetTotalUsersCount(response.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   APIisSubscribeMethod: any,
                                   ACisConfirmMethod: (usrId) => UnfollowConfirmACType | FollowConfirmACType) => {
    dispatch(ACToggleFollowingProgress(true, userId))
    const response = await APIisSubscribeMethod(userId)
    if (response.resultCode === 0) dispatch(ACisConfirmMethod(userId))
    dispatch(ACToggleFollowingProgress(false, userId))
}

export const deleteFollower = (userId: number): ThunkType => {
    return async (dispatch, getState) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unsubscribeUser.bind(usersAPI), unfollowConfirm)
    }
}
export const subscribeFollower = (userId: number): ThunkType => {
    return async (dispatch, getState) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.subscribeUser.bind(usersAPI), followConfirm)
    }
}

export default reducerFriendsPage