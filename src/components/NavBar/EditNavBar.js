import React, { useState } from 'react';
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

import { createNewPage } from "../../api/AppList";

import {
    getBlocks
} from '../../stores/actions'

import siteLogo from "../../assets/logos/ceblogo.png";

const currentURL = window.location.pathname;

const EditNavBar = (props) => {
    const { toggleInserter, toggleSettings, blocks } = props;

    const { id, page_id } = useParams();

    const [toggleShowInserter, setToggleShowInserter] = useState(false);
    const [toggleShowSettings, setToggleShowSettings] = useState(false);
    const [toggleListView, setToggleListView] = useState(false);

    const handleToggleShowInserter = () => {
        setToggleShowInserter(!toggleShowInserter);
        toggleInserter();
    };

    const handleToggleShowSettings = () => {
        setToggleShowSettings(!toggleShowSettings);
        toggleSettings();
    };

    const handleToggleListView = () => setToggleListView(!toggleListView);

    const handleOnSavePage = (e) => {
        e.preventDefault();

        let components = Object.keys(blocks).map((block, i) => ({
                _id: block,
                settings: blocks[block],
                sortId: i + 1
            })
        );
        console.log(components)
        if (page_id === "new") {
            let newPageId = createNewPage(id, components);
            window.location.href = newPageId ? `/editor/${id}/page/${newPageId}` : `/dashboard/${id}/home`;
        } else {
            // TODO - Update the page and save its current components
        }
    }

    return(
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
                    <button
                        className="page-button page-status-button"
                        onClick={handleOnSavePage}>
                        Save Draft
                    </button>
                    <button className="page-button page-status-button">
                        Preview
                    </button>
                    <button className="page-button page-status-button publish-page-button">
                        Publish
                    </button>
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

export default connect(mapStateToProps, {getBlocks})(EditNavBar)