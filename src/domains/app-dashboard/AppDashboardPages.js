import React from 'react';

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
        </div>
    );
}