import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import About from "./About/About";


function Profile(props: any) {
    return(
        <div className={s.profile}>
            <About />
            <NewPost dispatch={props.dispatch} newPostText={props.state.newPostText}/>
            <Posts postsData={props.state.postsData}/>
        </div>
    )
}

export default Profile;
