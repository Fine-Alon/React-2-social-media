import {authAPI, loginApi, usersAPI} from "../api/api";

const SEND_LOGIN_DATA = 'SEND_LOGIN_DATA'

let initialState = {
    loginData: {
        email: '',
        password: '',
        isRemember: false,
        captcha: false,
    }
}
const reducerUserLogin = (state = initialState, action) => {
    switch (action.type) {
        case SEND_LOGIN_DATA:
            return {
                ...state,
                loginData: [...action.loginData]
            }
        default:
            return state;
    }
}
export const sendLoginData = (loginData) => ({type: SEND_LOGIN_DATA, loginData})

export const loginUser = (data) => {
    return (dispatch, getState) => {
        dispatch(sendLoginData(data))
        loginApi.login(data).then(response => {
            if (!response.resultCode)
            console.log(response)
        })
    }
}
export default reducerUserLogin;
