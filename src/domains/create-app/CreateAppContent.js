import React, { useState  } from 'react'
import { Divider, Grid } from '@mui/material';

import {
    AddOutlined as AddOutlinedIcon,
    CreateNewFolderOutlined as CreateNewFolderOutlinedIcon
} from '@mui/icons-material';

import "./CreateAppContent.css";

import sampleCoverImage from "../../assets/images/sample-cover-image.png";
import CreateNewFolderModal from './CreateNewFolderModal';

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

const CreateAppContent = (props) => {
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
        <div className="content-container" onScroll={handleOnScroll}>
            <Header setHiddenModal={setHiddenModal} scrollValueFromTop={scrollValueFromTop} />
            <FirstWebsiteSection />
            <CreateNewFolderModal hiddenModal={hiddenModal} setHiddenModal={setHiddenModal} />
        </div>
    )
}

export default CreateAppContent;