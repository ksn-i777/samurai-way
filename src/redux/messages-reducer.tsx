const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


export type UserType = {
    id:number,
    name:string,
    ava:string,
};
export type UsersDataType = {
    usersData:Array<UserType>
}

export type TextType = {
    id:number,
    message:string,
};
export type TextsDataType = {
    textsData:Array<TextType>,
    newMessageText:string,
};

export type MessagesPageType = {
    usersData:Array<UserType>,
    textsData:Array<TextType>,
    newMessageText:string,
};

export type NewMessageActionType = {
    type:typeof NEW_MESSAGE_TEXT ,
    newText:string,
};
export type AddNewMessageActionType = {
    type:typeof ADD_NEW_MESSAGE,
};
export type MessagesActionsType = NewMessageActionType | AddNewMessageActionType;

const initialState:MessagesPageType = {
    usersData: [
        {id: 1, name: 'Serg Sergeev', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
        {id: 2, name: 'Eva Ivanova', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
        {id: 3, name: 'Leon Leonov', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
        {id: 4, name: 'Kira Kirova', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
        {id: 5, name: 'Lera Lerova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
    ],
    textsData: [
        {id: 1, message: '111'},
        {id: 2, message: '222'},
        {id: 3, message: '333'},
        {id: 4, message: '444'},
        {id: 5, message: '555'},
    ],
    newMessageText: '',
};

export function messagesReducer(state = initialState, action:MessagesActionsType):MessagesPageType {

    const copyState:MessagesPageType = {...state}

    // вместо метода, отслеживающего изменение текста сообщения в инпуте messagesPage
    if (action.type === NEW_MESSAGE_TEXT) {
        copyState.newMessageText = action.newText;
        // вместо метода addMessage
    } else if (action.type === ADD_NEW_MESSAGE) {
        const newMessage:TextType = {
            id: 6,
            message: copyState.newMessageText,
        }
        copyState.textsData = [...state.textsData]
        copyState.textsData.push(newMessage);
        copyState.newMessageText = '';
    }
    return copyState;
}
// колл-бэк, запускающий метод отслеживающий изменение текста сообщения в инпуте messagesPage
export function actionNewMessageText(text:string):NewMessageActionType {
    return {
        type: NEW_MESSAGE_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления сообщения
export function actionAddNewMessage():AddNewMessageActionType {
    return {
        type: ADD_NEW_MESSAGE,
    }
}