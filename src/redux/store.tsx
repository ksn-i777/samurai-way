const NEW_POST_TEXT = 'NEW-POST-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';

export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    navbar: NavbarType,
};

export type ProfilePageType = {
    postsData: Array<PostType>,
    newPostText: string,
};
export type PostType = {
    id: number,
    message: string,
    likes: number,
};

export type MessagesPageType = {
    usersData: Array<UserType>,
    textsData: Array<TextType>,
    newMessageText: string,
};
export type UserType = {
    id: number,
    name: string,
    ava: string,
};
export type TextType = {
    id: number,
    message: string,
};

export type NavbarType = {
    friendsData: Array<FriendType>,
};
export type FriendType = {
    id: number,
    name: string,
    ava: string,
};


export let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Yaaahhhooo', likes: 77},
                {id: 2, message: 'Happy birthday to me!', likes: 100},
                {id: 3, message: 'Have a good day!', likes: 60},
                {id: 4, message: 'How are you?', likes: 30},
                {id: 5, message: 'Hi. It is my first post', likes: 15},
            ],
            newPostText: '',
        },
        messagesPage: {
            usersData: [
                {id: 1, name: 'Serg Sergeev', ava: 'https://sun9-49.userapi.com/impf/cUB52CTR3gVxO2ELF6mDtWvOqQqVp5uPyyuH4g/WNNDIhckWcY.jpg?size=536x559&quality=96&sign=770bd9ea6958e0bb4533c1ff4f59d46b&type=album'},
                {id: 2, name: 'Eva Ivanova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
                {id: 3, name: 'Leon Leonov', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
                {id: 4, name: 'Kira Kirova', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIhcGJZS9Bvz0kA1R08qPcujoX9M2FOSOjcmafklux3GrjMot-pMQcKo1UV7ubn8ABE0&usqp=CAU'},
                {id: 5, name: 'Tihon Tihonov', ava: 'https://klike.net/uploads/posts/2019-03/1551511825_37.jpg'},
                {id: 6, name: 'Sveta Svetina', ava: 'http://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B0%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-5.jpg'},
                {id: 7, name: 'Petr Petrov', ava: 'https://cpad.ask.fm/14e/63550/45ae/4910/98b7/f810f7cff901/original/35330.jpg'},
                {id: 8, name: 'Leonid Leonidov', ava: 'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg'},
                {id: 9, name: 'Kate Semenova', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5pEY1rZnd-QwkZY4Xb73i-SdM3FMPArByA&usqp=CAU'},
            ],
            textsData: [
                {id: 1, message: '111'},
                {id: 2, message: '222'},
                {id: 3, message: '333'},
                {id: 4, message: '444'},
                {id: 5, message: '555'},
                {id: 6, message: '666'},
                {id: 7, message: '777'},
                {id: 8, message: '888'},
                {id: 9, message: '999'},
            ],
            newMessageText: '',
        },
        navbar: {
            friendsData: [
                {id: 1, name: 'Serg Sergeev', ava: 'https://sun9-49.userapi.com/impf/cUB52CTR3gVxO2ELF6mDtWvOqQqVp5uPyyuH4g/WNNDIhckWcY.jpg?size=536x559&quality=96&sign=770bd9ea6958e0bb4533c1ff4f59d46b&type=album'},
                {id: 2, name: 'Eva Ivanova', ava: 'https://cpad.ask.fm/952/205/196/-69996983-1sqedpc-htihnh1g7el9hf0/original/avatar.jpg'},
                {id: 3, name: 'Leon Leonov', ava: 'https://otvet.imgsmail.ru/download/1574387_76738d630770e903cbe0a47a813d08b5_800.jpg'},
            ],
        },
    },

    // ОПИСАНИЕ ООП, КОТОРОЕ ИСПОЛЬЗУЕТСЯ ДАЛЕЕ => 36-38 УРОКИ

    // нашлась функция ререндера дерева, которую искали ниже по коду,
    // но она не делает ничего полезного, т.к. нет функционала, который она получит ниже
    _callSubscriber (state: StateType) {
    },

    getState () {
        return this._state
    },
    // здесь функция ререндера из этого файла переопределяется на функцию ререндера из файла индекс
    // получена функция ререндера из индекса с помощью колл бэка subscribe 
    subscribe (rerenderFunction: (state: StateType) => void) {
        this._callSubscriber = rerenderFunction;
    },

    // метод, заменяющий отдельные методы, которые были до этого, забрав их логику внутрь себя в завизимости от свойства тип объекта экшн
    dispatch (action: any) {
        // вместо метода addPost
        if (action.type === ADD_NEW_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likes: 0,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            // метод стора = вызов функции ререндера дерева из файла индекс с передачей ей стэйта
            // т.к. функция не определена мы выпрыгиваем наверх (замыкание) и ищем такую функцию
            this._callSubscriber(this._state);
            // вместо метода, отслеживающего изменение текста поста в инпуте profilePage
        } else if (action.type === NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            // вместо метода, отслеживающего изменение текста сообщения в инпуте messagesPage
        } else if (action.type === NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
            // вместо метода addMessage
        } else if (action.type === NEW_MESSAGE) {
            let newMessage = {
                id: 1,
                message: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.textsData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    },
}
// колл-бэк, запускающий метод отслеживающий изменение текста поста в инпуте profilePage
export const actionNewPostText = (text: string | undefined) => {
    return {
        type: NEW_POST_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления поста
export const actionAddNewPost = () => {
    return {
        type: ADD_NEW_POST,
    }
}
// колл-бэк, запускающий метод отслеживающий изменение текста сообщения в инпуте messagesPage
export const actionNewMessageText = (text: string | undefined) => {
    return {
        type: NEW_MESSAGE_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления сообщения
export const actionAddNewMessage = () => {
    return {
        type: NEW_MESSAGE,
    }
}


