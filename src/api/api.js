import axios from "axios";

const API_URI = 'https://social-network.samuraijs.com/api/1.0/'
const API_KEY = 'c3aa41e6-2952-4023-bbfe-5c1ef7821263'

export const getUsers = (countPerPage = 10, currentPage = 1) => {
    return (
        axios.get(API_URI + `users?count=${countPerPage}&page=${currentPage}`
            , {
                withCredentials: true
            })
    ).then(response => response.data)
}

export const postFollowUser = (id) => {
    return axios.post(API_URI + `follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": API_KEY
        }
    }).then(response => response.data)
}

export const deleteFollowerUser = (id) => {
    return axios.delete(API_URI + `follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": API_KEY
        }
    }).then(response => response.data)
}

export const getAuthInfo = () => {
    return (
        axios.get(API_URI + `auth/me`, {
            withCredentials: true
        }).then(response => response.data)
    )
}

export const getProfileInfo = (id,withCredentials = false) => {
    return (
        axios.get(API_URI + `profile/${id}`, {
            withCredentials: withCredentials
        }).then(response => response.data)
    )
}
