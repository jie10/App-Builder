import React, { useState } from 'react';

import {
    Search as SearchIcon,
    AccessTime as AccessTimeIcon,
    MoreHoriz as MoreHorizIcon
} from '@mui/icons-material';

import "./AppDashboardPages.css";

import { convertTimestampToDateTime, convertTimestampFromNow } from '../../utils/helpers/convert';
import { findOne } from '../../api/AppList';

import  { ReactComponent as IllustrationPagesImage }from "../../assets/svgs/illustration-pages.svg";

export const MyHome = (props) => {
    const { currentURL } = props;

    return (
        <div className="my-home-container">
            <div className="header-container">
                <div className="header-title">
                    <h1>My Home</h1>
                    <p>Your hub for posting, editing, and growing your app.</p>
                </div>
                <a className="header-link" href={currentURL} target="_blank" rel="noreferrer">Visit Site</a>
            </div>
        </div>
    );
}

const PagesList = (props) => {
    const { currentAppId, pages } = props;
    const [toggleMoreMenu, setToggleMoreMenu] = useState(false);

    const moreMenuOnClick = () => setToggleMoreMenu(!toggleMoreMenu);

    return <div className="pages-list">
                <div className="pages-list-header">
                    <h2>Pages</h2>
                    <a className="create-page-button"
                        href={`/editor/${currentAppId}/page/new`}
                        target="_blank"
                        rel="noreferrer">
                            Add new page
                    </a>
                </div>
                <div className="pages-list-content">
                    { pages.map((page, i) => 
                        <div key={i} className="content-details">
                            <a className="page-name"
                                href={`/editor/${currentAppId}/page/${page._id}`}
                                title={`Edit ${page.pageTitle}`}
                                target="_self">
                                    {page.pageTitle}
                            </a>
                            <span className="time-created" title={convertTimestampToDateTime(page.updatedTimestamp)}>
                                <AccessTimeIcon/>
                                {convertTimestampFromNow(page.updatedTimestamp)}
                            </span>
                        </div>)
                    }
                    <button className={`more-menu-button ${toggleMoreMenu ? 'more-vertical-menu-button' : ''}`}
                            onClick={moreMenuOnClick}>
                        <MoreHorizIcon/>
                    </button>
                </div>
            </div>;
}

const PublishedPages = (props) => {
    const { currentAppId, pages } = props;

    const noPagesFound = <div className="no-pages-found-container">
                            <div className="details-image">
                                <IllustrationPagesImage />
                            </div>
                            <div className="details-text">
                                <h2>You haven't published any pages yet.</h2>
                                <p>Would you like to publish your first page?</p>
                            </div>
                            <a className="start-page-button"
                                href={`/editor/${currentAppId}/page/new`}
                                target="_blank"
                                rel="noreferrer">
                                    Start a page
                            </a>
                        </div>;

    return <div className="pages-list-container published-pages">
                { pages.length > 0 ? <PagesList currentAppId={currentAppId} pages={pages} /> : noPagesFound }
            </div>;
}

const DraftPages = (props) => {
    const { currentAppId, pages } = props;

    const noPagesFound = <div className="no-pages-found-container">
                            <div className="details-image">
                                <IllustrationPagesImage />
                            </div>
                            <div className="details-text">
                                <h2>You don't have any drafts.</h2>
                                <p>Would you like to create one?</p>
                            </div>
                            <a className="start-page-button"
                                href={`/editor/${currentAppId}/page/new`}
                                target="_blank"
                                rel="noreferrer">
                                    Start a page
                            </a>
                        </div>;

    return <div className="pages-list-container draft-pages">
                { pages.length > 0 ? <PagesList currentAppId={currentAppId} pages={pages} /> : noPagesFound }
            </div>;
}

const ScheduledPages = (props) => {
    const { currentAppId, pages } = props;

    const noPagesFound = <div className="no-pages-found-container">
                            <div className="details-image">
                                <IllustrationPagesImage />
                            </div>
                            <div className="details-text">
                                <h2>You don't have any scheduled pages yet.</h2>
                                <p>Would you like to create one?</p>
                            </div>
                            <a className="start-page-button"
                                href={`/editor/${currentAppId}/page/new`}
                                target="_blank"
                                rel="noreferrer">
                                    Start a page
                            </a>
                        </div>;

    return <div className="pages-list-container scheduled-pages">
                { pages.length > 0 ? <PagesList currentAppId={currentAppId} pages={pages} /> : noPagesFound }
            </div>;
}

