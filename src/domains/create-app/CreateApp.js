import * as React from 'react';
import {
    Container,
    Grid,
    Box,
    Typography
} from '@mui/material';

import {
    KeyboardArrowDownOutlined as KeyboardArrowDownIcon,
    ChatBubbleOutlineOutlined as ChatBubbleIcon,
    NotificationsNoneOutlined as NotificationsIcon,
    AddOutlined as AddOutlinedIcon,
    CreateNewFolderOutlined as CreateNewFolderOutlinedIcon
}from '@mui/icons-material';

import "./CreateApp.css";

import siteLogo from "../../assets/logos/ceblogo.png";
import sampleUserAvatar from "../../assets/images/sample-user-avatar.jpeg";

const sampleUser = {
    username: "Tim Powell",
    avatarImage: sampleUserAvatar
};

const TopNavBar = () => {
    return (
        <div className="top-nav-bar-container">
            <div className="top-nav-bar top-nav-bar-site-nav">
                <a className="site-logo-link" href={ window.location.pathname } target="_self">
                    <div className="logo-protector"></div>
                    <img className="site-logo" src={siteLogo} alt="logo" />
                </a>
                <div className="site-nav site-nav-main-link">
                    <span className="text">My Sites</span>
                    <span className="icon"><KeyboardArrowDownIcon /></span>
                </div>
                <div className="site-nav">
                    <span className="text">Explore</span>
                    <span className="icon"><KeyboardArrowDownIcon /></span>
                </div>
                <div className="site-nav">
                    <span className="text">Help</span>
                    <span className="icon"><KeyboardArrowDownIcon /></span>
                </div>
                <div className="site-nav">
                    <span className="text">Hire a Professional</span>
                </div>
            </div>
            <div className="top-nav-bar top-nav-bar-user-nav">
                <div className="user-nav">
                    <span className="text hidden">Inbox</span>
                    <span className="icon"><ChatBubbleIcon /></span>
                </div>
                <div className="user-nav">
                    <span className="text hidden">Notifications</span>
                    <span className="icon"><NotificationsIcon /></span>
                </div>
                <div className="vertical-divider"></div>
                <div className="user-nav">
                    <div className="user-avatar-container">
                        <div className="avatar-protector"></div>
                        <img className="user-avatar" src={sampleUser.avatarImage} alt="user-avatar" />
                    </div>
                    <span className="user-name">{sampleUser.username}</span>
                    <span className="icon user-nav-icon"><KeyboardArrowDownIcon /></span>
                </div>
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <div className="jumbo-header-container">
            <div className="jumbo-content-container">
                <div className="jumbo-content">
                    <h1 className="jumbo-content-title">My Apps</h1>
                    <p className="jumbo-content-subtitle">Select an app to edit, view and open its dashboard.</p>
                </div>
                <div className="jumbo-content jumbo-content-buttons">
                    <button className="jumbo-content-button">
                        <span className="button-icon"><CreateNewFolderOutlinedIcon /></span>
                        <span className="button-text">Create New Folder</span>
                    </button>
                    <button className="jumbo-content-button jumbo-content-main-button">
                        <span className="button-icon"><AddOutlinedIcon /></span>
                        <span className="button-text">Create New App</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

const CreateApp = (props) => {
    return(
        <>
            <TopNavBar />
            <Header />
        </>
    )
}

export default CreateApp;