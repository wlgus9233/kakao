import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
         <nav className ="tab-bar">
            <NavLink to="/" exact={true} className="tab-bar_tab" activeClassName="tab-bar_tab_on">
                <i className="fa fa-user"></i>
                <span className="tab-bar_title">Friends</span>
            </NavLink>
            <NavLink to="/chats" className="tab-bar_tab" activeClassName="tab-bar_tab_on">
                <i className="fa fa-comment"></i>
                <span className="tab-bar_title">Chats</span>
            </NavLink>
            <NavLink to="/find" className="tab-bar_tab" activeClassName="tab-bar_tab_on">
                <i className="fa fa-search"></i>
                <span className="tab-bar_title">Find</span>
            </NavLink>
            <NavLink to="/more" className="tab-bar_tab" activeClassName="tab-bar_tab_on">
                <i className="fa fa-ellipsis-h"></i>
                <span className="tab-bar_title">More</span>
            </NavLink>
        </nav>
    )
}

export default Nav