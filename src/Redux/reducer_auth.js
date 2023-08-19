import {authAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
    authEmail: null,
    authUserId: null,
    authLogin: null,
    isAuth: false,
}

const reducerUserAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setUserAuthData = (authEmail, authUserId, authLogin, isAuth) => ({
    type: SET_AUTH_DATA,
    payload: {authEmail, authUserId, authLogin, isAuth}
})

export const getAuthUserData = () => {
    return (dispatch, getState) => {
        authAPI.me().then(response => {
            if (!response.resultCode) {
                let {email, id, login} = response.data
                dispatch(setUserAuthData(email, id, login, true))
            }
        })
    }
}
export const loginUser = (email, password, rememberMe) => {
    return (dispatch, getState) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (!response.resultCode) {
                dispatch(getAuthUserData())
            }
        })
    }
}
export const logoutUser = () => {
    return (dispatch, getState) => {
        authAPI.logout().then(response => {
            if (!response.resultCode) {
                dispatch(setUserAuthData(null, null, null, false))
            }
        })
    }
}

export default reducerUserAuth;
