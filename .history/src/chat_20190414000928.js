const ON_MESSAGE = "ON_MESSAGE";

export const sendMessage = (text, sender = "user") => ({type: ON_MESSAGE, text, sender})