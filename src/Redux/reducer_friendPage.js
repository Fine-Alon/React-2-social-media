const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SHOW_MORE_BTN = 'SHOW_MORE_BTN'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {
        //     id: 1, fullName: 'Ilona', status: 'hi hi everyone',
        //     location: {city: 'Haifa', country: 'Israel'}, followed: false,
        //     photoSrc: "https://cdn.dribbble.com/userupload/8375518/file/original-72857307fff5fd7bdf6a8f0263426c3c.png?compress=1&resize=840x630&vertical=center",
        // },
        // {
        //     id: 2, fullName: 'Sambo', status: 'lets go everyone',
        //     location: {city: 'Moscow', country: 'Russia'}, followed: true,
        //     photoSrc: "https://cdn.dribbble.com/userupload/8389623/file/original-f9a95a02a522b67fa6690cb71ff01a31.jpg?compress=1&resize=840x630&vertical=center",
        // },
        // {
        //     id: 3, fullName: 'Andrey', status: 'give me your attestation ',
        //     location: {city: 'Kiev', country: 'Ukraine'}, followed: true,
        //     photoSrc: "https://cdn.dribbble.com/userupload/8247912/file/original-aaada9d631f65e62a47e000684572621.png?compress=1&crop=0x191-2000x1691&resize=840x630&vertical=center",
        // },
    ],
}

const reducerFriendsPage = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users:[...state.users,...action.users]
            }
        case SHOW_MORE_BTN :
            return state;
        default:
            return state;
    }
}

export let ACFollowUser = (userId) => ({type: FOLLOW_USER, userId})
export let ACUnFollowUser = (userId) => ({type: UNFOLLOW_USER, userId})
export let ACSetUser = (users) => ({type: SET_USERS, users})
export let ACShowMoreBtn = () => ({type: SHOW_MORE_BTN})

export default reducerFriendsPage