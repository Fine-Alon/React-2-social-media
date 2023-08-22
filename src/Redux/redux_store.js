import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerProfilePage from "./reducer_profilePage";
import reducerDialogPage from "./reducer_dialogPage";
import reducerFriendsPage from "./reducer_friendPage";
import reducerUserAuth from "./reducer_auth";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import reducerUserApp from "./reducer_app";

let reducers = combineReducers({
    profilePage: reducerProfilePage,
    dialogPage: reducerDialogPage,
    friendsPage: reducerFriendsPage,
    userAuth: reducerUserAuth,
    app: reducerUserApp,
    form: formReducer,
})

const  store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;