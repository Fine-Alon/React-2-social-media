import {authAPI, loginAPI, securityAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS'

let initialState = {
    authEmail: null,
    authUserId: null,
    authLogin: null,
    isAuth: false,
    captchaURL: null,
}

const reducerUserAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
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
export const setCaptchaURL = (captchaURL) => ({type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaURL}})
export const getAuthUserData = () => {
    return async (dispatch, getState) => {
        const response = await authAPI.me()
        if (!response.resultCode) {
            let {email, id, login} = response.data
            dispatch(setUserAuthData(email, id, login, true))
        }
    }
}
export const loginUser = (email, password, rememberMe,captcha, setError) => async (dispatch, getState) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(setCaptchaURL(null))
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaURL())
        }
        setError("server", {
            type: "custom",
            message: response.messages
        });
    }
}
export const getCaptchaURL = () => async (dispatch, getState) => {
    const response = await securityAPI.getCaptchaURL()
    const captchaURL = response.data.url
    dispatch(setCaptchaURL(captchaURL))
}
export const logoutUser = () => {
    return async (dispatch, getState) => {
        const response = await authAPI.logout()
        if (!response.resultCode) {
            dispatch(setUserAuthData(null, null, null, false))
        }
    }
}

export default reducerUserAuth;
