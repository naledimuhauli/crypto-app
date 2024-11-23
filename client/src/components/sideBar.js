import React from 'react';
import './style.css';
import logo from '../images/Logo.png';
import chart from '../images/graph.png';
import overview from '../images/element-3.png';
import transactions from '../images/wallet-minus.png';
import wallet from '../images/wallet-2.png';
import setting from '../images/setting-2.png';
import mailbox from '../images/sms.png';
import logout from '../images/logout.png';
import ellipse from '../images/Ellipse.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="heading mb-5">
              <img src={logo} alt='logo' className='logo' />
               CrypX
            </h2>
            <ul>
                <li className='active'> <img src={overview} alt='logo' /> Overview 
                <img src={ellipse} alt='logo' className='ellipse'/>
                </li>
                <li> <img src={chart} alt='logo' /> Chart</li>
                <li> <img src={transactions} alt='logo' /> Transactions</li>
                <li> <img src={wallet} alt='logo' /> Wallet</li>
                <li> <img src={mailbox} alt='logo' /> Mail Box</li>
                <li> <img src={setting} alt='logo' /> Setting</li>
                <li> <img src={logout} alt='logo' /> Logout</li>
            </ul>
        </div>
    );
}

export default Sidebar;
