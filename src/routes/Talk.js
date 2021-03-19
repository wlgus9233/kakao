import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Talk.css';

export default function Talk(props){
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, img, username} = location.state;
    return (
        <>
        <header className="header">
            <div className="header_top">
                <div className="header_icon">
                    <i className="fas fa-fighter-jet"></i>
                    <i className="fas fa-wifi"></i>
                </div>
            <div className="header_icon">
                <span className="header__time">17:33</span>
            </div>
            <div className="header_icon">
                <i className="far fa-moon"></i>
                <i className="fab fa-bluetooth-b"></i>
                <span className="header__battery">100% <i className="fa fa-battery-full"></i></span>
            </div>
            </div>
            <div className="header_bottom">
            <div className="header_icon">
                <Link to="/Chats">
                        <i class="fas fa-chevron-left icon"></i>
                </Link>
            </div>
            <div className="header_icon">
                <span>{username}</span>
            </div>
                <div className="header_icon">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
        <main className="chat">
            <div className="date-divider">
                <span className="date-divider__text">Wednesday, April 12, 2018</span>
            </div>
            <div className="chat__message chat__message-from-me">
                <span className="chat__message-time">17:33</span>
                <div className="chat__message-center">
                    <span className="chat__message-body">
                        Hello! 
                    </span>
                    <span className="chat__message-body left">
                        Hello! This is a test message. <br />Hello!
                    </span>
                    <span className="chat__message-body">
                        This is a test message.
                    </span>
                </div>
            </div>
            <div className="chat__message chat__message--to-me">
                <img src={img} alt=""/>
            <div className="chat__message-center">
                <h3>{username}</h3>
                <span className="chat__message-body">
                And this is an answer
                </span>
                <span className="chat__message-body">
                And this is an answer And this is an answer
                </span>
                <span className="chat__message-body">
                And this is an answer
                </span>
            </div>
            <span className="chat__message-time">20:37</span>
            </div>
        </main>
        <div className="type-message">
            <i className="fa fa-plus fa-lg"></i>
            <div className="type-message__input">
                <input type="text"/>
                <i className="far fa-smile-wink"></i>
                <span className="record-message">
                    <i className="fa fa-microphone fa-lg"></i>
                </span>
            </div>
        </div>
        <div className="bigScreenText">
            <span>Please make your screen smaller</span>
        </div>
            </>
        )
    }else return null;
}
