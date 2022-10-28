import React from 'react';
import s from './Content.module.css'
import {Profile} from "./Profile/Profile";
import {Messages} from "./Messages/Messages";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Route} from "react-router-dom";

type ContentPropsType = {
    store: any,
};

export function Content(props: ContentPropsType) {
    return (
        <div className={s.content}>
            <Route
                path="/profile" render={() => <Profile store={props.store}/>}>
            </Route>
            <Route
                path="/messages" render={() => <Messages store={props.store}/>}>
            </Route>
            <Route path="/news" render={() => <News/>}></Route>
            <Route path="/music" render={() => <Music/>}></Route>
            <Route path="/settings" render={() => <Settings/>}></Route>
        </div>

    );
}