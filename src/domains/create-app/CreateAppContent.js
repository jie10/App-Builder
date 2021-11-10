import React, { useState, useEffect } from 'react'
import {
    Divider,
    Grid
} from '@mui/material';
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";

import {
    AddOutlined as AddOutlinedIcon,
    CreateNewFolderOutlined as CreateNewFolderOutlinedIcon,
    SearchOutlined as SearchOutlinedIcon,
    GridViewOutlined as GridViewOutlinedIcon,
    ViewListOutlined as ViewListOutlinedIcon,
    CloseOutlined as CloseOutlinedIcon
} from '@mui/icons-material';

import "./CreateAppContent.css";

import { findAll } from './AppList';

import sampleCoverImage from "../../assets/images/sample-cover-image.png";

import CreateNewFolderModal from './CreateNewFolderModal';
import CreateNewAppModal from './CreateNewAppModal';

const Header = (props) => {
    const { setHiddenCreateNewFolderModal, setHiddenCreateNewAppModal, scrollValueFromTop } = props;

    const handleCreateNewFolderClick = (e) => {
        e.preventDefault();
        setHiddenCreateNewFolderModal(false);
    }

    const handleCreateNewAppClick = (e) => {
        e.preventDefault();
        setHiddenCreateNewAppModal(false);
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
                    <button className="jumbo-content-button jumbo-content-main-button" onClick={handleCreateNewAppClick}>
                        <span className="button-icon"><AddOutlinedIcon /></span>
                        <span className="button-text">Create New App</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

const FirstWebsiteSection = (props) => {
    const { setHiddenCreateNewAppModal } = props;

    const styledGridContainer = { justifyContent: "center" };
    const styledDivider = { margin: "0 48px" };

    const handleCreateNewAppClick = (e) => {
        e.preventDefault();
        setHiddenCreateNewAppModal(false);
    }

    return(
        <div className="first-website-section-container">
            <div className="first-website-section main-cover-container">
                <div className="cover-image-container">
                    <img className="cover-image" src={sampleCoverImage} alt="cover" />
                </div>
                <div className="cover-details-container">
                    <h2 className="cover-details-title">Create Your First App</h2>
                    <p className="cover-details-subtitle">You're on your way to creating your first working application.</p>
                    <button className="cover-details-action-button" onClick={ handleCreateNewAppClick }>
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

const AppsListSection = (props) => {
    const { appsList, setLoadingContent, showGridView, setShowGridView } = props;

    const [searchKeyword, setSearchKeyword] = useState(null);
    const [showSearchClear, setShowSearchClear] = useState(false);

    const styledDivider = { margin: "0 36px" };

    const loadApps = () => {
        if (appsList && appsList.length > 0) {
            return appsList.map((app, i) => {
                return <Grid key={i} item xs={12} md={6} lg={3}>
                            <div className="card card-app-container">
                                <div className="preview" onClick={() => window.location.href = `/dashboard/${app.appURL}/home`}>
                                    <img src={app.themePreview} alt="app preview" />
                                </div>
                                <div className="details">
                                    <h3 className="app-name">{app.appName}</h3>
                                    <p className="publish-status">{app.isPublished ? "Pubished" : "Not Published"}</p>
                                </div>
                            </div>
                        </Grid>;
            })
        } else {
            return '';
        }
    }

    const handleSearchInputOnChange = (e) => {
        let keyword = e.target.value;

        setSearchKeyword(keyword)
        setShowSearchClear(keyword && keyword.length > 0 ? true : false);
    }

    const handeSearchClearOnClick = () => {
        setSearchKeyword(null);
        setShowSearchClear(false);
    }

    const handleLoadContentOnClick = () => setLoadingContent(false);

    const handleGridViewOnClick = () => setShowGridView(true);

    const handleListViewOnClick = () => setShowGridView(false);

    return (
        <div className="app-list-container">
            <div className="list-header">
                <div className="load-content-buttons-container">
                    <button className="load-content-button"
                        onClick={handleLoadContentOnClick}>
                            All Apps
                    </button>
                </div>
                <div className="navigate-content-container">
                    <div className="search-app-container">
                        <div className="search-app-icon">
                            <SearchOutlinedIcon />
                        </div>
                        <input className="search-app-input"
                                type="text"
                                placeholder="Search for an app..."
                                maxLength="250"
                                value={searchKeyword ? searchKeyword : ''}
                                autoFocus={true}
                                onChange={handleSearchInputOnChange} />
                        <div className={`search-clear-icon ${!showSearchClear ? 'hidden' : ''}`}
                            onClick={handeSearchClearOnClick}>
                                <CloseOutlinedIcon />
                        </div>
                    </div>
                    <Divider orientation="vertical" flexItem sx={styledDivider} />
                    <div className="view-content-type-container">
                        <button
                            className={`content-type-button ${showGridView ? 'content-type-button-active' : ''}`}
                            id="grid_view_button"
                            onClick={handleGridViewOnClick}>
                                <GridViewOutlinedIcon />
                        </button>
                        <button
                            className={`content-type-button ${!showGridView ? 'content-type-button-active' : ''}`}
                            id="list_view_button"
                            onClick={handleListViewOnClick}>
                            <ViewListOutlinedIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`list-content grid-view ${!showGridView ? 'hidden' : ''}`}>
                <Grid container spacing={5}>
                    { loadApps() }
                </Grid>
            </div>
            <div className={`list-content list-view ${showGridView ? 'hidden' : ''}`}></div>
        </div>
    );
}

const ContentLoader = () => {
    return (
        <div className="content-loader">
            <Loader
                type="Oval"
                color="#00BFFF"
                height={50}
                width={80}
            />
            <span className="text">Loading your apps</span>
            <span className="text">Please wait...</span>
        </div>
    );
}

const CreateAppContent = (props) => {
    let location = useLocation();

    const [loadingContent, setLoadingContent] = useState(false);
    const [ showGridView, setShowGridView ] = useState(true);
    const [hiddenCreateNewFolderModal, setHiddenCreateNewFolderModal] = useState(true);
    const [hiddenCreateNewAppModal, setHiddenCreateNewAppModal] = useState(true);
    const [scrollValueFromTop, setScrollValueFromTop] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const loadContent = () => {
        let appsList = findAll();

        if (loadingContent && appsList.length > 0) {
            return <AppsListSection appsList={appsList} setLoadingContent={setLoadingContent} showGridView={showGridView} setShowGridView={setShowGridView}/>
        } if (loadingContent && appsList.length < 1) {
            return <FirstWebsiteSection setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} />
        } else {
            return <ContentLoader />;
        }
    }

    const handleOnScroll = (e) => {
        if (e.target.firstChild.offsetHeight >= e.target.scrollTop ) {
            setScrollValueFromTop(false);
        } else {
            setScrollValueFromTop(true)
        }
    }

    useEffect(() => {
        if (location.search.includes("create")) setHiddenCreateNewAppModal(false);

        const timer = setTimeout(() => {
            setLoadingContent(true);
          }, 1000);

        return () => clearTimeout(timer);

    }, [location, loadContent])

    return (
        <div className="content-container" onScroll={handleOnScroll}>
            <Header setHiddenCreateNewFolderModal={setHiddenCreateNewFolderModal} setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} scrollValueFromTop={scrollValueFromTop} />
            { loadContent() }
            <CreateNewFolderModal hiddenCreateNewFolderModal={hiddenCreateNewFolderModal} setHiddenCreateNewFolderModal={setHiddenCreateNewFolderModal} />
            <CreateNewAppModal hiddenCreateNewAppModal={hiddenCreateNewAppModal} setHiddenCreateNewAppModal={setHiddenCreateNewAppModal}/>
        </div>
    )
}

export default CreateAppContent;