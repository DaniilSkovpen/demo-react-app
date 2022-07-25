import profileReducer, { addPostActionCreator, setPostDelete } from "./profile-reducer";

let state = {
        posts: [
            { id: 1, message: 'Hi, How are u', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 33 },
            { id: 3, message: 'Hi, How are u', likesCount: 12 },
            { id: 4, message: 'Hi, How are u', likesCount: 12 }
        ],
    }

it('new post should de added', () => {
    // 1. test data
    let action = addPostActionCreator('bushido')
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
}); 

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('bushido')
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[0].message).toBe('bushido');
});

it('after deleting length should be decrement', () => {
    // 1. test data
    let action = setPostDelete(1)
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
}); 

it('after deleting length should`d be decrement if id is incorrect', () => {
    // 1. test data
    let action = setPostDelete(1000)
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
}); 