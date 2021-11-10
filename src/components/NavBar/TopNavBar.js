import React, { useState, useRef, useEffect } from 'react'
import { Tooltip, Zoom } from '@mui/material';

import {
    KeyboardArrowDownOutlined as KeyboardArrowDownIcon,
    ChatBubbleOutlineOutlined as ChatBubbleIcon,
    NotificationsNoneOutlined as NotificationsIcon,
    AddOutlined as AddOutlinedIcon,
    LanguageOutlined as LanguageOutlinedIcon
} from '@mui/icons-material';

import "./TopNavBar.css";

import { findAll } from '../../api/AppList';

import { sampleUser } from "../../utils/constants/dataMart";

import siteLogo from "../../assets/logos/ceblogo.png";
import notifBellImage from "../../assets/images/notif-bell-image.png";

const currentURL = window.location.pathname;

const TopNavBar = () => {
    const refMyAppsMenu = useRef(null);
    const refExploreMenu = useRef(null);
    const refInboxMenu = useRef(null);
    const refNotifMenu = useRef(null);
    const refAccountMenu = useRef(null);
    const [openMyAppsMenu, setOpenMyAppsMenu] = useState(false);
    const [openExploreMenu, setOpenExploreMenu] = useState(false);
    const [openInboxMenu, setOpenInboxMenu] = useState(false);
    const [openNotifMenu, setOpenNotifMenu] = useState(false);
    const [openAccountMenu, setOpenAccountMenu] = useState(false);
    const [hoverLanguagesList, setHoverLanguagesList] = useState(false);

    const useOutsideClick = (ref, callback) => {
      const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", handleClick);
    
        return () => {
          document.removeEventListener("click", handleClick);
        };
      });
    };

    const handleMenuClick = (e) => {
        switch(e.target.id) {
            case "my_apps_menu":
                setOpenMyAppsMenu(!openMyAppsMenu);
                setOpenExploreMenu(false);
                setOpenInboxMenu(false);
                setOpenNotifMenu(false);
                setOpenAccountMenu(false);
            break;
            case "explore_menu":
                setOpenExploreMenu(!openExploreMenu);
                setOpenMyAppsMenu(false);
                setOpenInboxMenu(false);
                setOpenNotifMenu(false);
                setOpenAccountMenu(false);
            break;
            case "inbox_menu":
                setOpenInboxMenu(!openInboxMenu);
                setOpenMyAppsMenu(false);
                setOpenExploreMenu(false);
                setOpenNotifMenu(false);
                setOpenAccountMenu(false);
            break;
            case "notif_menu":
                setOpenNotifMenu(!openNotifMenu);
                setOpenMyAppsMenu(false);
                setOpenExploreMenu(false);
                setOpenInboxMenu(false);
                setOpenAccountMenu(false);
            break;
            case "account_menu":
                setOpenAccountMenu(!openAccountMenu);
                setOpenMyAppsMenu(false);
                setOpenExploreMenu(false);
                setOpenInboxMenu(false);
                setOpenNotifMenu(false);
            break;
            default:
                // do nothing
            break;
        }
    }

    const handleListOnHover = (e) => setHoverLanguagesList(true);

    const handleListOnBlur = (e) => setHoverLanguagesList(false);

    useOutsideClick(refMyAppsMenu, () => {
        if (openMyAppsMenu) setOpenMyAppsMenu(false);
    });

    useOutsideClick(refExploreMenu, () => {
        if (openExploreMenu) setOpenExploreMenu(false);
    });

    useOutsideClick(refInboxMenu, () => {
        if (openInboxMenu) setOpenInboxMenu(false);
    });

    useOutsideClick(refNotifMenu, () => {
        if (openNotifMenu) setOpenNotifMenu(false);
    });

    useOutsideClick(refAccountMenu, () => {
        if (openAccountMenu) setOpenAccountMenu(false);
    });

    const loadApps = () => {
        let appsList = findAll();

        if (appsList && appsList.length > 0) {
            return <div className="apps-list-container">
                        {
                            appsList.map((app, i) => {
                                return <a key={i} className="app-container" href={`/dashboard/${app.appURL}/home`} target="_self">
                                            <span className="app-preview-image">
                                                <img src={app.themePreview} alt="preview" />
                                            </span>
                                            <span className="app-name">{app.appName}</span>
                                        </a>;
                            })
                        }
                    </div>;
        } else {
            return <div className="no-results-container">
                        <h3 className="no-results-title">No Apps Found</h3>
                        <p className="no-results-description">You don't have any apps to show at the moment. Create a new one to see it here.</p>
                    </div>;
        }
    }

    return (
        <div className="top-nav-bar-container">
            <div className="top-nav-bar top-nav-bar-site-nav">
                <a className="site-logo-link" href={ currentURL } target="_self">
                    <div className="logo-protector"></div>
                    <img className="site-logo" src={siteLogo} alt="logo" />
                </a>
                <div className="site-nav site-nav-main-link">
                    <div className="item" onClick={handleMenuClick}>
                        <span id="my_apps_menu" className="menu-clickable"></span>
                        <span className="text">My Apps</span>
                        <span className="icon"><KeyboardArrowDownIcon /></span>
                    </div>
                    <div className="sites-list-items" ref={refMyAppsMenu} style={{display: openMyAppsMenu ? "flex" : "none"}}>
                        <div className="pointer"></div>
                        <div className="list-header">
                            <span className="header-title">Apps Last Opened</span>
                            <a className="header-link" href={ `/account/apps?action=create` } target="_self">
                                <span className="link-icon"><AddOutlinedIcon /></span>
                                <span className="link-label">Create New App</span>
                            </a>
                        </div>
                        <div className="list-content">
                            { loadApps() }
                        </div>
                        <div className="list-footer">
                            <a className="footer-link" href={ currentURL } target="_self">Go to all Apps</a>
                        </div>
                    </div>
                </div>
                <div className="site-nav">
                    <div className="item" onClick={handleMenuClick}>
                        <span id="explore_menu" className="menu-clickable"></span>
                        <span className="text">Explore</span>
                        <span className="icon"><KeyboardArrowDownIcon /></span>
                    </div>
                    <div className="menu-list-items" ref={refExploreMenu} style={{display: openExploreMenu ? "flex" : "none"}}>
                        <div className="pointer"></div>
                        <a href={ currentURL } target="_self">{"Updates & Releases"}</a>
                        <a href={ currentURL } target="_self">Inspiring Websites</a>
                        <a href={ currentURL } target="_self">eCommerce School</a>
                    </div>
                </div>
                <div className="site-nav">
                    <div className="item">
                        <span className="text">Help</span>
                        <span className="icon"><KeyboardArrowDownIcon /></span>
                    </div>
                </div>
                <div className="site-nav">
                    <div className="item">
                        <span className="link-text">
                            <a href={ currentURL } target="_blank" rel="noreferrer">Hire a Professional</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="top-nav-bar top-nav-bar-user-nav">
                <div className="user-nav">
                    <div className="item" onClick={handleMenuClick}>
                        <span id="inbox_menu" className="menu-clickable"></span>
                        <span className="text hidden">Inbox</span>
                        <span className="icon">
                            <Tooltip
                                TransitionComponent={Zoom}
                                title={<span style={{ display: "block", padding: "3px", fontSize: "12px" }}>Inbox</span>}
                                placement="top"
                                describeChild
                                arrow>
                                    <ChatBubbleIcon />
                            </Tooltip>
                        </span>
                    </div>
                    <div className="inbox-list-items" ref={refInboxMenu} style={{display: openInboxMenu ? "block" : "none"}}>
                        <div className="pointer"></div>
                        <div className="list-header">
                            <span className="header-title">Inbox</span>
                            <span className="header-action">Mark All as Read</span>
                        </div>
                        <div className="list-content">
                            <div className="no-results-container">
                                <h3 className="no-results-title">You’re Up to Date!</h3>
                                <p className="no-results-description">The next time you or one of your contacts sends a message, it will show here.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-nav">
                    <div className="item" onClick={handleMenuClick}>
                        <span id="notif_menu" className="menu-clickable"></span>
                        <span className="text hidden">Notifications</span>
                        <span className="icon">
                            <Tooltip
                                TransitionComponent={Zoom}
                                title={<span style={{ display: "block", padding: "3px", fontSize: "12px" }}>Notifications</span>}
                                placement="top"
                                describeChild
                                arrow>
                                    <NotificationsIcon />
                            </Tooltip>
                        </span>
                    </div>
                    <div className="notif-list-items" ref={refNotifMenu} style={{display: openNotifMenu ? "block" : "none"}}>
                        <div className="pointer"></div>
                        <div className="list-header">
                            <span className="header-title">Notifications</span>
                        </div>
                        <div className="list-content">
                            <div className="no-results-container">
                                <div className="no-results-image">
                                    <img src={notifBellImage} alt="notfication bell" />
                                </div>
                                <h3 className="no-results-title">Get Notified Here</h3>
                                <p className="no-results-description">This is where you’ll see all your notifications from users, apps and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vertical-divider"></div>
                <div className="user-nav">
                    <div className="item" onClick={handleMenuClick}>
                        <span id="account_menu" className="menu-clickable"></span>
                        <div className="user-avatar-container">
                            <div className="avatar-protector"></div>
                            <img className="user-avatar" src={sampleUser.avatarImage} alt="user-avatar" />
                        </div>
                        <span className="user-name">{sampleUser.username}</span>
                        <span className="icon user-nav-icon"><KeyboardArrowDownIcon /></span>
                    </div>
                    <div className="account-list-items" ref={refAccountMenu} style={{display: openAccountMenu ? "block" : "none"}}>
                        <div className="pointer"></div>
                        <div className="list-header">
                            <div className="user-avatar-container">
                                <div className="avatar-protector"></div>
                                <img className="user-avatar" src={sampleUser.avatarImage} alt="user-avatar" />
                            </div>
                            <span className="header-title">{sampleUser.username}</span>
                        </div>
                        <div className="list-content">
                            <div className="list">
                                <a href={ currentURL } target="_self">Account Settings</a>
                            </div>
                            <div className="list">
                                <a href={ currentURL } target="_self">Domains</a>
                                <a href={ currentURL } target="_self">Mailboxes</a>
                                <a href={ currentURL } target="_self">Vouchers</a>
                                <a href={ currentURL } target="_self">Billing History</a>
                                <a href={ currentURL } target="_self">Premium Subscriptions</a>
                                <a href={ currentURL } target="_self">Payment Methods</a>
                            </div>
                            <div className="list">
                                <a href={ currentURL } target="_self">Create a New Site</a>
                                <a href={ currentURL } target="_self">Help Center</a>
                                <a href={ currentURL } target="_self">Hire a Professional</a>
                            </div>
                        </div>
                        <div className="list-footer" onMouseLeave={handleListOnBlur}>
                            <div className="footer-link" onMouseEnter={handleListOnHover}>
                                <span className="link-icon"><LanguageOutlinedIcon /></span>
                                <span className="link-text">English</span>
                            </div>
                            <button className="footer-button">Log Out</button>
                            <div className="list-global-languages" style={{ display: hoverLanguagesList ? "block" : "none"}}>
                                <div className="list-languages-container">
                                    <div className="language-list">
                                        <a href={ currentURL } target="_self">Čeština</a>
                                        <a href={ currentURL } target="_self">Dansk</a>
                                        <a href={ currentURL } target="_self">Deutsch</a>
                                        <a href={ currentURL } target="_self">Español</a>
                                        <a href={ currentURL } target="_self">Français</a>
                                        <a href={ currentURL } target="_self">हिन्दी</a>
                                        <a href={ currentURL } target="_self">Italiano</a>
                                        <a href={ currentURL } target="_self">日本語</a>
                                        <a href={ currentURL } target="_self">한국어</a>
                                        <a href={ currentURL } target="_self">Nederlands</a>
                                        <a href={ currentURL } target="_self">Bahasa Indonesia</a>
                                    </div>
                                    <div className="language-list">
                                        <a href={ currentURL } target="_self">Norsk</a>
                                        <a href={ currentURL } target="_self">Polski</a>
                                        <a href={ currentURL } target="_self">Português</a>
                                        <a href={ currentURL } target="_self">Русский</a>
                                        <a href={ currentURL } target="_self">Svenska</a>
                                        <a href={ currentURL } target="_self">ไทย</a>
                                        <a href={ currentURL } target="_self">Türkçe</a>
                                        <a href={ currentURL } target="_self">Українська</a>
                                        <a href={ currentURL } target="_self">繁體中文</a>
                                        <a href={ currentURL } target="_self">Tiếng Việt</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNavBar;