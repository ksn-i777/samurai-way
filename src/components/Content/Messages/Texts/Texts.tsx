import React, {ChangeEvent} from "react";
import s from "./Texts.module.css";
import {Text} from "./Text";
import {TextType} from "../../../../redux/messages-reducer";
import {Redirect} from 'react-router-dom';

type TextsPropsType = {
    newMessageText:string,
    textsData:Array<TextType>,
    changeNewMessageText(newText:string):void,
    sendNewMessage():void,
    isAuth: boolean,
};

export function Texts(props:TextsPropsType) {

    function onChangeNewMessageText(e:ChangeEvent<HTMLTextAreaElement>):void {
        const newText:string = e.currentTarget.value
        props.changeNewMessageText(newText);
    }
    function onSendNewMessage():void {
        if (props.newMessageText !== '') {
            props.sendNewMessage();
        }
    }
    return props.isAuth
        ?
        <div>
            <div className={s.texts}>
                {props.textsData.map(el => <Text key={el.id} id={el.id} message={el.message}/>)}
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={onChangeNewMessageText}></textarea>
            </div>
            <div>
                <button onClick={onSendNewMessage}>Send message</button>
            </div>
        </div>
        :
        <Redirect to={'/login'}></Redirect>
}