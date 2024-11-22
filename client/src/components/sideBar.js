import React from 'react';
import './style.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="headig mb-5">
               Crypx Superpage
            </h2>
            <ul>
                <li className='active'>AI chat</li>
                <li> Members</li>
                <li> Integrations</li>
                <li> Refer Friends</li>
                <li> Pricing Plans</li>
                <li> Settings</li>
            </ul>
        </div>
    );
}

export default Sidebar;
