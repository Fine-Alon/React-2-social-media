import axios from "axios";

const API_URI = 'https://social-network.samuraijs.com/api/1.0/'
const API_KEY = 'c3aa41e6-2952-4023-bbfe-5c1ef7821263'

const instance = axios.create({
    baseURL: API_URI,
    headers: {"API-KEY": API_KEY},
    withCredentials: true,
})

export const usersAPI = {
    getUsers(countPerPage = 10, currentPage = 1) {
        return (
            instance.get(`users?count=${countPerPage}&page=${currentPage}`, {})
        ).then(response => response.data)
    },
    subscribeUser(id) {
        return instance.post(`follow/${id}`, {}, {}).then(response => response.data)
    },
    unsubscribeUser(id) {
        return instance.delete(`follow/${id}`, {}).then(response => response.data)
    },
    getProfileInfo: (id, withCredentials = false) => {
        return (
            instance.get(`profile/${id}`, {}).then(response => response.data)
        )
    },
}

export const authAPI = {
    me() {
        return (
            instance.get(`auth/me`, {}).then(response => response.data)
        )
    }
}
