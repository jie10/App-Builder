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
    const { menuOnCollapse, currentAppId } = props;
    const [highlightAppIcon, setHighlightAppIcon] = useState(false);

    const highlightOnHover = () => setHighlightAppIcon(true);

    const highlightOnBlur = () => setHighlightAppIcon(false);

    const loadAppName = () => {
        let currentApp = findOne(currentAppId);
        return currentApp ? currentApp.appName : '';
    }

    return (
        <a className="main-header-container" href={`/dashboard/${currentAppId}/preview`} onMouseEnter={highlightOnHover} onMouseLeave={highlightOnBlur} title={loadAppName()}>
            <span className={`app-details-icon ${highlightAppIcon ? 'app-details-icon-highlight' : ''}`}>
                {highlightAppIcon ? <HomeIcon/> : <PublicIcon/>}
            </span>
            <span className={`app-details-name ${menuOnCollapse ? 'app-details-name-hidden' : ''}`}>{ loadAppName() }</span>
        </a>
    );
}

const AppSideBar = (props) => {
    const { menuOnCollapse, setMenuOnCollapse, pageName, subPageName, currentAppId } = props;

    const navMenuItems = [
        {
            _id: 1,
            icon: <HomeIcon/>,
            text: "My Home",
            pageName: "home",
            href: `/dashboard/${currentAppId}/home`,
            additionalText: '',
            subPages: []
        },
        {
            _id: 2,
            icon: <BarChartIcon/>,
            text: "Stats",
            pageName: "stats",
            href: `/dashboard/${currentAppId}/stats`,
            additionalText: '',
            subPages: []
        },
        {
            _id: 3,
            icon: <ShoppingCartIcon/>,
            text: "Upgrades",
            pageName: "plans",
            href: `/dashboard/${currentAppId}/plans`,
            additionalText: "Free",
            subPages: [
                {
                    _id: 1,
                    text: "Plans",
                    pageName: "plans",
                    subPageName: "plans",
                    href: `/dashboard/${currentAppId}/plans`
                },
                {
                    _id: 2,
                    text: "Domains",
                    pageName: "domains",
                    subPageName: "domains",
                    href: `/dashboard/${currentAppId}/domains`
                },
                {
                    _id: 3,
                    text: "Emails",
                    pageName: "emails",
                    subPageName: "emails",
                    href: `/dashboard/${currentAppId}/emails`
                },
                {
                    _id: 4,
                    text: "Purchases",
                    pageName: "purchases",
                    subPageName: "purchases",
                    href: `/dashboard/${currentAppId}/purchases`
                }
            ]
        },
        {
            _id: 4,
            icon: <MailIcon/>,
            text: "Inbox",
            pageName: "inbox",
            href: `/dashboard/${currentAppId}/inbox`,
            additionalText: '',
            subPages: []
        },
        {
            _id: 5,
            icon: <PushPinIcon/>,
            text: "Posts",
            pageName: "posts",
            href: `/dashboard/${currentAppId}/posts`,
            additionalText: '',
            subPages: [
                {
                    _id: 1,
                    text: "All Posts",
                    pageName: "posts",
                    subPageName: "posts",
                    href: `/dashboard/${currentAppId}/posts`
                },
                {
                    _id: 2,
                    text: "Add New",
                    pageName: "post",
                    subPageName: "new",
                    href: `/dashboard/${currentAppId}/post/new`
                },
                {
                    _id: 3,
                    text: "Categories",
                    pageName: "categories",
                    subPageName: "categories",
                    href: `/dashboard/${currentAppId}/categories`
                },
                {
                    _id: 4,
                    text: "Tags",
                    pageName: "tags",
                    subPageName: "tags",
                    href: `/dashboard/${currentAppId}/tags`
                }
            ]
        },
        {
            _id: 6,
            icon: <PermMediaIcon/>,
            text: "Media",
            pageName: "media",
            href: `/dashboard/${currentAppId}/media`,
            additionalText: '',
            subPages: []
        },
        {
            _id: 7,
            icon: <FileCopyIcon/>,
            text: "Pages",
            pageName: "pages",
            href: `/dashboard/${currentAppId}/pages`,
            additionalText: '',
            subPages: [
                {
                    _id: 1,
                    text: "All Pages",
                    pageName: "pages",
                    subPageName: "pages",
                    href: `/dashboard/${currentAppId}/pages`
                },
                {
                    _id: 2,
                    text: "Add New",
                    pageName: "page",
                    subPageName: "new",
                    href: `/editor/${currentAppId}/page/new`
                }
            ]
        },
        {
            _id: 8,
            icon: <CommentIcon/>,
            text: "Comments",
            pageName: "comments",
            href: `/dashboard/${currentAppId}/comments`,
            additionalText: '',
            subPages: []
        },
        {
            _id: 9,
            icon: <FeedbackIcon/>,
            text: "Feedback",
            pageName: "feedback",
            href: `/dashboard/${currentAppId}/feedback`,
            additionalText: '',
            subPages: []
        },
        {
            _id: 10,
            icon: <SettingsIcon/>,
            text: "Settings",
            pageName: "settings",
            href: `/dashboard/${currentAppId}/settings/general`,
            additionalText: '',
            subPages: [
                {
                    _id: 1,
                    text: "General",
                    pageName: "settings",
                    subPageName: "general",
                    href: `/dashboard/${currentAppId}/settings/general`
                },
                {
                    _id: 2,
                    text: "Performance",
                    pageName: "settings",
                    subPageName: "performance",
                    href: `/dashboard/${currentAppId}/settings/performance`
                },
                {
                    _id: 3,
                    text: "Media",
                    pageName: "settings",
                    subPageName: "media",
                    href: `/dashboard/${currentAppId}/settings/media`
                },
                {
                    _id: 4,
                    text: "Hosting Configuration",
                    pageName: "settings",
                    subPageName: "hosting-configuration",
                    href: `/dashboard/${currentAppId}/settings/hosting-configuration`
                }
            ]
        }
    ];

    const handleMenuOnCollapse = () => setMenuOnCollapse(!menuOnCollapse);

    return (
        <div className={`app-side-bar-container ${menuOnCollapse ? 'app-side-bar-minimize' : ''}`}>
            <MainHeader menuOnCollapse={menuOnCollapse} currentAppId={currentAppId} />
            { navMenuItems.map((item, i) => {
                return <>
                            <div key={i} className={`side-nav-menu ${pageName === item.pageName ? 'menu-item-active' : ''}`}>
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
                            { (pageName === item.pageName || item.subPages.some(subItem => subItem.pageName === pageName)) && (item.subPages && item.subPages.length > 0) ? 
                                item.subPages.map((subItem, i) => 
                                        <div key={i} className={`side-nav-sub-menu ${subPageName === subItem.subPageName || pageName === subItem.subPageName ? 'side-nav-sub-menu-active' : ''}`}>
                                            <a className="menu-item" href={subItem.href}>
                                                {subItem.text}
                                            </a>
                                        </div>)
                                : '' }
                        </>
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