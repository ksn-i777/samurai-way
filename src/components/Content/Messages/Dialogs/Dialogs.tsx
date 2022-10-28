import React from "react";
import s from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {UserType} from '../../../../redux/messages-reducer';

type DialogsPropsData = {
    usersData: Array<UserType>;
};

export function Dialogs(props: DialogsPropsData) {
    return(
        <div className={s.dialogs}>
            {props.usersData.map((el) => <Dialog key={el.id} id={el.id} name={el.name} ava={el.ava} />)}
        </div>
    )
};