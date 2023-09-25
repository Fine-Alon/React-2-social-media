const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    name: string
}

const initialState = {
    dialogs: [
        {id: '1', name: 'Sambo'},
        {id: '2', name: 'Ilona'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Misha'},
        {id: '5', name: 'Dima'},
    ] as Array<DialogType>,
    messages: [
        {id: '1', name: 'wound'},
        {id: '2', name: 'charity'},
        {id: '3', name: 'who are you?'},
        {id: '4', name: 'tic ti tic'},
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const reducerDialogPage = (state = initialState, action: any): InitialStateType => {
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

type AddNewMessageACType = {
    type: typeof ADD_NEW_MESSAGE
    newMessageBody: string
}

export const addNewMessageAC = (newMessageBody: string): AddNewMessageACType => ({
    type: ADD_NEW_MESSAGE,
    newMessageBody
})

export default reducerDialogPage;
