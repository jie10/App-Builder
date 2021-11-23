import React, { useState } from 'react'

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

import siteLogo from "../../assets/logos/ceblogo.png";

const currentURL = window.location.pathname;

const EditNavBar = () => {
    const [toggleInserter, setToggleInserter] = useState(false);
    const [toggleSettings, setToggleSettings] = useState(false);

    const handleToggleInserter = () => setToggleInserter(!toggleInserter);
    const handleToggleSettings = () => setToggleSettings(!toggleSettings);

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
                        className={`page-button add-component-button ${toggleInserter ? 'toggle-inserter' : ''}`}
                        onClick={handleToggleInserter}>
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
                    <button className="page-button page-edit-button">
                        <ListOutlinedIcon/>
                    </button>
                </div>
                <div className="edit-nav-bar-menus">
                    <button className="page-button page-status-button">
                        Save
                    </button>
                    <button className="page-button page-status-button">
                        Preview
                    </button>
                    <button className="page-button page-status-button publish-page-button">
                        Publish
                    </button>
                    <button
                        className={`page-button page-settings-button ${toggleSettings ? 'toggle-settings' : ''}`}
                        onClick={handleToggleSettings}>
                        <SettingsIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditNavBar;