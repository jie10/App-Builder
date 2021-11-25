import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Add as AddIcon,
    BorderColor as BorderColorIcon,
    Undo as UndoIcon,
    Redo as RedoIcon,
    InfoOutlined as InfoOutlinedIcon,
    ListOutlined as ListOutlinedIcon,
    Settings as SettingsIcon
} from '@mui/icons-material';

import "./EditNavBar.css";

import { createNewPage, updatePageByComponents, findCurrentPage } from "../../api/AppList";

import { getBlocks, sendBlocks } from '../../stores/actions'

import siteLogo from "../../assets/logos/ceblogo.png";

const currentURL = window.location.pathname;

const EditNavBar = (props) => {
    const { toggleInserter, toggleSettings, blocks, sendBlocks } = props;

    const { id, page_id } = useParams();

    const [toggleShowInserter, setToggleShowInserter] = useState(false);
    const [toggleShowSettings, setToggleShowSettings] = useState(false);
    const [toggleListView, setToggleListView] = useState(false);
    const [pageStatusUpdate, setPageStatusUpdate] = useState('draft');

    const saveDraftPage = () => {
        let components = Object.keys(blocks).map((block, i) => ({
                _id: block,
                settings: blocks[block],
                sortId: i + 1
            })
        );

        setPageStatusUpdate("draft");

        if (page_id === "new") {
            let newPageId = createNewPage(id, components, "draft");
            window.location.href = newPageId ? `/editor/${id}/page/${newPageId}` : `/dashboard/${id}/home`;
        } else {
            updatePageByComponents(components, "draft", id, page_id);
        }
    }

    const publishPage = () => {
        let components = Object.keys(blocks).map((block, i) => ({
                _id: block,
                settings: blocks[block],
                sortId: i + 1
            })
        );

        setPageStatusUpdate("published");

        if (page_id === "new") {
            let newPageId = createNewPage(id, components, "published");
            window.location.href = newPageId ? `/editor/${id}/page/${newPageId}` : `/dashboard/${id}/home`;
        } else {
            updatePageByComponents(components, "published", id, page_id);
        }
    }

    const groupComponentsToBlocks = (components) => components.reduce((a, v) => ({ ...a, [v._id]: v.settings}), {});

    const handleToggleShowInserter = () => {
        setToggleShowInserter(!toggleShowInserter);
        toggleInserter();
    };

    const handleToggleShowSettings = () => {
        setToggleShowSettings(!toggleShowSettings);
        toggleSettings();
    };

    const handleToggleListView = () => setToggleListView(!toggleListView);

    const handleOnSaveDraftPage = (e) => {
        e.preventDefault();
        saveDraftPage();
    }

    const handleSwitchPageToDraft = (e) => {
        if (window.confirm("Are you sure you want to unpublish this post?")) {
            saveDraftPage();
        }
    }

    const handleOnUpdatePage = (e) => {
        e.preventDefault();
        publishPage();
    }

    const handleOnPublishPage = (e) => {
        e.preventDefault();
        publishPage();
    }

    useEffect(() => {
        let currentPage = findCurrentPage(id, page_id);

        if (currentPage) {
            setPageStatusUpdate(currentPage.pageStatus === "published" ? "published" : "draft");
            currentPage.components.forEach(component => {
                let savedBlock = groupComponentsToBlocks([component]);
                let saved = savedBlock[Object.keys(savedBlock)[0]];
                sendBlocks(saved);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sendBlocks]);

    return (
        <div className="edit-nav-bar-container">
            <div className="site-logo-container">
                <a className="site-logo-link" href={ currentURL } target="_self">
                    <div className="logo-protector"></div>
                    <img className="site-logo" src={siteLogo} alt="logo" />
                </a>
            </div>
            <div className="edit-nav-bar">
                <div className="edit-nav-bar-menus">
                    <button
                        className={`page-button add-component-button ${toggleShowInserter ? 'toggle-inserter' : ''}`}
                        onClick={handleToggleShowInserter}>
                        <AddIcon/>
                    </button>
                    <button className="page-button page-edit-button">
                        <BorderColorIcon/>
                    </button>
                    <button className="page-button page-edit-button disabled-button" disabled={true}>
                        <UndoIcon/>
                    </button>
                    <button className="page-button page-edit-button disabled-button" disabled={true}>
                        <RedoIcon/>
                    </button>
                    <button className="page-button page-edit-button">
                        <InfoOutlinedIcon/>
                    </button>
                    <button className={`page-button page-edit-button ${toggleListView ? 'toggle-list-view' : ''}`}
                        onClick={handleToggleListView}>
                        <ListOutlinedIcon/>
                    </button>
                </div>
                <div className="edit-nav-bar-menus">
                    {
                        pageStatusUpdate === "published" ? 
                            <button
                                className="page-button page-status-button"
                                onClick={handleSwitchPageToDraft}>
                                Switch to Draft
                            </button> : <button
                                className="page-button page-status-button"
                                onClick={handleOnSaveDraftPage}>
                                Save Draft
                            </button> 
                    }
                    
                    <button className="page-button page-status-button">
                        Preview
                    </button>
                    { 
                        pageStatusUpdate === "published" ?
                            <button
                                className="page-button page-status-button publish-page-button"
                                onClick={handleOnUpdatePage}>
                                Update
                            </button> : <button
                                className="page-button page-status-button publish-page-button"
                                onClick={handleOnPublishPage}>
                                Publish
                            </button>
                    }
                    <button
                        className={`page-button page-settings-button ${toggleShowSettings ? 'toggle-settings' : ''}`}
                        onClick={handleToggleShowSettings}>
                        <SettingsIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        blocks: state.blocks
    }
}

export default connect(mapStateToProps, { getBlocks, sendBlocks })(EditNavBar)