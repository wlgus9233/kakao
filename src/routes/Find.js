import React from 'react'
import Nav from '../components/Nav';
import './Find.css';

export default function Find() {
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
                <span className="header_text">Edit</span>
            </div>
            <div className="header_icon">
                <span className="header_text">Find</span>
            </div>
            <div className="header_icon"></div>
            </div>
        </header>
        <main className="find">
            <section className="find__options">
                <div className="find__option">
                    <i className="fa fa-address-book fa-lg"></i>
                    <span className="find__option-title">Find</span>
                </div>
                <div className="find__option">
                    <i className="fa fa-qrcode fa-lg"></i>
                    <span className="find__option-title">QR Code</span>
                </div>
                <div className="find__option">
                    <i className="fa fa-mobile fa-lg"></i>
                    <span className="find__option-title">Shake</span>
                </div>
                <div className="find__option">
                    <i className="far fa-envelope"></i>
                    <span className="find__option-title">Invite via SMS</span>
                </div>
            </section>
            <section className="find__recommended">
                <header>
                    <h6 className="recommended__title">Recommended Friends</h6>
                </header>
                <div className="recommended__none">
                    <span className="recommended__text">You have no recommended friends.</span>
                </div>
            </section>
        </main>
        <Nav />
        </>
    )
}
