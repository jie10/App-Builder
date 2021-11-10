import React, { useState } from 'react';

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

import { findOne } from '../../api/AppList';

const MainHeader = (props) => {
    const { menuOnCollapse, previewURL } = props;
    const [highlightAppIcon, setHighlightAppIcon] = useState(false);

    const highlightOnHover = () => setHighlightAppIcon(true);

    const highlightOnBlur = () => setHighlightAppIcon(false);

    const loadAppName = () => {
        let currentId = previewURL.split('/').slice(-2)[0];
        let currentApp = findOne(currentId);

        return currentApp ? currentApp.appName : '';
    }

    return (
        <a className="main-header-container" href={previewURL} onMouseEnter={highlightOnHover} onMouseLeave={highlightOnBlur} title={loadAppName()}>
            <span className={`app-details-icon ${highlightAppIcon ? 'app-details-icon-highlight' : ''}`}>
                {highlightAppIcon ? <HomeIcon/> : <PublicIcon/>}
            </span>
            <span className={`app-details-name ${menuOnCollapse ? 'app-details-name-hidden' : ''}`}>{ loadAppName() }</span>
        </a>
    );
}

const AppSideBar = (props) => {
    const { menuOnCollapse, setMenuOnCollapse, pageName } = props;
    const currentURL = window.location.pathname.split('/').slice(0, -1).join("/");

    const navMenuItems = [
        {
            _id: 1,
            icon: <HomeIcon/>,
            text: "My Home",
            pageName: "home",
            href: `${currentURL}/home`,
            additionalText: ''
        },
        {
            _id: 2,
            icon: <BarChartIcon/>,
            text: "Stats",
            pageName: "stats",
            href: `${currentURL}/stats`,
            additionalText: ''
        },
        {
            _id: 3,
            icon: <ShoppingCartIcon/>,
            text: "Upgrades",
            pageName: "plans",
            href: `${currentURL}/plans`,
            additionalText: "Free"
        },
        {
            _id: 4,
            icon: <MailIcon/>,
            text: "Inbox",
            pageName: "inbox",
            href: `${currentURL}/inbox`,
            additionalText: ''
        },
        {
            _id: 5,
            icon: <PushPinIcon/>,
            text: "Posts",
            pageName: "posts",
            href: `${currentURL}/posts`,
            additionalText: ''
        },
        {
            _id: 6,
            icon: <PermMediaIcon/>,
            text: "Media",
            pageName: "media",
            href: `${currentURL}/media`,
            additionalText: ''
        },
        {
            _id: 7,
            icon: <FileCopyIcon/>,
            text: "Pages",
            pageName: "pages",
            href: `${currentURL}/pages`,
            additionalText: ''
        },
        {
            _id: 8,
            icon: <CommentIcon/>,
            text: "Comments",
            pageName: "comments",
            href: `${currentURL}/comments`,
            additionalText: ''
        },
        {
            _id: 9,
            icon: <FeedbackIcon/>,
            text: "Feedback",
            pageName: "feedback",
            href: `${currentURL}/feedback`,
            additionalText: ''
        },
        {
            _id: 10,
            icon: <SettingsIcon/>,
            text: "Settings",
            pageName: "settings",
            href: `${currentURL}/settings`,
            additionalText: ''
        }
    ];

    const handleMenuOnCollapse = () => setMenuOnCollapse(!menuOnCollapse);

    return (
        <div className={`app-side-bar-container ${menuOnCollapse ? 'app-side-bar-minimize' : ''}`}>
            <MainHeader menuOnCollapse={menuOnCollapse} previewURL={`${currentURL}/preview`} />
            { navMenuItems.map(item => {
                return <div className={`side-nav-menu ${pageName === item.pageName ? 'menu-item-active' : ''}`}>
                            <a className="menu-item" href={item.href}>
                                <span className="nav-icon">
                                    {item.icon}
                                </span>
                                <span className="nav-text">
                                    <span className="item">{item.text}</span>
                                    { item.additionalText && item.additionalText !== '' ? 
                                        <span className="plan-type">{item.additionalText}</span> : '' }
                                </span>
                            </a>
                        </div>
            }) }
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