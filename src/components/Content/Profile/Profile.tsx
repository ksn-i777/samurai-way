import React from "react"
import s from './Profile.module.css'
import { About } from './About/About'
import { NewPostContainer } from './NewPost/NewPostContainer'
import { PostsContainer } from './Posts/PostsContainer'
import { Preloader } from '../../Preloader/Preloader'
import { ProfileType } from '../../../redux/profile-reducer'

type ProfilePropsType = {
    profile: ProfileType,
}

export function Profile(props: ProfilePropsType) {
    return !props.profile ? <Preloader/> :
        <div className={s.profile}>
            <About {...props.profile}/>
            <NewPostContainer/>
            <PostsContainer/>
        </div>
}