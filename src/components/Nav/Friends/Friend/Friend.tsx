import React from "react";
import s from './Friend.module.css';

type FriendPropsType = {
    id: number;
    name: string;
    ava: string;
}

function Friend(props: FriendPropsType) {
    return(
        <div className={s.friend}>
            <div id={`${props.id}`}>
                <img src={`${props.ava}`} alt={'ava'}/>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;
