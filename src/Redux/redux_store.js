import {combineReducers, createStore} from "redux";
import reducerProfilePage from "./reducer_profilePage";
import reducerDialogPage from "./reducer_dialogPage";
import reducerFriendsPage from "./reducer_friendPage";

let reducers = combineReducers({
    profilePage: reducerProfilePage,
    dialogPage: reducerDialogPage,
    friendsPage: reducerFriendsPage,
})

let store = createStore(reducers)

window.store = store;

export default store;