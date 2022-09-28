import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return(
        <nav className={s.nav}>
            <div><NavLink to="/profile" activeClassName={`${s.item} ${s.active}`}>Profile</NavLink></div>
            <div><NavLink to="/messages" activeClassName={`${s.item} ${s.active}`}>Messages</NavLink></div>
            <div><NavLink to="/news" activeClassName={`${s.item} ${s.active}`}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName={`${s.item} ${s.active}`}>Music</NavLink></div>
            <div><NavLink to="/settings" activeClassName={`${s.item} ${s.active}`}>Settings</NavLink></div>
        </nav>
    )
}

export default Nav;
