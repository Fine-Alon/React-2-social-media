const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
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

export const setUserAuthData = () => ({type: SET_INITIALIZED})
export default reducerUserApp;
