export type PostInfoType = {
    id: string
    countOfLikes: number
    message: string
}
export type UserContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type UserPhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: UserContactsType
    photos: UserPhotosType
}

export type UsersType={
    name:  null | string ,
    id: null |  number,
    photos: UserPhotosType
    status: null | string,
    followed: boolean
}