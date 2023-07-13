import {renderEntireThree} from "../render";

let state = {
    friendPage: {
        chats: [
            {
                id: '1', name: 'Ilona',
                src: "https://cdn.dribbble.com/userupload/8375518/file/original-72857307fff5fd7bdf6a8f0263426c3c.png?compress=1&resize=840x630&vertical=center",
            },
            {
                id: '2', name: 'Sambo',
                src: "https://cdn.dribbble.com/userupload/8389623/file/original-f9a95a02a522b67fa6690cb71ff01a31.jpg?compress=1&resize=840x630&vertical=center",
            },
            {
                id: '3', name: 'Andrey',
                src: "https://cdn.dribbble.com/userupload/8247912/file/original-aaada9d631f65e62a47e000684572621.png?compress=1&crop=0x191-2000x1691&resize=840x630&vertical=center",
            },
        ],
    },
    profilePage: {
        postInfo: [
            {id: '1', countOfLikes: 12, message: 'I like write in the morning'},
            {id: '2', countOfLikes: 43, message: 'This is my first post'},
            {id: '3', countOfLikes: 25, message: 'so how are u today'},
        ],
        messageToPost: 'AlonMMA'
    },
    dialogPage: {
        dialogs: [
            {id: '1', name: 'Sambo'},
            {id: '2', name: 'Ilona'},
            {id: '3', name: 'Andrey'},
            {id: '4', name: 'Misha'},
            {id: '5', name: 'Dima'},
        ],
        messages: [
            {id: '1', name: 'wound'},
            {id: '2', name: 'charity'},
            {id: '3', name: 'who are you?'},
            {id: '4', name: 'tic ti tic'},
        ],
    },
}
window.state = state;

export let addPostToState = () => {
    let newPost = {id: '4', countOfLikes: 0, message: state.profilePage.messageToPost}
    state.profilePage.postInfo.push(newPost)
    state.profilePage.messageToPost = ''
    renderEntireThree(state);
}

export let textUpdating = (value) => {
    let newValue = value
    state.profilePage.messageToPost = newValue
    renderEntireThree(state);
}

export default state;