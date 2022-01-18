import React from 'react';
import notifBellImage from "../../assets/images/notif-bell-image.png";

const Notif = ({ refNotifMenu, openNotifMenu }) => {
    const showEmptyNotifList = () => {
        return (<div className="no-results-container">
                    <div className="no-results-image">
                        <img src={notifBellImage} alt="notfication bell" />
                    </div>
                    <h3 className="no-results-title">Get Notified Here</h3>
                    <p className="no-results-description">This is where you’ll see all your notifications from users, apps and more.</p>
                </div>);
    }

    return (<div className="notif-list-items" ref={refNotifMenu} style={{display: openNotifMenu ? "block" : "none"}}>
                <div className="pointer"></div>
                <div className="list-header">
                    <span className="header-title">Notifications</span>
                </div>
                <div className="list-content">
                    { showEmptyNotifList() }
                </div>
            </div>);
}

export default Notif;