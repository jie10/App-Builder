import React, { useState, useRef, useEffect  } from 'react'
import { Divider, Grid, Tooltip, Zoom } from '@mui/material';

import {
    KeyboardArrowDownOutlined as KeyboardArrowDownIcon,
    ChatBubbleOutlineOutlined as ChatBubbleIcon,
    NotificationsNoneOutlined as NotificationsIcon,
    AddOutlined as AddOutlinedIcon,
    CreateNewFolderOutlined as CreateNewFolderOutlinedIcon,
    CloseOutlined as CloseOutlinedIcon,
    Error as ErrorIcon,
    LanguageOutlined as LanguageOutlinedIcon
} from '@mui/icons-material';

import "./CreateApp.css";

import siteLogo from "../../assets/logos/ceblogo.png";
import sampleUserAvatar from "../../assets/images/sample-user-avatar.jpeg";
import sampleCoverImage from "../../assets/images/sample-cover-image.png";
import notifBellImage from "../../assets/images/notif-bell-image.png";

const sampleUser = {
    username: "Tim Powell",
    avatarImage: sampleUserAvatar
};

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

    return (
        <div className="top-nav-bar-container">
            <div className="top-nav-bar top-nav-bar-site-nav">
                <a className="site-logo-link" href={ window.location.pathname } target="_self">
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
                            <a className="header-link" href="/" target="_self">
                                <span className="link-icon"><AddOutlinedIcon /></span>
                                <span className="link-label">Create New App</span>
                            </a>
                        </div>
                        <div className="list-content">
                            <div className="no-results-container">
                                <h3 className="no-results-title">No Apps Found</h3>
                                <p className="no-results-description">You don't have any apps to show at the moment. Create a new one to see it here.</p>
                            </div>
                        </div>
                        <div className="list-footer">
                            <a className="footer-link" href="/" target="_self">Go to all Apps</a>
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
                        <a href="/" target="_self">{"Updates & Releases"}</a>
                        <a href="/" target="_self">Inspiring Websites</a>
                        <a href="/" target="_self">eCommerce School</a>
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
                            <a href="/" target="_blank">Hire a Professional</a>
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
                                <a href="/" target="_self">Account Settings</a>
                            </div>
                            <div className="list">
                                <a href="/" target="_self">Domains</a>
                                <a href="/" target="_self">Mailboxes</a>
                                <a href="/" target="_self">Vouchers</a>
                                <a href="/" target="_self">Billing History</a>
                                <a href="/" target="_self">Premium Subscriptions</a>
                                <a href="/" target="_self">Payment Methods</a>
                            </div>
                            <div className="list">
                                <a href="/" target="_self">Create a New Site</a>
                                <a href="/" target="_self">Help Center</a>
                                <a href="/" target="_self">Hire a Professional</a>
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
                                        <a href="/" target="_self">Čeština</a>
                                        <a href="/" target="_self">Dansk</a>
                                        <a href="/" target="_self">Deutsch</a>
                                        <a href="/" target="_self">Español</a>
                                        <a href="/" target="_self">Français</a>
                                        <a href="/" target="_self">हिन्दी</a>
                                        <a href="/" target="_self">Italiano</a>
                                        <a href="/" target="_self">日本語</a>
                                        <a href="/" target="_self">한국어</a>
                                        <a href="/" target="_self">Nederlands</a>
                                        <a href="/" target="_self">Bahasa Indonesia</a>
                                    </div>
                                    <div className="language-list">
                                        <a href="/" target="_self">Norsk</a>
                                        <a href="/" target="_self">Polski</a>
                                        <a href="/" target="_self">Português</a>
                                        <a href="/" target="_self">Русский</a>
                                        <a href="/" target="_self">Svenska</a>
                                        <a href="/" target="_self">ไทย</a>
                                        <a href="/" target="_self">Türkçe</a>
                                        <a href="/" target="_self">Українська</a>
                                        <a href="/" target="_self">繁體中文</a>
                                        <a href="/" target="_self">Tiếng Việt</a>
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

const Header = (props) => {
    const { setHiddenModal, scrollValueFromTop } = props;

    const handleCreateNewFolderClick = (e) => {
        e.preventDefault();
        setHiddenModal(false);
    }

    return (
        <div className={`jumbo-header-container ${scrollValueFromTop ? 'header-on-scroll' : ''}`}>
            <div className="jumbo-content-container">
                <div className="jumbo-content">
                    <h1 className="jumbo-content-title">My Apps</h1>
                    <p className="jumbo-content-subtitle">Select an app to edit, view and open its dashboard.</p>
                </div>
                <div className="jumbo-content jumbo-content-buttons">
                    <button className="jumbo-content-button" onClick={handleCreateNewFolderClick}>
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

const CreateNewFolderModal = (props) => {
    const { hiddenModal, setHiddenModal } = props;

    const [userInput, setUserInput] = useState(null);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setUserInput(null);
        setHiddenModal(true);
    }

    const handleUserInput = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }

    return(
        <div className={`create-new-folder-modal-container ${ hiddenModal === true ? 'hidden' : ''}`}>
            <div className="create-new-folder-modal-box">
                <div className="modal-box modal-box-header">
                    <span className="header-title">Create New Folder</span>
                    <button
                        className="header-close-button"
                        onClick={handleCloseModal}>
                            <CloseOutlinedIcon />
                    </button>
                </div>
                <div className="modal-box modal-box-body">
                    <div className="body-form-label-container">
                        <label className="form-label">Name your folder, then move any app to this folder via Actions.</label>
                    </div>
                    <div className="body-form-input-container">
                        <input
                            className={`form-input ${ userInput === null ? '' : userInput && userInput.length > 0 ? '' : 'form-error' }`}
                            type="text"
                            maxLength="300"
                            placeholder="e.g. In Progress"
                            onChange={handleUserInput}
                            value={ userInput ? userInput : '' } />
                        <span
                            className={`form-error-icon ${ userInput === null ? 'hidden' : userInput && userInput.length > 0 ? 'hidden' : ''}`}>
                            <Tooltip
                                TransitionComponent={Zoom}
                                sx={{
                                    position: "absolute",
                                    top: "14px",
                                    right: "8px"
                                }}
                                title={<span
                                            className="form-tooltip" 
                                            style={{ display: "block", width: "150px", fontSize: "14px", padding: "8px", wordBreak: "break-word" }}>
                                                Folder names should be between 1 and 256 characters long.
                                        </span>}
                                placement="top"
                                describeChild
                                arrow>
                                <ErrorIcon />
                            </Tooltip>
                        </span>
                    </div>
                </div>
                <div className="modal-box modal-box-footer">
                    <div className="footer-buttons-container">
                        <button className="footer-button" onClick={handleCloseModal}>Cancel</button>
                        <button
                            className={`footer-button ${ userInput && userInput.length > 0 ? 'footer-main-button' : 'disabled-button' }`}
                            disabled={ userInput && userInput.length > 0  ? false : true }>
                                Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CreateApp = (props) => {
    const [hiddenModal, setHiddenModal] = useState(true);
    const [scrollValueFromTop, setScrollValueFromTop] = useState(false);

    const handleOnScroll = (e) => {
        if (e.target.firstChild.offsetHeight >= e.target.scrollTop ) {
            setScrollValueFromTop(false);
        } else {
            setScrollValueFromTop(true)
        }
    }

    return(
        <>
            <TopNavBar />
            <div className="content-container" onScroll={handleOnScroll}>
                <Header setHiddenModal={setHiddenModal} scrollValueFromTop={scrollValueFromTop} />
                <FirstWebsiteSection />
                <CreateNewFolderModal hiddenModal={hiddenModal} setHiddenModal={setHiddenModal} />
            </div>
        </>
    )
}

export default CreateApp;