import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';

export default function Profile(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, name, email, img, bg} = location.state;
        
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
                <Link to="/" exact={true}>
                        <i className="fas fa-times icon"></i>
                </Link>
            </div>
            <div className="header_icon"></div>
            <div className="header_icon">
                <i className="fa fa-user fa-lg"></i>
            </div>
            </div>
        </header>
        <main className="profile">
            <header className="profile_header" style={{background: "url("+bg+") no-repeat 50% 50%" , backgroundSize: "cover"}}>
            <div className="profile_container">
                <img src={img} alt="" />
                <h3>{name}</h3>
            </div>
            </header>
            <div className="profile_text">
            <input type="text" placeholder={email} />
            <div className="profile_actions">
                <div className="profile_action">
                <span className="profile_circle">
                    <i className="fa fa-comment fa-lg"></i>
                </span>
                <span className="profile_title2">My Chatroom</span>
                </div>
                <div className="profile_action">
                <span className="profile_circle">
                    <i className="fas fa-pencil-alt"></i>
                </span>
                <span className="profile_title2">Edit Profile</span>
                </div>
            </div>
            </div>
        </main>
    </>
    )
    }else return null;
}



