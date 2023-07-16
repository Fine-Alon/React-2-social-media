const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState = {
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
    currentText: ''
}

const reducerDialogPage = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.currentText = action.newText
             return state;
        case SEND_NEW_MESSAGE:
            let text = state.currentText
            state.messages.push({id: '4', name: text})
            state.currentText = ''
             return state;
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})

export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT, newText: text
})

export default reducerDialogPage;
