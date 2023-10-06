import axios from "axios";
import {UserType} from "../Types/Types";

const API_URI = 'https://social-network.samuraijs.com/api/1.0/'
const API_KEY = 'c3aa41e6-2952-4023-bbfe-5c1ef7821263'

const instance = axios.create({
    baseURL: API_URI,
    headers: {"API-KEY": API_KEY},
    withCredentials: true,
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10,
}

type AuthMeResponceType = {
    data: {
        id: number,
        email: string,
        login: string
    } | null
    resultCode: ResultCodesEnum
    messages: Array<string>
}
    type AuthLoginResponceType = {
    data: { id: number } | null
    resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
}

export const authAPI = {
    me() {
        return (
            instance.get<AuthMeResponceType>(`auth/me`, {}).then(response => response.data)
        )
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance.post<AuthLoginResponceType >(`/auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)

    },
    logout() {
        return (
            instance.delete(`/auth/login`).then(response => response.data)
        )
    }
}
export const securityAPI = {
    getCaptchaURL() {
        return axios.get('https://social-network.samuraijs.com/api/1.0/security/get-captcha-url')
    },
}
export const usersAPI = {
    getUsers(countPerPage = 10, currentPage = 1) {
        return (
            instance.get(`users?count=${countPerPage}&page=${currentPage}`, {})
        ).then(response => response.data)
    },
    subscribeUser(id: number) {
        return instance.post(`follow/${id}`, {}, {}).then(response => response.data)
    },
    unsubscribeUser(id: number) {
        return instance.delete(`follow/${id}`, {}).then(response => response.data)
    },
    getProfileInfo: (id: number, withCredentials: boolean = false) => {
        console.warn('Obsolete method. Please use profileAPI Object.')
        return (
            profileAPI.getProfileInfo(id)
        )
    },
}
export const profileAPI = {
    getProfileStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`).then(responce => responce.data)
    },
    updateProfileStatus(text: string = 'this is my default status from api.js :)') {
        return instance.put(`/profile/status`, {
            status: text
        }).then(responce => responce.data)
    },
    getProfileInfo: (id: number, withCredentials = false) => {
        return instance.get(`profile/${id}`, {}).then(response => response.data)

    },
    setPhoto(file: any) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(responce => responce.data)
    },
    updateProfileInfo(data: UserType) {
        return instance.put(`profile`, data).then(responce => responce.data)
    },
}

