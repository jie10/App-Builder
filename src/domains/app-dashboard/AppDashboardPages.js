import React, { useState } from 'react';

import {
    Search as SearchIcon
} from '@mui/icons-material';

import "./AppDashboardPages.css";

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

const PublishedPages = (props) => {
    const { currentAppId } = props;

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
                { noPagesFound }
            </div>;
}

const DraftPages = (props) => {
    const { currentAppId } = props;

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
                { noPagesFound }
            </div>;
}

const ScheduledPages = (props) => {
    const { currentAppId } = props;

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
                { noPagesFound }
            </div>;
}

const TrashedPages = (props) => {
    const { currentAppId } = props;

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
                { noPagesFound }
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
        switch (pageSelected) {
            case "published_pages_tab":
                return <PublishedPages currentAppId={currentAppId} />;
            case "draft_pages_tab":
                return <DraftPages currentAppId={currentAppId} />;
            case "scheduled_pages_tab":
                return <ScheduledPages currentAppId={currentAppId} />;
            case "trashed_pages_tab":
                return <TrashedPages currentAppId={currentAppId} />;
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
        </div>
    );
}