const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

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
}

const reducerDialogPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: '5', name: action.newMessageBody}],
            }
        default:
            return state;
    }
}
export const addNewMessageAC = (newMessageBody) => ({type: ADD_NEW_MESSAGE,
    newMessageBody})

export default reducerDialogPage;
