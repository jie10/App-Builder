import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from "react-loader-spinner";

import notifBellImage from "../../assets/images/notif-bell-image.png";

import './Notif.css';

const Notif = ({ refNotifMenu, openNotifMenu }) => {
    let { id } = useParams();

    const notifList = {
        "61ad9e3f9b8c33f82b6e8aed": [
            {
                icon: "/images/build_project_notif_icon.png",
                message: "Building Project",
                timeFromNow: "Now",
                timestamp: 1642475940,
                pending_progress_percent: 20,
                status: "pending",
                next_action: "",
                next_source_url: ""
            },
            {
                icon: "/images/build_project_notif_icon.png",
                message: "Project Build Successful",
                timeFromNow: "4d ago",
                timestamp: 1642089600,
                pending_progress_percent: null,
                status: "success",
                next_action: "View",
                next_source_url: `/dashboard/${id}/preview`
            },
            {
                icon: "/images/build_project_notif_icon.png",
                message: "Project Build Failed",
                timeFromNow: "3d ago",
                tmestamp: 1642003200,
                pending_progress_percent: null,
                status: "error",
                next_action: "Retry",
                next_source_url: `/dashboard/${id}/preview`
            }
        ]
    };

    const goToURL = (url) => window.location.href = url;

    const showNotifList = () => {
        return(<div className='notif-list-container'>
            { notifList[id].sort().map((item, i) => <div className='notif-list-item' key={i}>
                <div className={`notif-status-indicator notif-status-${item.status}`}></div>
                <div className='notif-item-icon'>
                    <img src={item.icon} alt='build project notif' />
                </div>
                <div className='notif-details-container'>
                    <p className='notif-message'>{item.message} - {item.pending_progress_percent ? <span className='notf-pending-progress'>{item.pending_progress_percent}%</span> : ''}</p>
                    <span className='notif-time-from-now'>{item.timeFromNow}</span>
                </div>
                <div className='notif-item-action'>
                    { item.next_action ? <button className='notif-action-button' onClick={() => goToURL(item.next_source_url)}>{item.next_action}</button> : <Loader
                type="Oval"
                color="#00BFFF"
                height={18}
                width={40}
            /> }
                </div>
            </div>) }
        </div>);
    }

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
                    { notifList[id] && notifList[id].length > 0 ? showNotifList() : showEmptyNotifList() }
                </div>
            </div>);
}

export default Notif;