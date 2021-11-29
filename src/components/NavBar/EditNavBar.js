import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Add as AddIcon,
    BorderColor as BorderColorIcon,
    Undo as UndoIcon,
    Redo as RedoIcon,
    InfoOutlined as InfoOutlinedIcon,
    ListOutlined as ListOutlinedIcon,
    Settings as SettingsIcon,
    NearMeOutlined as NearMeOutlinedIcon,
    Check as CheckIcon
} from '@mui/icons-material';

import {Grid, Button, Snackbar, Alert as MuiAlert} from '@mui/material/';

import "./EditNavBar.css";

import { createNewPage, updatePageByComponents, findCurrentPage } from "../../api/AppList";
import { delay } from '../../utils/helpers/timing';
import { getBlocks, sendBlocks } from '../../stores/actions';
import { useOutsideClick } from '../../utils/helpers/hooks';

import siteLogo from "../../assets/logos/ceblogo.png";

const currentURL = window.location.pathname;

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditNavBar = (props) => {
    const { toggleInserter, toggleSettings, blocks, sendBlocks } = props;

    const { id, page_id } = useParams();

    const refToolsMenu = useRef(null);
    const refDetailsMenu = useRef(null);

    const [toggleShowInserter, setToggleShowInserter] = useState(false);
    const [toggleShowSettings, setToggleShowSettings] = useState(false);
    const [toggleToolsMenu, setToggleToolsMenu] = useState(false);
    const [toggleDetailsMenu, setToggleDetailssMenu] = useState(false);
    const [toggleListView, setToggleListView] = useState(false);
    const [selectedToolMenu, setSelectedToolMenu] = useState('edit');
    const [pageStatusUpdate, setPageStatusUpdate] = useState('draft');
    const [saveDraft, setSaveDraft] = useState(false);
    const [switchDraft, setSwitchDraft] = useState(false);
    const [updatePublishedPage, setUpdatePublishedPage] = useState(false);
    const [savePublishedPage, setSavePublishedPage] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("success");
    const [alertMessage, setAlertMessage] = useState('Saved.');

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

    const handleShowTools = () => setToggleToolsMenu(!toggleToolsMenu);

    const handleSelectedEditTool = () => setSelectedToolMenu("edit");

    const handleSelectedSelectTool = () => setSelectedToolMenu("select");

    const handleShowDetails = () => setToggleDetailssMenu(!toggleDetailsMenu);

    const handleToggleListView = () => setToggleListView(!toggleListView);

    const handleOnSaveDraftPage = (e) => {
        e.preventDefault();

        setSaveDraft(true);

        delay(() => {
            saveDraftPage();
            setSaveDraft(false);
            setAlertSeverity("success");
            setAlertMessage("Saved.");
            setOpenSnackBar(true);
        }, 2000);
    }

    const handleSwitchPageToDraft = (e) => {
        if (window.confirm("Are you sure you want to unpublish this post?")) {
            e.preventDefault();

            setSwitchDraft(true);

            delay(() => {
                saveDraftPage();
                setSwitchDraft(false);
                setAlertSeverity("info");
                setAlertMessage("Page reverted to draft.");
                setOpenSnackBar(true);
            }, 2000);
        }
    }

    const handleOnUpdatePage = (e) => {
        e.preventDefault();

        setUpdatePublishedPage(true);

        delay(() => {
            publishPage();
            setUpdatePublishedPage(false);
            setAlertSeverity("success");
            setAlertMessage("Page updated.");
            setOpenSnackBar(true);
        }, 2000);
    }

    const handleOnPublishPage = (e) => {
        e.preventDefault();

        setSavePublishedPage(true);

        delay(() => {
            publishPage();
            setSavePublishedPage(false);
            setAlertSeverity("success");
            setAlertMessage("Page published.");
            setOpenSnackBar(true);
        }, 2000);
    }

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const publishAction = (
        pageStatusUpdate === "published" ? 
            <Button color="secondary" size="small" onClick={() => window.location.href = `/${id}/${page_id}`}>
                View Page
            </Button> : null
    );

    useOutsideClick(refToolsMenu, () => {
        if (toggleToolsMenu) setToggleToolsMenu(false);
    });

    useOutsideClick(refDetailsMenu, () => {
        if (toggleDetailsMenu) setToggleDetailssMenu(false);
    });

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
                    <button
                        className={`page-button page-edit-button ${toggleToolsMenu ? 'page-edit-button-active' : ''}`}
                        onClick={handleShowTools}>
                        {selectedToolMenu === "edit" ? <BorderColorIcon/> : <NearMeOutlinedIcon/>}
                    </button>
                    <button className="page-button page-edit-button disabled-button" disabled={true}>
                        <UndoIcon/>
                    </button>
                    <button className="page-button page-edit-button disabled-button" disabled={true}>
                        <RedoIcon/>
                    </button>
                    <button
                        className={`page-button page-edit-button ${toggleDetailsMenu ? 'page-edit-button-active' : ''}`}
                        onClick={handleShowDetails}>
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
                                className={`page-button page-status-button ${switchDraft || updatePublishedPage ? 'disabled-draft-button' : ''}`}
                                onClick={handleSwitchPageToDraft}
                                disabled={switchDraft || updatePublishedPage}>
                                Switch to Draft
                            </button> : <button
                                className={`page-button page-status-button ${saveDraft || savePublishedPage ? 'disabled-draft-button' : ''}`}
                                onClick={handleOnSaveDraftPage}
                                disabled={saveDraft || savePublishedPage}>
                                {saveDraft ? "Saving..." : "Save Draft"}
                            </button> 
                    }
                    
                    <button
                        className={`page-button page-status-button ${saveDraft || switchDraft || updatePublishedPage || savePublishedPage ? 'disabled-preview-button' : ''}`}
                        disabled={saveDraft || switchDraft || updatePublishedPage || savePublishedPage}>
                        Preview
                    </button>
                    { 
                        pageStatusUpdate === "published" ?
                            <button
                                className={`page-button page-status-button publish-page-button ${switchDraft || updatePublishedPage ? 'disabled-publish-button' : ''}`}
                                onClick={handleOnUpdatePage}
                                disabled={switchDraft || updatePublishedPage}>
                                {updatePublishedPage ? 'Updating...' : 'Update'}
                            </button> : <button
                                className={`page-button page-status-button publish-page-button ${saveDraft || savePublishedPage ? 'disabled-publish-button' : ''}`}
                                onClick={handleOnPublishPage}
                                disabled={saveDraft || savePublishedPage}>
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
            <div className="edit-popover">
                <div
                    className={`editor-details-container ${toggleDetailsMenu ? 'editor-details-container-show' : ''}`}
                    ref={refDetailsMenu}>
                    <Grid container>
                        <Grid item xs={4} className="details-container">
                            <span className="title">Characters</span>
                            <span className="count">0</span>
                        </Grid>
                        <Grid item xs={4} className="details-container">
                            <span className="title">Words</span>
                            <span className="count">0</span>
                        </Grid>
                        <Grid item xs={4} className="details-container">
                            <span className="title">Headings</span>
                            <span className="count">0</span>
                        </Grid>
                        <Grid item xs={4} className="details-container">
                            <span className="title">Paragraphs</span>
                            <span className="count">0</span>
                        </Grid>
                        <Grid item xs={4} className="details-container">
                            <span className="title">Blocks</span>
                            <span className="count">0</span>
                        </Grid>
                    </Grid>
                </div>
                <div
                    className={`editor-tools-container ${toggleToolsMenu ? 'editor-tools-container-show' : ''}`}
                    ref={refToolsMenu}>
                    <div className="tools-menu-items">
                        <button
                            className={`tools-menu-item ${selectedToolMenu === "edit" ? 'tools-menu-item-active' : ''}`}
                            onClick={handleSelectedEditTool}>
                            <span className="icon">
                                <BorderColorIcon/>
                            </span>
                            <span className="text">
                                Edit
                            </span>
                            <span className={`is-checked ${selectedToolMenu === "edit" ? 'is-checked-active' : ''}`}>
                                <CheckIcon/>
                            </span>
                        </button>
                        <button 
                            className={`tools-menu-item ${selectedToolMenu === "select" ? 'tools-menu-item-active' : ''}`}
                            onClick={handleSelectedSelectTool}>
                            <span className="icon">
                                <NearMeOutlinedIcon/>
                            </span>
                            <span className="text">
                                Select
                            </span>
                            <span className={`is-checked ${selectedToolMenu === "select" ? 'is-checked-active' : ''}`}>
                                <CheckIcon/>
                            </span>
                        </button>
                    </div>
                    <div className="tools-menu-help">
                        <p>Tools provide different interactions for selecting, navigating, and editing blocks. Toggle between select and edit by pressing Escape and Enter.</p>
                    </div>
                </div>
            </div>
            <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity={alertSeverity} sx={{ width: '100%' }} action={publishAction}>
                    { alertMessage } 
                </Alert>
            </Snackbar>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        blocks: state.blocks
    }
}

export default connect(mapStateToProps, { getBlocks, sendBlocks })(EditNavBar)