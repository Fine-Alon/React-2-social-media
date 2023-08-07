import {combineReducers, createStore, applyMiddleware} from "redux";
import reducerProfilePage from "./reducer_profilePage";
import reducerDialogPage from "./reducer_dialogPage";
import reducerFriendsPage from "./reducer_friendPage";
import reducerUserAuth from "./reducer_auth";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: reducerProfilePage,
    dialogPage: reducerDialogPage,
    friendsPage: reducerFriendsPage,
    userAuth: reducerUserAuth,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;