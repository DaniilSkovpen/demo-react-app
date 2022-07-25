import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, How are u', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 33 },
                { id: 1, message: 'Hi, How are u', likesCount: 12 },
                { id: 1, message: 'Hi, How are u', likesCount: 12 }
            ],

            newPostText: 'Dante the best'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dante' },
                { id: 2, name: 'Sanchez' },
                { id: 3, name: 'Vlad' },
                { id: 4, name: 'What?' },
            ],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'YO' },
                { id: 3, message: 'What?' },
                { id: 4, message: 'What?' },
                { id: 5, message: 'What?' },
            ],

            newMessageBody: ''
        },
        sideBar: {
            friends: [
                { name: 'Dante' },
                { name: 'Sanchez' },
                { name: 'Vlad' },
            ]
        }
    },
   getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
};


