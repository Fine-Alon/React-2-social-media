import {profileAPI} from "../api/api";
import login from "../components/Login/Login";

const ADD_POST_TO_STATE = 'ADD_POST_TO_STATE'
const TEXT_UPDATING = 'TEXT_UPDATING'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    postInfo: [
        {id: '1', countOfLikes: 12, message: 'I like write in the morning'},
        {id: '2', countOfLikes: 43, message: 'This is my first post'},
        {id: '3', countOfLikes: 25, message: 'so how are u today'},
    ],
    messageToPost: 'AlonMMA',
    userProfile: null,
    userStatus: 'initial status from reducer',
}

const reducerProfilePage = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST_TO_STATE:
            let newPost = {id: '4', countOfLikes: 0, message: state.messageToPost}
            return {
                ...state,
                postInfo: [...state.postInfo, newPost],
                messageToPost: '',
            }
        case TEXT_UPDATING:
            return {
                ...state,
                messageToPost: action.value
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

export const addPostActionCreator = () => ({type: ADD_POST_TO_STATE})
export const textUpdatingActionCreator = (text) => ({type: TEXT_UPDATING, value: text})
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
