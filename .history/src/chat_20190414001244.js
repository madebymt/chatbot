const ON_MESSAGE = "ON_MESSAGE";

export const sendMessage = (text, sender = "user") => ({
    type: ON_MESSAGE,
    payload: {
        text,
        sender
    }
});

const messageReducer = (state = [], action => {
    switch (action, type) {
        case ON_MESSAGE:
            return [...action];
        default:
            return state;
    }
})