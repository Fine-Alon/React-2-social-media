import {getAuthUserData} from "./reducer_auth";

export type InitialStateType = {
    isInitialized: boolean
}

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState: InitialStateType = {
    isInitialized: false,
}
const reducerUserApp = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state;
    }
}

type InitializedSuccessACType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = (): InitializedSuccessACType => ({type: SET_INITIALIZED})

export const initializeApp = () => async (dispatch: any) => {
    const promise = await dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        }
    )
}

export default reducerUserApp;
