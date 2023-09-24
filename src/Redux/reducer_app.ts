import {getAuthUserData} from "./reducer_auth";

type initialStateType = {
    isInitialized: boolean
}

const SET_INITIALIZED: 'SET_INITIALIZED' = 'SET_INITIALIZED'

type reducerUserAppType = {
    (state: Object, action: Object)=> state: Object
}

let initialState: initialStateType = {
    isInitialized: false,
}
const reducerUserApp = (state = initialState, action) => {
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

export const initializedSuccess: () => void = () => ({type: SET_INITIALIZED})

export const initializeApp = () => async (dispatch) => {
    const promise = await dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        }
    )
}

export default reducerUserApp;
