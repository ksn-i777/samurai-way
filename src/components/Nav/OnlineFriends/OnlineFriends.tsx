import React from "react";
import s from './OnlineFriends.module.css';
import {OnlineFriend} from "./OnlineFriend/OnlineFriend";
import {OnlineFriendType} from '../../../redux/navbar-reducer';


type OnlineFriendsPropsType = {
    onlineFriendsData: Array<OnlineFriendType>,
};

export function OnlineFriends(props: OnlineFriendsPropsType) {

    let onlineFriends = props.onlineFriendsData.map((el) => <OnlineFriend key={el.id} id={el.id} name={el.name} ava={el.ava}/>)
    
    return (
        <div className={s.onlineFriends}>{onlineFriends}</div>
    )
}
