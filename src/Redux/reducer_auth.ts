import {authAPI, securityAPI} from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS'

let initialState = {
    authEmail: null as null | string,
    authUserId: null as null | number,
    authLogin: null as null | string,
    isAuth: false,
    captchaURL: null as null | string,
}

export type InitialStateType = typeof initialState

const reducerUserAuth = (state = initialState, action: any): InitialStateType => {
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

type SetUserAuthDataACPayloadType = {
    authEmail: string | null
    authUserId: number | null
    authLogin: string | null
    isAuth: boolean
}

type SetUserAuthDataACType = {
    type: typeof SET_AUTH_DATA
    payload: SetUserAuthDataACPayloadType
}

export const setUserAuthData = (authEmail: string | null, authUserId: number | null, authLogin: string | null, isAuth: boolean): SetUserAuthDataACType => ({
    type: SET_AUTH_DATA,
    payload: {authEmail, authUserId, authLogin, isAuth},
})

type SetCaptchaURLACType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS
    payload: { captchaURL: string }
}
export const setCaptchaURL = (captchaURL: string): SetCaptchaURLACType => ({
    type: SET_CAPTCHA_URL_SUCCESS, payload: {captchaURL}
})

export const getAuthUserData = () => {
    return async (dispatch: any, getState: object) => {
        const response = await authAPI.me()
        if (!response.resultCode) {
            let {email, id, login} = response.data
            dispatch(setUserAuthData(email, id, login, true))
        }
    }
}
export const loginUser = (email:string, password:string, rememberMe:boolean, captcha:string, setError:any) => async (dispatch:any, getState:object) => {
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
export const getCaptchaURL = () => async (dispatch:any, getState:object) => {
    const response = await securityAPI.getCaptchaURL()
    const captchaURL = response.data.url
    dispatch(setCaptchaURL(captchaURL))
}
export const logoutUser = () => {
    return async (dispatch:any, getState:object) => {
        const response = await authAPI.logout()
        if (!response.resultCode) {
            dispatch(setUserAuthData(null, null, null, false))
        }
    }
}

export default reducerUserAuth;
