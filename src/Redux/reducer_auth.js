import {authAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_SERVER_ERROR_MESSAGE = 'SET_SERVER_ERROR_MESSAGE'

let initialState = {
    authEmail: null,
    authUserId: null,
    authLogin: null,
    isAuth: false,
    serverErrorMessage: ''
}

const reducerUserAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_SERVER_ERROR_MESSAGE:
            return {
                ...state,
                serverErrorMessage: action.serverErrorMessage
            }
        default:
            return state;
    }
}

export const setUserAuthData = (authEmail, authUserId, authLogin, isAuth) => ({
    type: SET_AUTH_DATA,
    payload: {authEmail, authUserId, authLogin, isAuth}
})
export const setServerError = (serverErrorMessage) => ({
    type: SET_SERVER_ERROR_MESSAGE, serverErrorMessage
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
export const loginUser = (email, password, rememberMe) => (dispatch, getState) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        } else  {
            dispatch(setServerError(response.messages[0]))
        }
    })
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
