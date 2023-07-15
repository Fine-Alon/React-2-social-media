const ADD_POST_TO_STATE = 'ADD-POST-TO-STATE'
const TEXT_UPDATING = 'TEXT-UPDATING'

const reducerProfilePage = (state, action) => {

    switch (action.type) {
        case ADD_POST_TO_STATE:
            let newPost = {id: '4', countOfLikes: 0, message: state.messageToPost}
            state.postInfo.push(newPost)
            state.messageToPost = ''
            return state;
        case TEXT_UPDATING:
            state.messageToPost = action.value
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST_TO_STATE})

export const textUpdatingActionCreator = (text) => ({type: TEXT_UPDATING, value: text})

export default reducerProfilePage;
