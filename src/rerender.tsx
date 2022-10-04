import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from "./redux/state";

export let rerenderApp = (state: any) => {
   ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}