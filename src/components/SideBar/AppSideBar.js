import React from 'react';

import {
    KeyboardArrowLeftOutlined as KeyboardArrowLeftOutlinedIcon,
    KeyboardArrowRightOutlined as KeyboardArrowRightOutlinedIcon,
    Home as HomeIcon,
    BarChart as BarChartIcon,
    ShoppingCart as ShoppingCartIcon,
    Mail as MailIcon,
    PushPin as PushPinIcon,
    PermMedia as PermMediaIcon,
    FileCopy as FileCopyIcon,
    Comment as CommentIcon,
    Feedback as FeedbackIcon,
    Settings as SettingsIcon,
    Public as PublicIcon
} from '@mui/icons-material';

import "./AppSideBar.css";

const MainHeader = (props) => {
    const { menuOnCollapse, previewURL } = props;

    return (
        <a className="main-header-container" href={previewURL}>
            <span className="app-details-icon">
                <PublicIcon/>
            </span>
            <span className={`app-details-name ${menuOnCollapse ? 'app-details-name-hidden' : ''}`}>App Name</span>
        </a>
    );
}

const AppSideBar = (props) => {
    const { menuOnCollapse, setMenuOnCollapse } = props;
    const currentURL = window.location.pathname.split('/').slice(0, -1).join("/");

    const handleMenuOnCollapse = () => setMenuOnCollapse(!menuOnCollapse);

    return (
        <div className={`app-side-bar-container ${menuOnCollapse ? 'app-side-bar-minimize' : ''}`}>
            <MainHeader menuOnCollapse={menuOnCollapse} previewURL={`${currentURL}/preview`} />
            <div className={`side-nav-menu menu-item-active`}>
                <a className="menu-item" href={`${currentURL}/home`}>
                    <span className="nav-icon">
                        <HomeIcon/>
                    </span>
                    <span className="nav-text">
                        My Home
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/stats`}>
                    <span className="nav-icon">
                        <BarChartIcon/>
                    </span>
                    <span className="nav-text">
                        Stats
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/plans`}>
                    <span className="nav-icon">
                        <ShoppingCartIcon/>
                    </span>
                    <span className="nav-text">
                        <span className="item">Upgrades</span>
                        <span className="plan-type">Free</span>
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/inbox`}>
                    <span className="nav-icon">
                        <MailIcon/>
                    </span>
                    <span className="nav-text">
                        Inbox
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/posts`}>
                    <span className="nav-icon">
                        <PushPinIcon/>
                    </span>
                    <span className="nav-text">
                        Posts
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/media`}>
                    <span className="nav-icon">
                        <PermMediaIcon/>
                    </span>
                    <span className="nav-text">
                        Media
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/pages`}>
                    <span className="nav-icon">
                        <FileCopyIcon/>
                    </span>
                    <span className="nav-text">
                        Pages
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/comments/all`}>
                    <span className="nav-icon">
                        <CommentIcon/>
                    </span>
                    <span className="nav-text">
                        Comments
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/feedback`}>
                    <span className="nav-icon">
                        <FeedbackIcon/>
                    </span>
                    <span className="nav-text">
                        Feedback
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <a className="menu-item" href={`${currentURL}/settings/general`}>
                    <span className="nav-icon">
                        <SettingsIcon/>
                    </span>
                    <span className="nav-text">
                        Settings
                    </span>
                </a>
            </div>
            <div className={`side-nav-menu`}>
                <div className="menu-item" onClick={handleMenuOnCollapse}>
                    <span className="nav-icon">
                        {menuOnCollapse ? <KeyboardArrowRightOutlinedIcon/> : <KeyboardArrowLeftOutlinedIcon/>}
                    </span>
                    <span className="nav-text">
                        Collapse Menu
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AppSideBar;