import React from 'react';
import close from './close-icon.png';
import './Notifications.css';
const utils = require('./utils.js');

const logClose = () => {
    console.log('Close button has been clicked');
}

function Notify () {
    return (
        <div className="Notifications">
            <p>
                Here is the list of notifications
            </p>
            <button style={{
                position: 'absolute',
                border: 'none',
                background: 'none',
                right: '8px',
                top: '2px',
                color: 'grey',
            }} aria-label="Close" onClick={logClose}>
                <img src={close} alt="close" style={{
                    width: '20px',
                    height: '20px',
                    filter: 'saturate(3)'
                }} />
            </button>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{
                    __html: utils.getLatestNotification()
                }}>
                </li>
            </ul>
        </div>
    );
}

export default Notify;
