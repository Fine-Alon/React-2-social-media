import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_NEW_POST = 'DELETE_NEW_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_SENDING_SUCCESS = 'SET_SEND_SUCCESS'
const SET_USER_PHOTO_LARGE = 'SET_USER_PHOTO_LARGE'

let initialState = {
    postInfo: [
        {id: '1', countOfLikes: 12, message: 'I like write in the morning'},
        {id: '2', countOfLikes: 43, message: 'This is my first post'},
        {id: '3', countOfLikes: 25, message: 'so how are u today'},
    ],
    userProfile: null,
    userStatus: 'status in reducer',
    sendingSuccess: false,
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
        case SET_USER_PHOTO_LARGE:
            return {
                ...state, userProfile: {...state.userProfile, photos: action.newPhotos}
            }

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.statusText
            }
        case SET_SENDING_SUCCESS:
            return {
                ...state,
                sendingSuccess: action.isSuccess
            }
        case DELETE_NEW_POST:
            return {
                ...state,
                postInfo: state.postInfo.filter(p => p.id !== action.id)
            }
        default:
            return state;
    }
}

export const addNewPostAC = (newPostText) => ({type: ADD_NEW_POST, newPostText})
export const setSendingSuccess = (isSuccess) => ({type: SET_SENDING_SUCCESS, isSuccess})
export const setNewPhotosAC = (newPhotos) => ({type: SET_USER_PHOTO_LARGE, newPhotos})
export const deletePostAC = (id) => ({type: DELETE_NEW_POST, id})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserStatus = (statusText) => ({type: SET_USER_STATUS, statusText})

export const getProfileInfo = (userId) => {
    return async (dispatcher, getState) => {
        const response = await profileAPI.getProfileInfo(userId)
        dispatcher(setUserProfile(response))
    }
}

export const updateProfileInfo = (data, setError) => {
    return async (dispatcher, getState) => {
        const response = await profileAPI.updateProfileInfo(data)

        if (response.resultCode === 0) {
            const userId = getState().userAuth.authUserId
            dispatcher(getProfileInfo(userId))
            dispatcher(setSendingSuccess(true))
        } else if (response.resultCode !== 0) {
            setError('serverError', {
                type: 'Attention!!! Server response messages: ',
                messages: response.messages
            })
            dispatcher(setSendingSuccess(false))
        }
    }
}

export const updateProfilePhoto = (file) => async (dispatch) => {

    const responce = await profileAPI.setPhoto(file)
    if (!responce.resultCode) {
        dispatch(setNewPhotosAC(responce.data.photos))
    }
}

export const getProfileStatus = (userId, statusText) => {
    return async (dispatch, getState) => {
        const response = await profileAPI.getProfileStatus(userId)
        dispatch(setUserStatus(response))
    }
}
export const updateProfileStatus = (statusText) => {
    return async (dispatch, setState) => {
        const response = await profileAPI.updateProfileStatus(statusText)
        if (!response.resultCode) {
            dispatch(setUserStatus(statusText))
        }
    }
}


export default reducerProfilePage;
