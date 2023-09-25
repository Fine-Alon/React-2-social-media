import {profileAPI} from "../api/api";
import {PostInfoType, UserPhotosType, UserType} from "../Types/Types";

const ADD_NEW_POST = 'ADD_NEW_POST'
const DELETE_NEW_POST = 'DELETE_NEW_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_SENDING_SUCCESS = 'SET_SEND_SUCCESS'
const SET_USER_PHOTOS = 'SET_USER_PHOTOS'


let initialState = {
    postInfo: [
        {id: '1', countOfLikes: 12, message: 'I like write in the morning'},
        {id: '2', countOfLikes: 43, message: 'This is my first post'},
        {id: '3', countOfLikes: 25, message: 'so how are u today'},
    ] as Array<PostInfoType>,
    userProfile: null as UserType | null,
    userStatus: 'status in reducer',
    sendingSuccess: false,
}

export type InitialStateType = typeof initialState

const reducerProfilePage = (state = initialState, action: any): InitialStateType => {
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
        case SET_USER_PHOTOS:
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

type AddNewPostACType = {
    type: typeof ADD_NEW_POST
    newPostText: string
}
export const addNewPostAC = (newPostText: string): AddNewPostACType => ({
    type: ADD_NEW_POST, newPostText
})

type SetSendingSuccessACType = {
    type: typeof SET_SENDING_SUCCESS
    isSuccess: boolean
}
export const setSendingSuccess = (isSuccess: boolean): SetSendingSuccessACType => ({
    type: SET_SENDING_SUCCESS, isSuccess
})

type SetNewPhotosACType = {
    type: typeof SET_USER_PHOTOS
    newPhotos: UserPhotosType
}
export const setNewPhotosAC = (newPhotos):SetNewPhotosACType => ({type: SET_USER_PHOTOS, newPhotos})


type DeletePostACType = {
    type: typeof DELETE_NEW_POST
    id: number
}
export const deletePostAC = (id: number): DeletePostACType => ({type: DELETE_NEW_POST, id})

type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    userProfile: UserType
}
export const setUserProfile = (userProfile: UserType): SetUserProfileACType => ({type: SET_USER_PROFILE, userProfile})


type SetUserStatusACType = {
    type: typeof SET_USER_STATUS
    statusText: string
}
export const setUserStatus = (statusText: string): SetUserStatusACType => ({
    type: SET_USER_STATUS, statusText
})

export const getProfileInfo = (userId: number) => {
    return async (dispatcher: any, getState: Object) => {
        const response = await profileAPI.getProfileInfo(userId)
        dispatcher(setUserProfile(response))
    }
}

export const updateProfileInfo = (data, setError) => {
    return async (dispatcher: any, getState) => {
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

export const updateProfilePhoto = (file) => async (dispatch: any) => {
    const responce = await profileAPI.setPhoto(file)
    if (!responce.resultCode) {
        dispatch(setNewPhotosAC(responce.data.photos))
    }
}

export const getProfileStatus = (userId: number, statusText: string) => {
    return async (dispatch: any, getState) => {
        const response = await profileAPI.getProfileStatus(userId)
        dispatch(setUserStatus(response))
    }
}
export const updateProfileStatus = (statusText: string) => {
    return async (dispatch: any, setState) => {
        const response = await profileAPI.updateProfileStatus(statusText)
        if (!response.resultCode) {
            dispatch(setUserStatus(statusText))
        }
    }
}

export default reducerProfilePage;
