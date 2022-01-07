import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
    Add as AddIcon,
    BorderColor as BorderColorIcon,
    Undo as UndoIcon,
    Redo as RedoIcon,
    InfoOutlined as InfoOutlinedIcon,
    Settings as SettingsIcon,
    NearMeOutlined as NearMeOutlinedIcon,
    Check as CheckIcon,
    OpenInNew as OpenInNewIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';

import {
            Grid,
            Button,
            Snackbar,
            Alert as MuiAlert,
            CircularProgress,
            FormGroup,
            FormControlLabel,
            Checkbox,
            Typography,
            RadioGroup,
            Radio
        } from '@mui/material';

import "./EditNavBar.css";

import DateTimePicker from '../../components/Form/DateTimePicker';
import { useQuery } from "../../utils/helpers/hooks";
import { getPageById, addNewPage, updatePageById } from "../../api/Pages";
import { addNewBlock, getBlocksByPageId, removeBlockById } from "../../api/Blocks";
import { delay } from '../../utils/helpers/timing';
import { sendBlocks, deleteBlocks } from '../../stores/actions';
import { useOutsideClick } from '../../utils/helpers/hooks';

import siteLogo from "../../assets/logos/ceblogo.png";

const currentURL = window.location.pathname;

const theme = createTheme({
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    justifyContent: 'center'
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiRadio: {
            defaultProps: {
                disableRipple: true
            }            
        }
    }
});

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditNavBar = (props) => {
    const { appId, appName, appURL, toggleInserter, toggleSettings, blocks, sendBlocks, deleteBlocks } = props;

    const { page_id } = useParams();
    let query = useQuery();

    const refToolsMenu = useRef(null);
    const refDetailsMenu = useRef(null);
    const refPreviewMenu = useRef(null);

    const [toggleShowInserter, setToggleShowInserter] = useState(false);
    const [toggleShowSettings, setToggleShowSettings] = useState(false);
    const [toggleToolsMenu, setToggleToolsMenu] = useState(false);
    const [toggleDetailsMenu, setToggleDetailssMenu] = useState(false);
    const [togglePreviewMenu, setTogglePreviewMenu] = useState(false);
    const [togglePublishMenu, setTogglePublishMenu] = useState(false);
    const [selectedToolMenu, setSelectedToolMenu] = useState('edit');
    const [selectedPreviewMenu, setSelectedPreviewMenu] = useState('desktop');
    const [pageStatusUpdate, setPageStatusUpdate] = useState('draft');
    const [saveDraft, setSaveDraft] = useState(false);
    const [switchDraft, setSwitchDraft] = useState(false);
    const [updatePublishedPage, setUpdatePublishedPage] = useState(false);
    const [savePublishedPage, setSavePublishedPage] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("success");
    const [alertMessage, setAlertMessage] = useState('Saved.');
    const [pageVisibility, setPageVisibility] = useState('public');
    const [togglePageVisibility, setTogglePageVisibility] = useState(false);
    const [togglePagePublishDate, setTogglePagePublishDate] = useState(false);
    const [publishDate, setPublishDate] = useState(null);
    const [scheduledDate, setScheduledDate] = useState(null);
    const [publishDateTime, setPublishDateTime] = useState(null);
    const [loadPageComponents, setLoadPageComponents] = useState(false);
    const [previousBlocks, setPreviousBlocks] = useState([]);
    const [pageName, setPageName] = useState(null);

    const findHeaderTitle = (components) => {
        let result = components.length > 0 ? components.filter(component => component.settings.type === "HEADER")[0] : null;
        return result ? result.settings.parameters.title : "Untitled";
    }

    const saveDraftPage = () => {
        let action = query.get("action");
        // collect all current components to be added on page
        let currentComponents = Object.keys(blocks).map((block, i) => ({
                settings: blocks[block],
                sortId: i + 1
            })
        );

        setPageStatusUpdate("draft");

        if (!page_id && action === "create") {
            addNewPage(appId, {
                pageName : "index",
                pageTitle: findHeaderTitle(currentComponents),
                pageStatus: "draft",
                scheduledTimestamp: null,
                visibility: pageVisibility,
                blocks: currentComponents
            })
            .then(newPage => {
                if (newPage) {
                    if (currentComponents && currentComponents.length > 0) {
                        currentComponents.forEach((component, i) => {
                            if (newPage.defaultPageId) {
                                addNewBlock(newPage.defaultPageId, component.settings, component.sortId)
                                .catch(error => console.log(error));
    
                                if (i === currentComponents.length - 1) window.location.href = `/editor/${appId}/page/${newPage.defaultPageId}`;
                            }
                        });
                    } else {
                        window.location.href = `/editor/${appId}/page/${newPage.defaultPageId}`;
                    }
                } else {
                    window.location.href = `/dashboard/${appId}/home`;
                }
            })
            .catch(error => console.log(error));
        } else {
            updatePageById(page_id, appId, {
                pageName : pageName && pageName !== "" ? pageName.toLowerCase() : null,
                pageTitle: findHeaderTitle(currentComponents),
                pageStatus: "draft",
                scheduledTimestamp: null,
                visibility: pageVisibility,
                blocks: currentComponents,
                isPublished: false
            })
            .then(newPage => {
                if (newPage) {
                    if (currentComponents && currentComponents.length > 0) {
                        // delete all previousBlocks first
                        previousBlocks && previousBlocks.forEach((block, i) => {
                            removeBlockById(block._id)
                            .catch(error => console.log(error));
                        });

                        setPreviousBlocks([]);

                        // then add new blocks for page
                        currentComponents.forEach((component, i) => {
                            if (newPage.defaultPageId) {
                                addNewBlock(newPage.defaultPageId, component.settings, component.sortId)
                                .catch(error => console.log(error));
                            }
                        });
                        deleteBlocks();
                        setLoadPageComponents(true);
                    }
                } else {
                    window.location.href = `/dashboard/${appId}/home`;
                }
            })
            .catch(error => console.log(error));
        }
    }

    const publishPage = () => {
        let action = query.get("action");
        // collect all current components to be added on page
        let currentComponents = Object.keys(blocks).map((block, i) => ({
                settings: blocks[block],
                sortId: i + 1
            })
        );

        if (action === "create") {
            addNewPage(appId, {
                pageName : "index",
                pageTitle: findHeaderTitle(currentComponents),
                pageStatus: "published",
                scheduledTimestamp: publishDate,
                visibility: pageVisibility,
                blocks: currentComponents,
                isPublished: true
            })
            .then(newPage => {
                if (newPage) {
                    if (currentComponents && currentComponents.length > 0) {
                        currentComponents.forEach((component, i) => {
                            if (newPage.defaultPageId) {
                                addNewBlock(newPage.defaultPageId, component.settings, component.sortId)
                                .catch(error => console.log(error));
    
                                if (i === currentComponents.length - 1) window.location.href = `/editor/${appId}/page/${newPage.defaultPageId}`;
                            }
                        });
                    } else {
                        window.location.href = `/editor/${appId}/page/${newPage.defaultPageId}`;
                    }
                } else {
                    window.location.href = `/dashboard/${appId}/home`;
                }
            })
            .catch(error => console.log(error));
        } else {
            updatePageById(page_id, appId, {
                pageName : pageName && pageName !== "" ? pageName.toLowerCase() : null,
                pageTitle: findHeaderTitle(currentComponents),
                pageStatus: "published",
                scheduledTimestamp: publishDate,
                visibility: pageVisibility,
                blocks: currentComponents,
                isPublished: true
            })
            .then(newPage => {
                if (newPage) {
                    if (currentComponents && currentComponents.length > 0) {
                        // delete all previousBlocks first
                        previousBlocks && previousBlocks.forEach((block, i) => {
                            removeBlockById(block._id)
                            .catch(error => console.log(error));
                        });

                        setPreviousBlocks([]);
                        // then add new blocks for page
                        currentComponents.forEach((component, i) => {
                            if (newPage.defaultPageId) {
                                addNewBlock(newPage.defaultPageId, component.settings, component.sortId)
                                .catch(error => console.log(error));
                            }
                        });
                        deleteBlocks();
                        setLoadPageComponents(true);
                    }
                } else {
                    window.location.href = `/dashboard/${appId}/home`;
                }
            })
            .catch(error => console.log(error));
        }
    }

    const loadPageBlocks = pageId => {
        getBlocksByPageId(pageId)
        .then(currentBlocks => {
            setPreviousBlocks(currentBlocks);

            currentBlocks && currentBlocks.sort((a, b) => a.sortId - b.sortId).forEach(block => {
                let savedBlock = groupComponentsToBlocks([block]);
                let saved = savedBlock[Object.keys(savedBlock)[0]];
                saved.status = "saved"
                
                sendBlocks(saved);
                setLoadPageComponents(false);
            });
        }).catch(error => console.log(error));
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

    const handleSelectedDesktopPreview = () => setSelectedPreviewMenu("desktop");

    const handleSelectedTabletPreview = () => setSelectedPreviewMenu("tablet");

    const handleSelectedMobilePreview = () => setSelectedPreviewMenu("mobile");

    const handleShowDetails = () => setToggleDetailssMenu(!toggleDetailsMenu);

    const handleShowPreview = () => setTogglePreviewMenu(!togglePreviewMenu);

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

            setPageStatusUpdate("draft");

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

        setPageStatusUpdate("published");

        delay(() => {
            publishPage();
            setUpdatePublishedPage(false);
            setAlertSeverity("success");
            setAlertMessage("Page updated.");
            setOpenSnackBar(true);
        }, 2000);
    }

    const handleBeforePublishPage = () => setTogglePublishMenu(true);

    const handleCancelBeforePublishPage = () => setTogglePublishMenu(false);

    const handleChangeToPublicVisibility = () => {
        setPageVisibility("public");
    }

    const handleChangeToPrivateVisibility = () => {
        if (window.confirm("Would you like to privately publish this post now?")) {
            setPageVisibility("private");
            setAlertSeverity("info");
            setAlertMessage("Page visibility is now private.");
            setOpenSnackBar(true);
        }
    }

    const handleChangePageName = (e) => setPageName(e.target.value);

    const handleTogglePageVisibility = () => setTogglePageVisibility(!togglePageVisibility);

    const handleTogglePagePublishDate = () => setTogglePagePublishDate(!togglePagePublishDate);

    const handleOnPublishPage = (e) => {
        e.preventDefault();

        setSavePublishedPage(true);

        setPageStatusUpdate("published");

        delay(() => {
            publishPage();
            setSavePublishedPage(false);
            setAlertSeverity("success");
            setAlertMessage("Page published.");
            setOpenSnackBar(true);
            setTogglePublishMenu(false);
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
            <Button style={{color: "#FFFFFF", fontWeight: "bold"}} size="small" onClick={() => window.location.href = `/${appId}/${page_id}`}>
                View Page
            </Button> : null
    );

    useOutsideClick(refToolsMenu, () => {
        if (toggleToolsMenu) setToggleToolsMenu(false);
    });

    useOutsideClick(refDetailsMenu, () => {
        if (toggleDetailsMenu) setToggleDetailssMenu(false);
    });

    useOutsideClick(refPreviewMenu, () => {
        if (togglePreviewMenu) setTogglePreviewMenu(false);
    });

    useEffect(() => {
        getPageById(page_id)
            .then(currentPage => {
                if (currentPage) {
                    setPageName(currentPage.pageName);
                    setPageStatusUpdate(currentPage.pageStatus);
                    setPageVisibility(currentPage.visibility === "private" ? "private" : "public");
                    setScheduledDate(currentPage.scheduledTimestamp);
                    loadPageBlocks(page_id);
                }
            }).catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let action = query.get("action");
        let copyPageId = query.get("copy");

        let pageId = action === "create" && copyPageId ? copyPageId : page_id;

        if (loadPageComponents) {
            delay(() => {
                loadPageBlocks(pageId);
            }, 2000)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadPageComponents]);

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
                </div>
                <div className='page-file-name-container'>
                    <input
                        type="text"
                        maxLength={25}
                        defaultValue={pageName}
                        value={pageName ? pageName : ""}
                        onChange={handleChangePageName} />
                </div>
                <div className="edit-nav-bar-menus">
                    {
                        pageStatusUpdate === "published" || pageStatusUpdate === "scheduled" ? 
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
                        disabled={saveDraft || switchDraft || updatePublishedPage || savePublishedPage}
                        onClick={handleShowPreview}>
                        Preview
                    </button>
                    { 
                        pageStatusUpdate === "published" || pageStatusUpdate === "scheduled" ?
                            <button
                                className={`page-button page-status-button publish-page-button ${switchDraft || updatePublishedPage ? 'disabled-publish-button' : ''}`}
                                onClick={handleOnUpdatePage}
                                disabled={switchDraft || updatePublishedPage}>
                                {updatePublishedPage ? 'Updating...' : 'Update'}
                            </button> : <button
                                className={`page-button page-status-button publish-page-button  ${saveDraft || savePublishedPage ? 'disabled-publish-button' : ''}`}
                                onClick={handleBeforePublishPage}
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
                <ThemeProvider theme={theme}>
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
                    <div
                        className={`editor-preview-container ${togglePreviewMenu ? 'editor-preview-container-show' : ''}`}
                        ref={refPreviewMenu}>
                        <div className="preview-menu-items">
                            <button
                                className={`preview-menu-item ${selectedPreviewMenu === "desktop" ? 'preview-menu-item-active' : ''}`}
                                onClick={handleSelectedDesktopPreview}>
                                <span className="text">
                                    Desktop
                                </span>
                                <span className={`is-checked ${selectedPreviewMenu === "desktop" ? 'is-checked-active' : ''}`}>
                                    <CheckIcon/>
                                </span>
                            </button>
                            <button 
                                className={`preview-menu-item ${selectedPreviewMenu === "tablet" ? 'preview-menu-item-active' : ''}`}
                                onClick={handleSelectedTabletPreview}>
                                <span className="text">
                                    Tablet
                                </span>
                                <span className={`is-checked ${selectedPreviewMenu === "tablet" ? 'is-checked-active' : ''}`}>
                                    <CheckIcon/>
                                </span>
                            </button>
                            <button 
                                className={`preview-menu-item ${selectedPreviewMenu === "mobile" ? 'preview-menu-item-active' : ''}`}
                                onClick={handleSelectedMobilePreview}>
                                <span className="text">
                                    Mobile
                                </span>
                                <span className={`is-checked ${selectedPreviewMenu === "mobile" ? 'is-checked-active' : ''}`}>
                                    <CheckIcon/>
                                </span>
                            </button>
                        </div>
                        <div className="preview-menu-links">
                            <a href={pageStatusUpdate === "published" ? `/${appId}/${page_id}` : `/dashboard/${appId}/preview?page=${page_id}`}
                                className="preview-menu-link"
                                target="_blank"
                                rel="noreferrer">
                                <span className="text">
                                    Preview in new tab
                                </span>
                                <span className="icon">
                                    <OpenInNewIcon/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className={`editor-publish-container ${togglePublishMenu ? 'editor-publish-container-show' : ''}`}>
                        <div className="publish-header">
                            <div className="before-publish-buttons">
                                <button
                                    className={`header-button ${savePublishedPage ? 'disabled-publish-button' : 'submit-button'}`}
                                    onClick={handleOnPublishPage}
                                    disabled={savePublishedPage}>
                                    {savePublishedPage ? 'Publishing...' : 'Publish'}
                                </button>
                                <button
                                    className={`header-button ${savePublishedPage ? 'disabled-cancel-publish-button' : ''}`}
                                    onClick={handleCancelBeforePublishPage}
                                    disabled={savePublishedPage}>
                                        Cancel
                                </button>
                            </div>
                        </div>
                        <div className="publish-content">
                            <div className={`before-publish-details ${savePublishedPage ? 'before-publish-details-hide' : ''}`}>
                                <strong>Are you ready to publish?</strong>
                                <p>Double-check your settings before publishing.</p>
                                <div className="app-details">
                                    <div className="logo">
                                        <div className="logo-protector"></div>
                                        <img className="app-logo" src={siteLogo} alt="logo" />
                                    </div>
                                    <div className="details">
                                        <span className="title">{appName}</span>
                                        <span className="url">{appURL}</span>
                                    </div>
                                </div>
                                <div className="app-settings">
                                    <button 
                                        className="setting-toggable"
                                        onClick={handleTogglePageVisibility}>
                                        <span className="block">
                                            <span className="detail">
                                                <span className="title">Visibility:</span>
                                                <span className="value">{ pageVisibility === "private" ? "Private" : "Public" }</span>
                                            </span>
                                            <span className="icon">
                                                {togglePageVisibility ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                            </span>
                                        </span>
                                    </button>
                                    <div className={`visibility-list ${togglePageVisibility ? 'show-visibility-list' : ''}`}>
                                        <RadioGroup
                                            aria-label="page visibility"
                                            value={pageVisibility}
                                            name="radio-buttons-group">
                                                <FormControlLabel
                                                    value="public"
                                                    control={<Radio onClick={handleChangeToPublicVisibility} />}
                                                    label={<Typography style={{textAlign: "left", margin: "24px 0 0 0"}} variant="p">
                                                                <strong style={{margin: "0 0 8px 0"}}>Public</strong>
                                                                <p style={{margin: 0, wordBreak: "break-word", width: "150px"}}>Visible to everyone.</p>
                                                            </Typography>} />
                                                <FormControlLabel
                                                    value="private"
                                                    control={<Radio onClick={handleChangeToPrivateVisibility} />}
                                                    label={<Typography style={{textAlign: "left", margin: "24px 0 0 0"}} variant="p">
                                                                <strong style={{margin: "0 0 8px 0"}}>Private</strong>
                                                                <p style={{margin: 0, wordBreak: "break-word", width: "150px"}}>Only visible to site admins and editors.</p>
                                                            </Typography>} />
                                        </RadioGroup>
                                    </div>
                                    <button 
                                        className="setting-toggable"
                                        onClick={handleTogglePagePublishDate}>
                                        <span className="block">
                                            <span className="detail">
                                                <span className="title">Publish:</span>
                                                <span className="value">{ publishDateTime }</span>
                                            </span>
                                            <span className="icon">
                                                {togglePagePublishDate ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                                            </span>
                                        </span>
                                    </button>
                                    <div className={`publish-date-time-setter ${togglePagePublishDate ? 'show-publish-date-time-setter' : ''}`}>
                                        <DateTimePicker scheduledDate={scheduledDate} setPublishDateTime={setPublishDateTime} setPublishDate={setPublishDate} />
                                    </div>
                                </div>
                            </div>
                            <div className={`publish-loader ${savePublishedPage ? 'publish-loader-show' : ''}`}>
                                <CircularProgress color="inherit" />
                            </div>
                        </div>
                        <div className="publish-footer">
                            <FormGroup>
                                <FormControlLabel sx={{fontSize: "14px"}}
                                    control={<Checkbox style={{color: "#007CBA"}} defaultChecked />}
                                    label={<Typography variant="p">Always show pre-publish checks.</Typography>} />
                            </FormGroup>
                        </div>
                    </div>
                </ThemeProvider>
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

export default connect(mapStateToProps, { sendBlocks, deleteBlocks })(EditNavBar)