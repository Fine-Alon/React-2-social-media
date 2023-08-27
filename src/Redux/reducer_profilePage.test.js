import reducerProfilePage, {addNewPostAC, deletePostAC} from "./reducer_profilePage";

let state = {
    postInfo: [
        {id: '1', countOfLikes: 12, message: 'I like write in the morning'},
        {id: '2', countOfLikes: 43, message: 'This is my first post'},
        {id: '3', countOfLikes: 25, message: 'so how are u today'},
    ]
}

test('should increment length of postInfo ', () => {

    let action = addNewPostAC('some text')

    let newState = reducerProfilePage(state, action)

    expect(newState.postInfo.length).toBe(4)

});
test('should the message be right ', () => {

    let action = addNewPostAC('some text')

    let newState = reducerProfilePage(state, action)

    expect(newState.postInfo[3].message).toBe('some text')

});
test('should the post be deleted ', () => {

    let action = deletePostAC('1')

    let newState = reducerProfilePage(state, action)

    expect(newState.postInfo.length).toBe(2)

});