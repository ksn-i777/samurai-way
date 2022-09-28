import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="body">
                <div className="app-wrapper">
                    <Header/>
                    <Nav/>
                    <div className="content">
                        <Route path={'/profile'} component={Profile}></Route>
                        <Route path={'/messages'} component={Messages}></Route>
                        <Route path={'/news'} component={News}></Route>
                        <Route path={'/music'} component={Music}></Route>
                        <Route path={'/settings'} component={Settings}></Route>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
