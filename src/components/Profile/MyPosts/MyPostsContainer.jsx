import {addNewPostAC} from "../../../Redux/reducer_profilePage";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postInfo: state.profilePage.postInfo,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(addNewPostAC(newPostText))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps,
    mapDispatchToProps)(MyPosts)

export default MyPostsContainer;