import React from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Sidebar from './sidebar';
import notification from '../images/notification.png';
import help from '../images/help.png';
import userImage from '../images/Avatar.png';
import arrow from '../images/arrow-down.png';
import MainChat from './mainChat';

function ChatWindow() {


    return (
        <div className="chat-window-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-chat">
                <div className="navbar align-items-center justify-content-between">
                    <form className="search-form" role="search">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search type of keywords"
                            aria-label="Search"
                        />
                    </form>
                    <div className="icons d-flex">
                        <img src={notification} alt="notification" className="icon" />
                        <img src={help} alt="help" className="icon ms-3" />
                    </div>
                    <div className="user-details d-flex align-items-center">
                        <img
                            src={userImage}
                            alt="user"
                            className="user-image rounded-circle"
                        />
                        <div className="ms-3">
                            <p className="name mb-0">Siphokazi</p>
                            <p className="email text-muted">siphokazi@example.com</p>
                        </div>
                        <img src={arrow} alt='arrow-down' className='arrow' />
                    </div>
                    <hr className="navbar-line" />

                </div>
                <MainChat />
            </div>
        </div>
    );
}

export default ChatWindow;
