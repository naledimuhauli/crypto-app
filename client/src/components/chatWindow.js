import React from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Sidebar from './sidebar';


function ChatWindow() {
    

    return (
        <div className="chat-window-container">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="main-chat">
                <div className="navbar">
                    <p className="name">Siphokazi</p>
                    <hr />
                </div>
                </div>
        </div>
    );
}

export default ChatWindow;
