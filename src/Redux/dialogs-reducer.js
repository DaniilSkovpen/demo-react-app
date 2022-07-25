const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dante' },
        { id: 2, name: 'Sanchez' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'What?' },
        { id: 5, name: 'Ргр?' },
    ],

    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'YO' },
        { id: 3, message: 'What?' },
        { id: 4, message: 'What?' },
        { id: 5, message: 'What?' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            
            }
        default: return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;