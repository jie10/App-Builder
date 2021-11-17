import React, { useState, useRef, useEffect } from 'react';

import {
    Search as SearchIcon,
    AccessTime as AccessTimeIcon,
    MoreHoriz as MoreHorizIcon,
    Close as CloseIcon,
    CreateOutlined as CreateOutlinedIcon,
    CheckOutlined as CheckOutlinedIcon,
    RemoveRedEyeOutlined as RemoveRedEyeOutlinedIcon,
    InsertLinkOutlined as InsertLinkOutlinedIcon,
    ContentCopyOutlined as ContentCopyOutlinedIcon,
    Delete as DeleteIcon,
    Restore as RestoreIcon,
    BarChart as BarChartIcon,
    Info as InfoIcon
} from '@mui/icons-material';

import "./AppDashboardPages.css";

import { capitalizeWord, convertTimestampToDateTime, convertTimestampFromNow } from '../../utils/helpers/convert';
import { useOutsideClick } from '../../utils/helpers/hooks';
import { delay } from '../../utils/helpers/timing';
import { countAllPages, findOne, removePage, updatePageByStatus, restorePageByStatus } from '../../api/AppList';

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
    const { currentAppId, pages, setShowPopupCopy, setReloadPages } = props;
    const buttonRef = useRef([]);
    const pageRef = useRef([]);
    const currentButtonRef = useRef(null);
    const currentPageRef = useRef(null);

    const moreMenuOnClick = (e) => {
        let currentIndex = pageRef.current.findIndex(page => page.id.split('_').slice(-1)[0] === e.currentTarget.id.split('_').slice(-1)[0])

        currentButtonRef.current = buttonRef.current[currentIndex];
        currentPageRef.current = pageRef.current[currentIndex];

        if (currentButtonRef.current.classList.contains('more-vertical-menu-button')) {
            currentButtonRef.current.classList.remove('more-vertical-menu-button');

            for (let i = currentIndex; i < pageRef.current.length; i++) {
                if (pageRef.current[i] && buttonRef.current[i]) {
                    pageRef.current[i].classList.remove('show-list');
                    buttonRef.current[i].classList.remove('more-vertical-menu-button');
                }
            }
        } else {
            currentButtonRef.current.classList.add('more-vertical-menu-button');
            pageRef.current[currentIndex].classList.add('show-list');

            for (let i = currentIndex; i < pageRef.current.length; i++) {
                if (pageRef.current[i] && i !== currentIndex) {
                    pageRef.current[i].classList.remove('show-list');
                    buttonRef.current[i].classList.remove('more-vertical-menu-button');
                }
            }
        }
    }

    const editPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        window.location.href = `/editor/${currentAppId}/page/${currentPageId}`;
    }

    const viewStatsOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        window.location.href = `/dashboard/${currentAppId}/stats?page=${currentPageId}`;
    }

    const copyPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        window.location.href = `/editor/${currentAppId}/page/new?copy=${currentPageId}`;
    }

    const previewPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        window.location.href = `/dashboard/${currentAppId}/preview?page=${currentPageId}`;
    }

    const viewPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];
        window.location.href = `/${currentAppId}/${currentPageId}`;
    }

    const copyLinkOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];
        navigator.clipboard.writeText(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/dashboard/${currentAppId}/preview?page=${currentPageId}`);
        setShowPopupCopy(true);
        delay(() => setShowPopupCopy(false), 2000);
    }

    const copyPublishedLinkOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];
        navigator.clipboard.writeText(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/${currentAppId}/${currentPageId}`);
        setShowPopupCopy(true);
        delay(() => setShowPopupCopy(false), 2000);
    }

    const trashCurrentPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        delay(() => {
            updatePageByStatus("trashed", currentAppId, currentPageId);
            setReloadPages(true);
        }, 2000);
    }

    const restoreCurrentPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        delay(() => {
            restorePageByStatus(currentAppId, currentPageId);
            setReloadPages(true);
        }, 2000);
    }

    const deleteCurrentPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        if (window.confirm("Delete this page permanently?")) {
            delay(() => {
                removePage(currentAppId, currentPageId);
                setReloadPages(true);
            }, 2000);
        }
    }

    useOutsideClick(currentButtonRef, () => {
        currentButtonRef.current.classList.remove('more-vertical-menu-button');
        currentPageRef.current.classList.remove('show-list');
    });

    const loadMoreMenuList = (pageType) => {
        let page = pageType.toLowerCase();
        return <>
                    {
                        page !== "trashed" ? 
                            <button className="more-menu-item"
                                    onClick={editPageOnClick}>
                                <span className="more-menu-item-icon">
                                    <CreateOutlinedIcon/>
                                </span>
                                <span className="more-menu-item-text">
                                    Edit
                                </span>
                            </button> : ''
                    }
                    {
                        page === "draft" || page === "scheduled" ? 
                            <>
                                <button className="more-menu-item">
                                    <span className="more-menu-item-icon">
                                        <CheckOutlinedIcon/>
                                    </span>
                                    <span className="more-menu-item-text">
                                        Publish
                                    </span>
                                </button>
                                <button className="more-menu-item"
                                        onClick={previewPageOnClick}>
                                    <span className="more-menu-item-icon">
                                        <RemoveRedEyeOutlinedIcon/>
                                    </span>
                                    <span className="more-menu-item-text">
                                        Preview
                                    </span>
                                </button>
                            </> : page === "published" ? 
                            <>
                                <button className="more-menu-item"
                                        onClick={viewPageOnClick}>
                                    <span className="more-menu-item-icon">
                                        <RemoveRedEyeOutlinedIcon/>
                                    </span>
                                    <span className="more-menu-item-text">
                                        View Page
                                    </span>
                                </button>
                                <button className="more-menu-item" onClick={viewStatsOnClick}>
                                    <span className="more-menu-item-icon">
                                        <BarChartIcon/>
                                    </span>
                                    <span className="more-menu-item-text">
                                        Stats
                                    </span>
                                </button>
                            </> : ''
                    }
                    {
                        page !== "trashed" ?
                            <button className="more-menu-item" onClick={copyPageOnClick}>
                                <span className="more-menu-item-icon">
                                    <InsertLinkOutlinedIcon/>
                                </span>
                                <span className="more-menu-item-text">
                                    Copy page
                                </span>
                            </button> : ''
                    }
                    <button className="more-menu-item" onClick={page === "published" ? copyPublishedLinkOnClick : copyLinkOnClick}>
                        <span className="more-menu-item-icon">
                            <ContentCopyOutlinedIcon/>
                        </span>
                        <span className="more-menu-item-text">
                            Copy link
                        </span>
                    </button>
                    {
                        page === "trashed" ? 
                        <>
                            <button className="more-menu-item" onClick={restoreCurrentPageOnClick}>
                                <span className="more-menu-item-icon">
                                    <RestoreIcon/>
                                </span>
                                <span className="more-menu-item-text">
                                    Restore
                                </span>
                            </button>
                            <button className="more-menu-item delete" onClick={deleteCurrentPageOnClick}>
                                <span className="more-menu-item-icon">
                                    <DeleteIcon/>
                                </span>
                                <span className="more-menu-item-text">
                                    Delete
                                </span>
                            </button>
                        </> : <button className="more-menu-item" onClick={trashCurrentPageOnClick}>
                                <span className="more-menu-item-icon">
                                    <DeleteIcon/>
                                </span>
                                <span className="more-menu-item-text">
                                    Trash
                                </span>
                            </button>
                    }
                </>;
    }

    return <>
                <div className="pages-list">
                    <div className="pages-list-header">
                        <h2>Pages</h2>
                        <a className="create-page-button"
                            href={`/editor/${currentAppId}/page/new`}
                            target="_blank"
                            rel="noreferrer">
                                Add new page
                        </a>
                    </div>
                    { pages.map((page, i) => 
                        <div key={i} className="pages-list-content">
                            <div className="content-details">
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
                            </div>
                            <button className="more-menu-button"
                                    id={`more-menu-button_${page._id}`}
                                    ref={el => buttonRef.current[i] = el}
                                    onClick={moreMenuOnClick}>
                                <MoreHorizIcon/>
                            </button>
                            <div className="more-menu-list"
                                id={`more-menu-list_${page._id}`}
                                ref={el => pageRef.current[i] = el}>
                                <div className="pointer"></div>
                                { loadMoreMenuList(page.pageStatus) }
                                <div className="page-type">
                                    {capitalizeWord(page.pageStatus)}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="list-end-indicator"></div>
            </>;
}

export const Pages = (props) => {
    const { currentAppId } = props;

    const [publishedTabActive, setPublishedTabActive] = useState(true);
    const [draftTabActive, setDraftTabActive] = useState(false);
    const [scheduledTabActive, setScheduledTabActive] = useState(false);
    const [trashedTabActive, setTrashedTabActive] = useState(false);
    const [pageSelected, setPageSelected] = useState("published_pages_tab");
    const [toggleSearchBar, setToggleSearchBar] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [showPopupCopy, setShowPopupCopy] = useState(false);
    const [pagesCount, setPagesCount] = useState(countAllPages(currentAppId));
    const [reloadPages, setReloadPages] = useState(false);

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

    const handleSearchBarShowOnClick = () => setToggleSearchBar(true);

    const handleSearchBarHideOnClick = () => {
        setSearchKeyword(null);
        setToggleSearchBar(false);
    }

    const handleSearchInputOnChange = (e) => {
        let keyword = e.target.value;

        if (keyword.length > 0) {
            setSearchKeyword(keyword);
        } else {
            setSearchKeyword(null);
            setToggleSearchBar(false);
        }
    }

    const handleClosePopupCopyOnClick = () => setShowPopupCopy(false);

    const loadSelectedPage = () => {
        const currentApp = findOne(currentAppId);
        let pages = currentApp ? currentApp.pages : [];

        let filterList = (pageType) => pages.filter(page => page.pageStatus === pageType);

        const showNoResultsFound  = (detailsText) => <div className="no-page-results-found-container">
                                                        <div className="details-image">
                                                            <IllustrationPagesImage />
                                                        </div>
                                                        <span className="details-text">
                                                            { detailsText }
                                                        </span>
                                                    </div>;

        const noPagesFound = (detailsText, actionButton) => <div className="no-pages-found-container">
                                <div className="details-image">
                                    <IllustrationPagesImage />
                                </div>
                                <div className="details-text">
                                    {detailsText}
                                </div>
                                {actionButton}
                            </div>;


        if (searchKeyword && searchKeyword.length > 0) {
            pages = pages.filter(page => {
                const searchCriteria = new RegExp(`${searchKeyword}`, 'gi');
                return searchCriteria.test(page.pageTitle) === true;
            });

            return <div className="pages-list-container trashed-pages">
                    { pages.length > 0 ? <PagesList
                                            currentAppId={currentAppId}
                                            pages={pages}
                                            setShowPopupCopy={setShowPopupCopy}
                                            setPagesCount={setPagesCount} /> : showNoResultsFound(`No pages match your search for ${searchKeyword}.`) }
                    </div>;
        } else {
            switch (pageSelected) {
                case "published_pages_tab":
                    pages = pages.length > 0 ? filterList("published") : pages;
                    return <div className="pages-list-container published-pages">
                    { pages.length > 0 ? <PagesList
                                            currentAppId={currentAppId}
                                            pages={pages}
                                            setShowPopupCopy={setShowPopupCopy}
                                            setReloadPages={setReloadPages}
                                            setPagesCount={setPagesCount} /> :
                                            noPagesFound(<>
                                                            <h2>You haven't published any pages yet.</h2>
                                                            <p>Would you like to publish your first page?</p>
                                                        </>, <a className="start-page-button"
                                                                href={`/editor/${currentAppId}/page/new`}
                                                                target="_blank"
                                                                rel="noreferrer">
                                                                    Start a page
                                                            </a>) }
                </div>;
                case "draft_pages_tab":
                    pages = pages.length > 0 ? filterList("draft") : pages;
                    return <div className="pages-list-container draft-pages">
                            { pages.length > 0 ? <PagesList
                                                    currentAppId={currentAppId}
                                                    pages={pages}
                                                    setShowPopupCopy={setShowPopupCopy}
                                                    setReloadPages={setReloadPages}
                                                    setPagesCount={setPagesCount} /> :
                                                    noPagesFound(<>
                                                                    <h2>You don't have any drafts.</h2>
                                                                    <p>Would you like to create one?</p>
                                                                </>, <a className="start-page-button"
                                                                        href={`/editor/${currentAppId}/page/new`}
                                                                        target="_blank"
                                                                        rel="noreferrer">
                                                                            Start a page
                                                                    </a>) }
                            </div>;
                case "scheduled_pages_tab":
                    pages = pages.length > 0 ? filterList("scheduled") : pages;
                    return <div className="pages-list-container scheduled-pages">
                             { pages.length > 0 ? <PagesList
                                                    currentAppId={currentAppId}
                                                    pages={pages}
                                                    setShowPopupCopy={setShowPopupCopy}
                                                    setReloadPages={setReloadPages}
                                                    setPagesCount={setPagesCount} /> :
                                                    noPagesFound(<>
                                                                    <h2>You don't have any scheduled pages yet.</h2>
                                                                    <p>Would you like to create one?</p>
                                                                </>, <a className="start-page-button"
                                                                        href={`/editor/${currentAppId}/page/new`}
                                                                        target="_blank"
                                                                        rel="noreferrer">
                                                                            Start a page
                                                                    </a>) }
                            </div>;
                case "trashed_pages_tab":
                    pages = pages.length > 0 ? filterList("trashed") : pages;
                    return <div className="pages-list-container trashed-pages">
                                { pages.length > 0 ? <PagesList
                                                        currentAppId={currentAppId}
                                                        pages={pages}
                                                        setShowPopupCopy={setShowPopupCopy}
                                                        setReloadPages={setReloadPages}
                                                        setPagesCount={setPagesCount} /> :
                                                        noPagesFound(<>
                                                                        <h2>You don't have any pages in your trash folder.</h2>
                                                                        <p>Everything you write is solid gold.</p>
                                                                    </>, null) }
                            </div>;
                default:
                    return <></>;
            }
        }
        
    }

    useEffect(() => {
        if (reloadPages) {
            setPagesCount(countAllPages(currentAppId));
            setReloadPages(false);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadPages]);

    return (
        <div className="pages-container">
            <div className={`popup-message-copy-link ${!showPopupCopy ? 'popup-message-copy-link-hidden' : ''}`}
                onClick={handleClosePopupCopyOnClick}>
                <span className="icon">
                    <InfoIcon/>
                </span>
                <span className="text">Link copied to clipboard.</span>
                <span className="close-button">
                    <CloseIcon/>
                </span>
            </div>
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
                        <span className="badge-pages-count">
                            { pagesCount && pagesCount.count.published ? pagesCount.count.published : 0 }
                        </span>
                    </div>
                    <div className={`tab ${draftTabActive ? 'tab-active' : ''}`} onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="draft_pages_tab"></div>
                        <span className="tab-text">Drafts</span>
                        <span className="badge-pages-count">
                            { pagesCount && pagesCount.count.draft ? pagesCount.count.draft : 0 }
                        </span>
                    </div>
                    <div className={`tab ${scheduledTabActive ? 'tab-active' : ''}`}  onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="scheduled_pages_tab"></div>
                        <span className="tab-text">Scheduled</span>
                        <span className="badge-pages-count">
                            { pagesCount && pagesCount.count.scheduled ? pagesCount.count.scheduled : 0 }
                        </span>
                    </div>
                    <div className={`tab ${trashedTabActive ? 'tab-active' : ''}`}  onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="trashed_pages_tab"></div>
                        <span className="tab-text">Trashed</span>
                        <span className="badge-pages-count">
                            { pagesCount && pagesCount.count.trashed ? pagesCount.count.trashed : 0 }
                        </span>
                    </div>
                </div>
                <div className={`search-container ${toggleSearchBar ? 'search-wide-container' : ''}`}>
                    <div className="search-navigation-icon" onClick={handleSearchBarShowOnClick}>
                        <SearchIcon/>
                    </div>
                    <input className="search-page-list-input"
                            type="text"
                            placeholder="Search pages..."
                            value={searchKeyword ? searchKeyword : ''}
                            autoFocus
                            onChange={handleSearchInputOnChange} />
                    <div className="close-navigation-icon" onClick={handleSearchBarHideOnClick}>
                        <CloseIcon/>
                    </div>
                </div>
            </div>
            { loadSelectedPage() }
        </div>
    );
}