const TrashedPages = (props) => {
    const { currentAppId, pages } = props;

    const noPagesFound = <div className="no-pages-found-container">
                            <div className="details-image">
                                <IllustrationPagesImage />
                            </div>
                            <div className="details-text">
                                <h2>You don't have any pages in your trash folder.</h2>
                                <p>Everything you write is solid gold.</p>
                            </div>
                        </div>;

    return <div className="pages-list-container trashed-pages">
                { pages.length > 0 ? <PagesList currentAppId={currentAppId} pages={pages} /> : noPagesFound }
            </div>;
}

export const Pages = (props) => {
    const { currentAppId } = props;

    const [publishedTabActive, setPublishedTabActive] = useState(true);
    const [draftTabActive, setDraftTabActive] = useState(false);
    const [scheduledTabActive, setScheduledTabActive] = useState(false);
    const [trashedTabActive, setTrashedTabActive] = useState(false);
    const [pageSelected, setPageSelected] = useState("published_pages_tab");

    const handleTabOnClick = (e) => {
        let tabClicked = e.target.id;

        setPageSelected(tabClicked);

        switch (tabClicked) {
            case "published_pages_tab":
                setPublishedTabActive(true);
                setDraftTabActive(false);
                setScheduledTabActive(false);
                setTrashedTabActive(false);
            break;
            case "draft_pages_tab":
                setDraftTabActive(true);
                setPublishedTabActive(false);
                setScheduledTabActive(false);
                setTrashedTabActive(false);
            break;
            case "scheduled_pages_tab":
                setScheduledTabActive(true);
                setPublishedTabActive(false);
                setDraftTabActive(false);
                setTrashedTabActive(false);
            break;
            case "trashed_pages_tab":
                setTrashedTabActive(true);
                setPublishedTabActive(false);
                setDraftTabActive(false);
                setScheduledTabActive(false);
            break;
            default:
                setPublishedTabActive(false);
                setDraftTabActive(false);
                setScheduledTabActive(false);
                setTrashedTabActive(false);
            break;
        }
    }

    const loadSelectedPage = () => {
        const currentApp = findOne(currentAppId);
        let pages = currentApp ? currentApp.pages : [];

        switch (pageSelected) {
            case "published_pages_tab":
                pages = pages.length > 0 ? pages.filter(page => page.pageStatus === "published") : pages;
                return <PublishedPages currentAppId={currentAppId} pages={pages} />;
            case "draft_pages_tab":
                pages = pages.length > 0 ? pages.filter(page => page.pageStatus === "draft") : pages;
                return <DraftPages currentAppId={currentAppId} pages={pages} />;
            case "scheduled_pages_tab":
                pages = pages.length > 0 ? pages.filter(page => page.pageStatus === "scheduled") : pages;
                return <ScheduledPages currentAppId={currentAppId} pages={pages} />;
            case "trashed_pages_tab":
                pages = pages.length > 0 ? pages.filter(page => page.pageStatus === "trashed") : pages;
                return <TrashedPages currentAppId={currentAppId} pages={pages} />;
            default:
                return <></>;
        }
    }

    return (
        <div className="pages-container">
            <div className="header-container">
                <div className="header-title">
                    <h1>Pages</h1>
                    <p>Create, edit, and manage the pages on your site. <a href="/support/pages" target="_blank">Learn more</a>.</p>
                </div>
            </div>
            <div className="pages-tab-container">
                <div className="tabs-container">
                    <div className={`tab ${publishedTabActive ? 'tab-active' : ''}`} onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="published_pages_tab"></div>
                        <span className="tab-text">Published</span>
                        <span className="badge-pages-count">0</span>
                    </div>
                    <div className={`tab ${draftTabActive ? 'tab-active' : ''}`} onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="draft_pages_tab"></div>
                        <span className="tab-text">Drafts</span>
                        <span className="badge-pages-count">0</span>
                    </div>
                    <div className={`tab ${scheduledTabActive ? 'tab-active' : ''}`}  onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="scheduled_pages_tab"></div>
                        <span className="tab-text">Scheduled</span>
                        <span className="badge-pages-count">0</span>
                    </div>
                    <div className={`tab ${trashedTabActive ? 'tab-active' : ''}`}  onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="trashed_pages_tab"></div>
                        <span className="tab-text">Trashed</span>
                        <span className="badge-pages-count">0</span>
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-navigation-icon">
                        <SearchIcon/>
                    </div>
                </div>
            </div>
            { loadSelectedPage() }
            <div className="list-end-indicator"></div>
        </div>
    );
}