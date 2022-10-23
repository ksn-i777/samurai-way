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
    onlineFriendsData: Array<OnlineFriendType>,
};
export type OnlineFriendType = {
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
                {id: 5, name: 'Lera Lerova', ava: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxEREBAOEBEQEBAQDg4ODg4QEBAODw4OFhIYGBYSFhYaHysiGhwpHRYWIzQjKCwuMTI0GSE3PDcxOyswMS4BCwsLDw4PGhARGTAfHx8wMDEwMDAwMC4wMDAuLi4uMDAwLi4wMDAuLi4uLjAuLjAwMDAwMC4uLjAwMDAwLi4wLv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EAD0QAAICAQIEBAMFBgUDBQAAAAECAAMRBBIFITFBBhNRYSJxgSMyQpGhFGKCscHRB1JyorJDs8IkM1Njc//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA0EQACAgECAgYJAwUBAAAAAAAAAQIRAwQSITETQVFhcbEFMoGRocHR4fAiQlIjU6LS8Qb/2gAMAwEAAhEDEQA/APlsrLQnpHHZTEMS+JGIDKwk4kwAkQBhCMRaEiWjJDEMSRIMBBCGIYjAkiQBJAkwAiQZaRiAFJMtiEVDKwlsQxCgIEIQgIJMiEAJhCEACEIQAIQhAAhCEACEIQApiGJeEKGVxDEmTChWVxDEtCFDspiTiTDEYBCGJOICIk4hiTiMCMSQJbbJVY6FZAWWIlwJ0eEcA1Oq/wDYpdxnBfklYPpvbA/WNohyOUFzLPp2AyRgHpnln5es+peG/wDDuunFmoItu/Cq866zjrz+8ZTjP+GttzGyu6kZJIDhw3sC2D/aZ70QsqbPlhErieh474P1mlybaH2D/q1/a1Y9Sy/d+uJwSsqk+RqpWUxCWKyDChlTAQIhJGEISYAEJEIATCEIAEIQgAQhDEACEmEADEMS+IYjoVlIS+2G2MLKQltkMQCysJfbDbALKYlgsuElwkpIlyE7ZKrHbJIrlbSd5QLLqh6D6Ad4xK51OA8L/aL66SPgJLW45YqUZbn2z0z6sJTVKyHNHZ8M+CE1Fa333PUjjNS0Cs2Ova0s4YKp7ADJGCSM4H0HQadqUCeZ51agBXZa0sUejBAFPzAHy7njm8m9NNX8VzjKUJtLhMZ3NkgKuB7npywQY3gvGFstu0pOLaSVtpcBXQZxuGCQy5wMg5BIyBkZ47hupy4/nsMJ9LOO9x/T5fPxZ6WiwGNdhPPX8VFAJbmQ2xVzjc/pNGn1Vjrvd6UyM46tiVKFcTOE74GjWakjoZ4/x54Uq/Yzq6wBqKy12px0etjluXQbMjmPwqc5M9DfYLMqliM6ru2Ac2VRk4Pc454wOh59otGtv1FldaLZVVR52pLNyKWMyrUq9GJFdhOexWTJqNN8KLwb5S/p8b+X576PizLFMJ1+O8PWm0rW2+lwtunsznzKH5oc+o6H3Uzluk6HTVo7IsXKyxErIZoEmRCABCSIRARJhiSBACBCWkRiIkyJOIARCWxCADtsNsdshsl0Y7hG2G2P2SNkKDcJxJ2xuySEjoNwnbJCxuyWFcNotwtVlwsYtcatUtRM5TEhJcVxwqjq6ZoombyUIrpns/AukCrdYR8bphPXYCM/rj8pxNDoCxAA5k4nTp4uKdSETmtCKHH+bd98f8ZOZpJR63/0yTlk3beKirfhaXm0eY8R06/S6y7idD2rsYOdQGXdX5pI2H1GcryGOXaL/wAPdVZbxMam61msJssdi3OwlSG3eoIJn1K/gel19W4YsUjJAOHQ+47H58pxaf8AC/TV2i3zNQoXJOLFrAGOeWCggfIieVPA91xZ6WPWw2KORfcV45tdDYygt5NzbgORyUB/r+s4+g8Qb6s/Gjj4XrYhiPRgR1B59h0nqr8Wte7AEW2uxBHIqeQyPkBPE+ItPXpgStlRHb7VPOC/5dmct8xz9u89LkrZ5kIRn+jr6mWHHHGoqFakuHR2s3EeWoOeQHUnn1/rOV4t1+oXVFa7LKzdp6abFRzWtihmQK3PmOWefqZ1fC4oJFluo0y88pX51YsJ9WGf0nrtLXoLmNeq8h03B6y7AhXwAfiB5AgL7cphng8keZ1Yc0cE6S5Kn4njadJYeH6Y2j4qrbageR+zLdMjqAwP5mc26mfS/GQ0x0wq0xRgLK8+Xg1qoVsKpHLsOQ6CeCupxNsMP6SRlLPuyN9rOQ9ES1M6b1RLVQcTeOVnOKSNs2tTFNXIo2WQz4hHFIBIqHuQrENsbshshQbheIbI3bDbChbhe2Ttl9snbCg3C9siN2whQtxr2w2R+yGybUcu4RshsmjZJ2R7RbzP5ckVzR5ckVxqIukECuXWqPWqNSqWokPIZlqjkqmhaY+miWkYyymevTzdpdFntNGn02Z1tJpgBHJ0jlnlb4IzPt01RtIy5GKl9X7Ced4bobGsz1Lli57sD1npm0pvbcfuAkVr6qPxfWdjg3BQGDEdOk+e1OeWTJuXKPL6n2/ozRY9PpnHIrlP1vDs+PH3dSZxrvDutpCvWT5Zw5eqs3WBSOgUHKn3wRMdmsRxh9RfcB1Damxf0rK4nv8AxFqGp0jis4tdPKrPdSRgt9Bk/lPjt3ArEbfk9efy7z1cOTcrmj5aWK20ptdnBedX8TuHX6ZRjaG/17tT/wBwtHUeLFrG2myykelNddX/ABE51PAd46nP85qq8JnBbsOs1yRj2IzjFfzl7zQ3i21/h83UN7s8RqOLVh9ttFlmRyZtmH/eGVPKadPwdayOXScM8SNevvVl8zTvaFtpPTOwfaVn8LD1H1yOU58ik4VB0/BG2kWHpX0sXONfyafjwavw+dHT4LrKy7VCqqiq37i1rtCt2Zj3PYn0PtJ4pw4qzDHMEgj3jddw0VsCp3IcOlmMbqyeR/oR6gzoohtqVzzYDy2PqVA5/liGizucXGfOPl9uT7qNvTOmhp5wz4fUn7k/uvjZ5C6nEQ1c7ut0hB5zn2UTscbOHHms5j1xL1zovXE2VTNwOqOQwFJHlzSySNszo2UzP5cNkeVkbYD3CdknbG7ZG2Kg3C9sNsZththQbhe2EZthCg3G4LLbJoFcny5ucW8ziuWFc0CuWFUZO4ziuWWuaBVLLVKolzErXG11x60xqUxmTmLqqmqmiXpqm2qqOznnMjSUc5p4iNte0ct3LPpn4c/74zTVc4zitXw1n/7VB+oP9pzamVY5NdhpoEp6vHF8nJDuDUZ2r2GJ6vS6YchjpzM4fAdOeoGcDJmjxNxZqa1opYDUXZCv18lPxW/MdB7/ACni4oOUqR9prNQoQfHi/wA8vM5vi/iKPqBQjBhUu18dFsJO5fmAF/l2mTRaNLDtYDDDBPoD3nmvEhOk8m5MtUCEtycsQerE92zk+5M7fDdcPhYHqAR7ierGO2NI+ayPc9/U/kL02ldAFcbbEARx+8vI/wApvGsKVsGC4P4zywPedFlrvAbIWwADd2cdg3955rW23l3ULseoApS+PicMGG4jkQQOxxg95ya7Wx0+LdLm+C8e19y5948WF5J93X+dp19RwmxVFjhkBYJl9m1XPRThiVJyPvAdQDjM4h8Hhb2v1b4R9tldFWC78hzaz7qry7ZJ9pq8P3WLptQj2XFtVrF1NrakhrKwGQmtRuOT8GN2B1z2AmvVVFVCh2KcyATkBj1IHafNav0xmgnjxzVv9yStfLvurXl6sNLhi90V1dZqfh9FtAppf4yrXUI5yyDzHr2lu6koR7HE5PBSQttbAqy2LlTyKtzDA+/I/lL0P5NLXoTmuwC0E5Gyw4V1z0+PAI77lPrOnSEvzqFwHdKxaB3dMjd9QR+U+h9HZHmhDPdtqn+dto4dfkUcGTBXDhKPc7V/C/D2nH4hQCJxL6sT1OspwCJwdXVzntxZ4OKVHItriXE32pMtqSjuhIw2VReybHWKKTJxOmMjMVkbZoNcrskbS9wnEjbHbJG2FD3CtsNsYRDEVDsXtkxmIQFZ1wkkJGrSYwUGbUcDmhIWXCRy6cy40xjM3NGcJGIkcukMYukMCXNClWORZddKY5NI0DNyRWpZtpWLr0jTTXp2iZjJjapuenzEK98ZX/UOkxrS036VWmU1apixzcJKUXTXFewroNadLVqNVqM1U01sWB+8wXnkD9AO5M4dlrWadOKXfDZrDWaKcn4KCm4t/wAQPY5/Fy9DxThSaqtaLRmrz67La+1yodwRvbcFJ+WJ5DxlxXz7bTWc16Q/sy/5RapPmfXIx/AJxYcWySiuR789Y9S3kmv1Ps5LqXz8vC2rqXUVPQ/RxyPoexnG4dqWqAqfk1fwH6d5HCuK7xk8iDhh6GauLaA2r51fNwPiA/Ev952pGVOP6WdXTcTwORiy3nWu4JytCL/ECx/r+s8c/EHTPt19p67wcwKVl/8ArVh3PfL8x+QwPpPC/wDQ5li0mzrk17k7fkl7Tr0mF9Ju7Dn6TUh2Z2sfaGwgXaGf97mDgZyMY7TsJrK9oAa8juA1Wce2UmLjXAVp1PmVVtYNQ7WMivsAdceYQCQMElW/jM8zq+NX1i1alrUqXUFj5tleCe3TI98zzFoMU8EMypxlVcOPttdXJ952dJeRwXUep4rximrytOil7dRbm5HbeVoCttRyMDLtgjA5bM8jtM7nANA1QZslqnQeUx6lSeYb95SMH8+hnzHQWJ5a6i24+f8AtdTVoVObCfvOzHryPb3n1Hg+vDpYoIwpRgB++DnHt8M9LT7tLq8enj6s437Vx+zOH0hU8En1x+PFX5ltb3nB1iczO1qnnJvM+jjyPm4s5lqTNak32zLYJZ2QZgdIsrNdqxBWJnTGQkiVKxxEqViotMSVlSI4iUIkUWpC9sgiXIkYiopMpiRGbYQoe49LWvt/Oakqkl8dpdbh3m9HkORZaY1aIV2g9I6t/YwozciFpl1QRyDMYKhEQ5Gf4RHVBZJ0/pHJp+naS2ibL1Vg9JoSgStbKJprImE5MEQtEfVVJAkI5z0xMXJs1jFWakU4OOuDj59p43WeFf2Xg1aN8V62DU6t+pfUW8rDnuASoz6IJ7WhpfV0LdTZS33bEZG+TDGZhu2zUuw9nBTxuPafBx9lYT2b+c7/AAriGORM5XFtKUZ63HxI7Vt/qU4P6iY9PY3QH4h2J6/Kem49getGz0PHOHae5GLIu7B+IcjOdwHiDqRT+KlFUH/Mg5Bv5TONdb0IMzaLWKuoD5UgqUYE4GXsVeZHpzb+GeR6Y00cumba4x4rv7u+/udGlcovbfDyPR+Kdc1yVVq32wL3D7QIFU7Uy3Ikqdr9O6Ccu7h61UtYUXKrl1rxnB788GJeylrxbcpCmjS2qp+PG6mttoX8WGLH4sDOep6P8aahDRpUqsszfm21PujyR8KjkefPPL2H18zHpckNPjX7IxTvkuPPx7OHYdm+O6m+L+RydHw+5Ky+ysU6kMEOQznBHL1nt/Bmjeq63T2hlteiu0IQQQq45+3KwflOx4E8GLQU1r3eeGrVtOmCVr3DPmEkDLY5e2T9O63D8auzUkZ3adK0JOSp3sXAHYELWfnmerkUHLG8fHY+fc07Xt4fnPztVK4zUv3L6UcjU6Ezn3aJp6u2rMyXacT0IZTwGmjyV2lb0mSzTH0nrbdIPSY7dH7Tbcio5GjytunPpENRPTW6SZX0ntGbRzHn2qMWa53n0XtEtoYGyzo4hSQUnZbQxZ0XtCi1nRyfLkeXOodF7SDo5O0vpkczy4TpfsciG0OlR6Y0g9RIOjHblNAEkCanmMXVpgO0clIEsBLCTYrJAlxKiWBkshjFjEiQYxWkMRW1ew6QWtgRnP0jA0sHithRspyOpz6e0YW9JiF0ut0wcDVTo6CNgRn7Ticw6iZtdqn8tyn39jbP9WOX6yOhs3jqZLguB4bxSu7UXvjG661vzYzyGvJB9Pccp6zXvqL8/wDp7cjqSNm49+bYB+n6dBxtVoQcrZ9m4HNHypHpz6f3nS7UT2MEkpc78DhUa68uEVyckABgGm+7h71raQxBFNjlgeeVG/8A8YrRUBLt+CVQMd2DjOOQ+c6Gk1LMftMYeuzKkfh5gD6kn6CeJq5Z5arHGF8NvbzlL7HdKUVxSr3HL0Wmu1bM9YLsoRSACQAqhV/RZ1To9VmqrVKUVBaadwKgj4d2P9s9D4eIqAWtVRc5woCjPrynV1uhXU212Wbvs6wFA5YPmpZ199gBHoZ7Gu0jemeHHz4LnSST7O5I8nJ6TfTVKNRXXzl9Pzmd/wAEagjQ0qxyVa1BnnyWxlx+k7LWZnD4ci1VrUg2oowoyTgfM8zNgvnPi0zxwjF8WkjzsuseSTaXC+BtZothEi2SLJptoxc7IsSZ7a5pLRTmaRbJMNlMQ1E6FkSRNlIRhaiLbTzcyypWUmFswNpoptPOiyxbJGXbOedPKnTzoFJUpAtM5/7PCbtkID3DQZIMVuk75ZFDQ0tuiQ8ndEKh2+TviN0ndChbR4eWFkzboF4tobTV5snzZj3w8yKkG02i2T50w+bINsW1BtNpvi3umNrpRrYUPaaXcTn6/hlFxBtrDEctwyrEehI6iXa2V8yJmkU4u4uhNvBqdmxVCL2CjGJjr8NUqd3xE+5nS82T5se5rrLUsi5SfErRpFQYAmmhOfWJFkclsniZONnSpMdvnNW+NF0Ntme2jcLJbzZgF0t5sWwKNvmyptmTzZBtj2BRoayULxJslS8pRChxaVLRReQXjodFy0oWlS0jMY6LEypMiRHQycwkQhQCd0ndFAyYUXQ3dJ3RQhEKhoaWzEgy4MQi2YEyMyMwGTmGZXMCYDoktKFoGVMAohjKMZJlTAogyDJkRFFYZlpWSMsDLBpUSwlEscjRqtELGLGQxoaWDRYkwJaGZkZlcwzGBbMMyuYZgItmGZXMMwAtmRmVzDMBk5hmEiUBOYSsmAGYS2ZEIFhmTCETETJ3QhJAndILQhAAzAQhAZBlSYQgBUmVMIQGEiEJLKIxDEIRDLASRCEoljFl1hCMkuISYQEwhCEBBmRCEBEyMwhAAkQhGBoNVP8A83rj7Nv1kmqntdkf/kQYQkqD/k/h9Cumj/bX+X+wplUHAsBHrtbnCEIldcxPIr9Ve9/U/9k='},
            ],
            textsData: [
                {id: 1, message: '111'},
                {id: 2, message: '222'},
                {id: 3, message: '333'},
                {id: 4, message: '444'},
                {id: 5, message: '555'},
            ],
            newMessageText: '',
        },
        navbar: {
            onlineFriendsData: [
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
        // вместо метода, отслеживающего изменение текста поста в инпуте profilePage
        if (action.type === NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            // вместо метода addPost
        } else if (action.type === ADD_NEW_POST) {
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

          // вместо метода, отслеживающего изменение текста сообщения в инпуте messagesPage  
        } else if (action.type === NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
            // вместо метода addMessage
        } else if (action.type === NEW_MESSAGE) {
            let newMessage = {
                id: 6,
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


