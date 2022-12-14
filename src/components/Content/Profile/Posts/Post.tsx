import React from "react";
import s from "./Post.module.css";
import {PostType} from '../../../../redux/profile-reducer';

export function Post(props: PostType) {
    return (
        <div className={s.post}>
            <img className={s.ava} src={props.ava} alt="ava"/>
            <div className={s.text}>
                <div id={`${props.id}`} className={s.message}>{props.message}</div>
                <div id={`${props.id}`} className={s.likes}>likes: {props.likes}</div>
            </div>
        </div>

    )
}