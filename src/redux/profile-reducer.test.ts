import {v1} from 'uuid';
import {addNewPostAC, newPostTextAC, ProfilePageType, profileReducer} from './profile-reducer';

test('correct add text of post', () => {

    const startState:ProfilePageType = {
        postsData: [
            {id: v1(), message: 'Yaaahhhooo', likes: 77, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'Happy birthday to me!', likes: 100, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'Have a good day!', likes: 60, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'How are you?', likes: 30, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'Hi. It is my first post', likes: 15, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        ],
        newPostText: '',
    }

    const action = newPostTextAC('qqq')

    const endState = profileReducer(startState, action)

    expect(endState.newPostText).toBe('qqq')
})

test('correct add post', () => {

    const startState:ProfilePageType = {
        postsData: [
            {id: v1(), message: 'Yaaahhhooo', likes: 77, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'Happy birthday to me!', likes: 100, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'Have a good day!', likes: 60, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'How are you?', likes: 30, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
            {id: v1(), message: 'Hi. It is my first post', likes: 15, ava: 'https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg'},
        ],
        newPostText: 'ttt',
    }

    const action = addNewPostAC()

    const endState = profileReducer(startState, action)

    expect(endState.postsData.length).toBe(6)
    expect(endState.postsData[0].message).toBe('ttt')
})