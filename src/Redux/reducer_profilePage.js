const ADD_POST_TO_STATE = 'ADD_POST_TO_STATE'
const TEXT_UPDATING = 'TEXT_UPDATING'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
    postInfo: [
        {id: '1', countOfLikes: 12, message: 'I like write in the morning'},
        {id: '2', countOfLikes: 43, message: 'This is my first post'},
        {id: '3', countOfLikes: 25, message: 'so how are u today'},
    ],
    messageToPost: 'AlonMMA',
    userProfile: null,


}

const reducerProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_TO_STATE:
            let newPost = {id: '4', countOfLikes: 0, message: state.messageToPost}
            return {
                ...state,
                postInfo: [...state.postInfo, newPost],
                messageToPost: '',
            }
        case TEXT_UPDATING:
            return {
                ...state,
                messageToPost: action.value
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST_TO_STATE})

export const textUpdatingActionCreator = (text) => ({type: TEXT_UPDATING, value: text})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export default reducerProfilePage;
