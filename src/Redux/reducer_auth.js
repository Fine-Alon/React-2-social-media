import {authAPI, usersAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
    authEmail: null,
    authUserId: null,
    authLogin: null,
    isAuth: false,
    userData: null
}

const reducerUserAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_USERS_DATA:
            return {
                ...state,
                userData: {...action.userData}
            }
        default:
            return state;
    }
}

export const setUserAuthData = (authEmail, authUserId, authLogin) => ({
    type: SET_AUTH_DATA,
    data: {authEmail, authUserId, authLogin}
})
export const setUserData = (userData) => ({type: SET_USERS_DATA, userData})


export const getAuthUserData = () => {
    return (dispatch, getState) => {
        authAPI.me().then(response => {
            if (!response.resultCode) {
                let {email, id, login} = response.data
                dispatch(setUserAuthData(email, id, login))
                usersAPI.getProfileInfo(id, true).then(
                    response => {
                        dispatch(setUserData(response.data))
                    }
                )
            }
        })
    }
}


export default reducerUserAuth;
