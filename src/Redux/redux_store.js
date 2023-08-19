import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerProfilePage from "./reducer_profilePage";
import reducerDialogPage from "./reducer_dialogPage";
import reducerFriendsPage from "./reducer_friendPage";
import reducerUserAuth from "./reducer_auth";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: reducerProfilePage,
    dialogPage: reducerDialogPage,
    friendsPage: reducerFriendsPage,
    userAuth: reducerUserAuth,
    form: formReducer,
})

const  store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;