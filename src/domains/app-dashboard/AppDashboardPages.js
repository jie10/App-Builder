import React from 'react';

import {
    Search as SearchIcon
} from '@mui/icons-material';

import  {ReactComponent as IllustrationPagesImage}from "../../assets/svgs/illustration-pages.svg";

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

export const Pages = (props) => {
    const { currentURL } = props;

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
                    <div className="tab tab-active">
                        <span className="tab-text">Published</span>
                        <span className="badge-pages-count">0</span>
                    </div>
                    <div className="tab">
                        <span className="tab-text">Drafts</span>
                        <span className="badge-pages-count">0</span>
                    </div>
                    <div className="tab">
                        <span className="tab-text">Scheduled</span>
                        <span className="badge-pages-count">0</span>
                    </div>
                    <div className="tab">
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
            <div className="pages-list-container">
                <div className="no-pages-found-container">
                    <div className="details-image">
                        <IllustrationPagesImage />
                    </div>
                    <div className="details-text">
                        <h2>You haven't published any pages yet.</h2>
                        <p>Would you like to publish your first page?</p>
                    </div>
                    <a className="start-page-button" href="/" target="_blank">Start a page</a>
                </div>
            </div>
        </div>
    );
}