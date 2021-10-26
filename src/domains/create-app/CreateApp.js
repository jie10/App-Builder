import * as React from 'react';
import { Divider, Grid } from '@mui/material';

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
import sampleCoverImage from "../../assets/images/sample-cover-image.png";

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

const FirstWebsiteSection = () => {
    const styledGridContainer = { justifyContent: "center" };
    const styledDivider = { margin: "0 48px" };

    return(
        <div className="first-website-section-container">
            <div className="first-website-section main-cover-container">
                <div className="cover-image-container">
                    <img className="cover-image" src={sampleCoverImage} alt="cover" />
                </div>
                <div className="cover-details-container">
                    <h2 className="cover-details-title">Create Your First App</h2>
                    <p className="cover-details-subtitle">You're on your way to creating your first working application.</p>
                    <button className="cover-details-action-button">
                        <span className="button-icon"><AddOutlinedIcon /></span>
                        <span className="button-text">Create New App</span>
                    </button>
                </div>
            </div>
            <div className="first-website-section main-features-container">
                <Grid container sx={styledGridContainer}>
                    <Grid item xs={3}>
                        <h3 className="main-features-title">Hire a Professional</h3>
                        <p className="main-features-subtitle">Need help creating your site? Choose from 100s of web designers. <a href="/" target="_blank">Browse Now</a></p>
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={styledDivider} />
                    <Grid item xs={3}>
                        <h3 className="main-features-title">Get Inspired</h3>
                        <p className="main-features-subtitle">Explore stunning apps created by users like you. <a href="/" target="_blank">Explore Now</a></p>
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={styledDivider} />
                    <Grid item xs={3}>
                        <h3 className="main-features-title">Can’t find your app?</h3>
                        <p className="main-features-subtitle">You may have opened another account. <a href="/" target="_blank">Read More</a></p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const CreateApp = (props) => {
    return(
        <>
            <TopNavBar />
            <div className="content-container">
                <Header />
                <FirstWebsiteSection />
            </div>
        </>
    )
}

export default CreateApp;