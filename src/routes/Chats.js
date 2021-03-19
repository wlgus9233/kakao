import React, {useState, useEffect} from 'react'
import ChatList from '../components/ChatList';
import ImgJSON from '../data/ImgJSON.json';
import Nav from '../components/Nav';
import './Chats.css';
import axios from 'axios';

export default function Chats(){
    const chatimg = ImgJSON;
    const [chats, setchats] = useState([]);
    let getData = async () => {
        const { data : chats } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setchats(chats);
    }

    useEffect(getData,[]);    
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
                    <span className="header__text">Edit</span>
                </div>
                <div className="header_icon">
                    <span className="header__text">Chats <i className="fa fa-caret-down"></i></span>
                </div>
                <div className="header_icon"></div>
            </div>
        </header>
        <main className="chats">
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends"/>
            </div>
            <ul className="chats__list">
                {chats.map((chat, idx) =>(
                    <ChatList 
                        id = {chat.id}
                        username = {chat.username}
                        name = {chat.name}
                        img = {chatimg[idx].img}
                    />
                ))}
            </ul>
        <div className="chat-btn">
            <i className="fa fa-comment"></i>
        </div>
    </main>
    <Nav />
    </>
  )
}
