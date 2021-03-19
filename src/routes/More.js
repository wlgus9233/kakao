import React from 'react'
import PlusFriends from '../components/PlusFriends';
import friend from '../data/plusFriends.json';
import profile from '../data/memberList.json';
import Nav from '../components/Nav';
// import kakaostory from '../../public/images/kakaostory.png';
// import path from '../../public/images/path.png';
// import kakaofriends from '../../public/images/kakaofriends.png';
import './More.css';

export default function More() {
    const myprofile = profile[0];
    const plus = friend[0];
    return (
        <>
        <header className="header">
            <div className="header_top">
                <div className="header_icon">
                    <i className="fas fa-fighter-jet"></i>
                    <i className="fas fa-wifi"></i>
                </div>
            <div className="header_icon">
                <span className="header_time">17:33</span>
            </div>
            <div className="header_icon">
                <i className="far fa-moon"></i>
                <i className="fab fa-bluetooth-b"></i>
            <span className="header__battery">100% <i className="fa fa-battery-full"></i></span>
            </div>
            </div>
            <div className="header_bottom">
            <div className="header_icon">

            </div>
            <div className="header_icon">
                <span className="header_text">More</span>
            </div>
            <div className="header_icon">
                <i className="fa fa-cog fa-lg"></i>
            </div>
            </div>
        </header>
        <main className="more">
            <header className="more__header">
            <div className="more-header__column">
                <img src={myprofile.profileimg} alt="" />
                <div className="more-header__info">
                    <div classname="user_content">
                        <h3>{myprofile.name}</h3>
                        <span>{myprofile.email}</span>
                    </div>
                </div>
            </div>
            <i className="far fa-comment"></i>
            </header>
            <section className="more__options">
            <div className="more__option">
                <i className="fas fa-smile"></i>
                <span className="more__option-title">Emoticons</span>
            </div>
            <div className="more__option">
                <i className="fa fa-paint-brush fa-2x"></i>
                <span className="more__option-title">Themes</span>
            </div>
            <div className="more__option">
                    <i className="fas fa-hand-peace"></i>
                <span className="more__option-title">Plus Friend</span>
            </div>
            <div className="more__option">
                    <i className="fas fa-user-circle"></i>
                <span className="more__option-title">Account</span>
            </div>
            </section>
            <section className="more__plus-friends">
            <header className="plus-friends__header">
                <h2 className="plus-friends__title">Plus Friends</h2>
                <span className="plus-friends__learn-more">
                <i className="fa fa-info-circle"></i>
                Learn More
                </span>
            </header>
            <div className="plus-friends__items">
                {friend.map(friend=>(
                    <PlusFriends 
                        id = {friend.id}
                        icon = {friend.icon}
                        title = {friend.title}
                    />
                ))}
            </div>
            </section>
            <section className="more__links">
            <div className="more__option">
                <img src="images/kakaostory.png" alt="" className="more__options-image"/>
                <span className="more__options-title">Kakao Story</span>
            </div>
            <div className="more__option">
                <img src="images/path.png" alt="" className="more__options-image"/>
                <span className="more__options-title">Path</span>
            </div>
            <div className="more__option">
                <img src="images/kakaofriends.png" alt="" className="more__options-image"/>
                <span className="more__options-title">kakao friends</span>
            </div>
            </section>
        </main>

        <Nav />
        </>
    )
}
