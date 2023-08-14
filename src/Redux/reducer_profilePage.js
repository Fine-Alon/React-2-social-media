import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    postInfo: [
        {id: '1', countOfLikes: 12, message: 'I like write in the morning'},
        {id: '2', countOfLikes: 43, message: 'This is my first post'},
        {id: '3', countOfLikes: 25, message: 'so how are u today'},
    ],
    userProfile: null,
    userStatus: 'initial status from reducer',
}

const reducerProfilePage = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {id: '4', countOfLikes: 0, message: action.newPostText}
            return {
                ...state,
                postInfo: [...state.postInfo, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.statusText
            }
        default:
            return state;
    }
}

export const addNewPostAC = (newPostText) => ({type: ADD_NEW_POST,newPostText})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserStatus = (statusText) => ({type: SET_USER_STATUS, statusText})

export const getProfileInfo = (userId) => {
    return (dispatcher, getState) => {
        profileAPI.getProfileInfo(userId)
            .then(response => {
                dispatcher(setUserProfile(response))
            })
    }
}

export const getProfileStatus = (userId, statusText) => {
    return (dispatch, getState) => {
        profileAPI.getProfileStatus(userId)
            .then(responce => {
                    dispatch(setUserStatus(responce))
                }
            )
    }
}
export const updateProfileStatus = (statusText) => {
    return (dispatch, setState) => {
        profileAPI.updateProfileStatus(statusText).then(responce => {
            if (!responce.resultCode) {
                dispatch(setUserStatus(statusText))
            }
        })
    }
}

export default reducerProfilePage;
