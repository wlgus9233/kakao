import React from 'react';
import MemberList from '../components/MemberList';
import profile from '../data/memberList.json';
import Nav from '../components/Nav';
import './Friend.css';

export default function Friend() {
    const myprofile = profile[0];
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
                    <span className="header_text">Manage</span>
                </div>
                <div className="header_icon">
                    <span className="header_text">Friends <span className="header_number">1</span></span>
                  </div>
                <div className="header_icon">
                    <i className="fa fa-cog fa-lg"></i>
                </div>
            </div>
        </header>
        <main className ="friends">
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends"/>
            </div>
            <section className="friend_section">
                <header className="section_header">
                    <h6 className="title">My Profile</h6>
                </header>
                <div className="section_rows">
                    <MemberList 
                            id = {myprofile.id}
                            name = {myprofile.name}
                            email = {myprofile.email}
                            img = {myprofile.profileimg}
                            text = {myprofile.profilemsg}
                            bg = {myprofile.backgroundimg}
                        />
                </div>
            </section>
            <section className="friend_section">
                <header className="section_header">
                    <h6 className="title">Friend</h6>
                </header>
                <div className="section_row2">
                    {profile.map(profile =>{
                        if(profile.id != 0) {return(
                        <MemberList 
                            id = {profile.id}
                            name = {profile.name}
                            email = {profile.email}
                            img = {profile.profileimg}
                            text = {profile.profilemsg}
                            bg = {profile.backgroundimg}
                        />
                        )}})}
                </div>
            </section>
        </main>
        <Nav />
      </>
    )
   }




