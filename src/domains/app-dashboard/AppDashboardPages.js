import React, { useState, useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

import {
    Snackbar,
    Alert as MuiAlert,
    FormControlLabel,
    Typography,
    RadioGroup,
    Radio
} from '@mui/material';

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
    Info as InfoIcon,
    DesktopWindows as DesktopWindowsIcon,
    TabletAndroid as TabletAndroidIcon,
    PhoneAndroid as PhoneAndroidIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./AppDashboardPages.css";

import { capitalizeWord, convertTimestampToDateTime, convertTimestampFromNow } from '../../utils/helpers/convert';
import { useOutsideClick } from '../../utils/helpers/hooks';
import { delay } from '../../utils/helpers/timing';
import { remveHttpFromURL } from '../../utils/helpers/url';
import { getProjectPreviewById, getProjectDashboardById, updateProjectStatusById, buildProject } from '../../api/Projects';
import { getPagesByProjectId, updatePageStatusById, restorePageStatusById, removePageById } from '../../api/Pages';

import  { ReactComponent as IllustrationPagesImage }from "../../assets/svgs/illustration-pages.svg";

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

export const AppPreview = (props) => {
    const { currentAppId } = props;

    const refClipboardInput = useRef(null);
    const refPreviewMenu = useRef(null);
    const refBuildSetupMenu = useRef(null);

    const [togglePreviewMenu, setTogglePreviewMenu] = useState(false);
    const [selectedPreviewMenu, setSelectedPreviewMenu] = useState("desktop");
    const [copiedClipboard, setCopiedClipboard] = useState(false);
    const [showCopyButton, setShowCopyButton] = useState(false);
    const [buildStatus, setBuildStatus] = useState(false);
    const [projectURL, setProjectURL] = useState(null);
    const [buildType, setBuildType] = useState("NATIVE");
    const [showBuildSetup, setShowBuildSetup] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("info");
    const [alertMessage, setAlertMessage] = useState('Building project...');

    const selectPreviewType = () => {
        if (selectedPreviewMenu === "tablet") {
            return <>
                <span className="icon">
                    <TabletAndroidIcon/>
                </span>
                <span className="text">
                    Tablet
                </span>
            </>;
        } else if (selectedPreviewMenu === "mobile") {
            return <>
                <span className="icon">
                    <PhoneAndroidIcon/>
                </span>
                <span className="text">
                    Mobile
                </span>
            </>;
        } else {
            return <>
                <span className="icon">
                    <DesktopWindowsIcon/>
                </span>
                <span className="text">
                    Desktop
                </span>
            </>;            
        }
    }

    const handleTogglePreviewMenu = () => setTogglePreviewMenu(!togglePreviewMenu)
    const handleSelectedDesktopPreview = () => {
        setSelectedPreviewMenu("desktop");
        setTogglePreviewMenu(false);
    }
    const handleSelectedTabletPreview = () => {
        setSelectedPreviewMenu("tablet");
        setTogglePreviewMenu(false);
    }
    const handleSelectedMobilePreview = () => {
        setSelectedPreviewMenu("mobile");
        setTogglePreviewMenu(false);
    }

    const selectClipboardInput = (e) => {
        e.target.select();
        e.target.setSelectionRange(0, 99999); /* For mobile devices */
        refClipboardInput.current = e.target;
    }

    const copyClipboardInput = () => {
        setCopiedClipboard(true);
        refClipboardInput.current.select();
        refClipboardInput.current.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(projectURL);

        delay(() => {
            setCopiedClipboard(false);
        }, 1000);
    }

    const restartBuildSetup = () => {
        setShowBuildSetup(false);
        setBuildType("NATIVE");
    }

    const hoverClipboardInput = () => setShowCopyButton(true);

    const handleBuildProject = () => setShowBuildSetup(!showBuildSetup);

    const handleVisitApp = () => {
        // Todo - Add download project files here
        // if (buildStatus) {
        //     window.open(projectURL, "_blank");
        // }
    }

    const handleChangeToBuildWithReact = () => setBuildType("REACT");

    const handleChangeToBuildWithAngular = () => setBuildType("ANGULAR");

    const handleChangeToBuildWithNative = () => setBuildType("NATIVE");

    const handleConfirmBuildSetup = () => {
        restartBuildSetup();
        setOpenSnackBar(true);

        Promise.all([updateProjectStatusById(currentAppId, true), buildProject(currentAppId, buildType)])
            .then(update => {
                let newProject = update[0];
                let newBuild = update[1];

                if (newProject && newBuild) {
                    setAlertSeverity("success");
                    setAlertMessage("Project Build Successfully.");
                    setBuildStatus(true);
                } else {
                    setAlertSeverity("error");
                    setAlertMessage("Project Build Failed.");
                    setBuildStatus(false);
                }
            })
            .catch(error => console.log(error));
    }
    const handleCancelBuildSetup = () => {
        restartBuildSetup();
    }

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    useOutsideClick(refClipboardInput, () => {
        setShowCopyButton(false);

        if (window.getSelection) window.getSelection().removeAllRanges();

        if (copiedClipboard) setCopiedClipboard(false);
    });

    useOutsideClick(refPreviewMenu, () => {
        setTogglePreviewMenu(false);
    });

    useOutsideClick(refBuildSetupMenu, () => {
        restartBuildSetup();
    });

    useEffect(() => {
        getProjectPreviewById(currentAppId)
            .then(project => {
                setBuildStatus(project ? project.isPublished : false);
                setProjectURL(project ? project.appURL : null)
            })
            .catch(error => console.log(error));
    }, [ currentAppId ]);

    return (
        <div className="app-preview-container">
            <div className="header-container">
                <div className="header-control-panel">
                    <div className="preview-dropdown">
                        <button
                            className="selected"
                            onClick={handleTogglePreviewMenu}>
                            { selectPreviewType() }
                            <span className="icon">
                                <KeyboardArrowDownIcon/>
                            </span>
                        </button>
                        <div className={`preview-menu-items ${togglePreviewMenu ? 'preview-menu-items-show' : ''}`}
                            ref={refPreviewMenu}>
                            <button
                                className={`preview-menu-item ${selectedPreviewMenu === "desktop" ? 'preview-menu-item-active' : ''}`}
                                onClick={handleSelectedDesktopPreview}>
                                <span className="icon">
                                    <DesktopWindowsIcon/>
                                </span>
                                <span className="text">
                                    Desktop
                                </span>
                            </button>
                            <button 
                                className={`preview-menu-item ${selectedPreviewMenu === "tablet" ? 'preview-menu-item-active' : ''}`}
                                onClick={handleSelectedTabletPreview}>
                                <span className="icon">
                                    <TabletAndroidIcon/>
                                </span>
                                <span className="text">
                                    Tablet
                                </span>
                            </button>
                            <button 
                                className={`preview-menu-item ${selectedPreviewMenu === "mobile" ? 'preview-menu-item-active' : ''}`}
                                onClick={handleSelectedMobilePreview}>
                                <span className="icon">
                                    <PhoneAndroidIcon/>
                                </span>
                                <span className="text">
                                    Mobile
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="cipboard-input">
                        <input
                            type="text"
                            ref={refClipboardInput}
                            value={projectURL ? remveHttpFromURL(projectURL) : projectURL}
                            onClick={selectClipboardInput}
                            onMouseOver={hoverClipboardInput}
                            readOnly />
                        <button
                            className={showCopyButton ? `show-copy-button` : ''}
                            onClick={copyClipboardInput}>
                                {copiedClipboard ? "Copied" : "Copy"}
                        </button>
                    </div>
                </div>
                <div className="header-action-panel">
                    <button
                        className="header-link"
                        onClick={handleBuildProject}>
                            Build Project
                    </button>
                    <button
                        className={`header-link ${buildStatus ? '' : 'disabled-header-link'}`}
                        title={buildStatus ? '' : 'App has not yet been published'}
                        onClick={handleVisitApp}
                        disabled={buildStatus ? false : true}>
                            Download
                    </button>
                </div>
                <div className={`preview-build-pop-over ${showBuildSetup ? "show-preview-build-pop-over" : ""}`}
                    ref={refBuildSetupMenu}>
                <ThemeProvider theme={theme}>
                    <div className="build-action-buttons">
                        <button
                            className="build-confirm-button"
                            onClick={handleConfirmBuildSetup}>
                                Confirm
                        </button>
                        <button
                            className="build-cancel-button"
                            onClick={handleCancelBuildSetup}>
                                Cancel
                        </button>
                    </div>
                    <div className="build-action-details">
                        <strong>Ready to build your project?</strong>
                        <p>Choose the type of web framework for your application.</p>
                    </div>
                    <div className="build-radio-buttons">
                        <RadioGroup
                            aria-label="page visibility"
                            value={buildType}
                            name="radio-buttons-group">
                                <FormControlLabel
                                    value="NATIVE"
                                    control={<Radio onClick={handleChangeToBuildWithNative} />}
                                    label={<Typography style={{textAlign: "left", margin: "24px 0 0 0"}} variant="p">
                                                <strong style={{margin: "0 0 8px 0"}}>Native</strong>
                                                <p style={{margin: 0, wordBreak: "break-word", width: "150px"}}>Build with Node.js (Apigee).</p>
                                            </Typography>} />
                                <FormControlLabel
                                    value="REACT"
                                    control={<Radio onClick={handleChangeToBuildWithReact} />}
                                    label={<Typography style={{textAlign: "left", margin: "24px 0 0 0"}} variant="p">
                                                <strong style={{margin: "0 0 8px 0"}}>React</strong>
                                                <p style={{margin: 0, wordBreak: "break-word", width: "150px"}}>Build with React framework.</p>
                                            </Typography>} />
                                <FormControlLabel
                                    value="ANGULAR"
                                    control={<Radio onClick={handleChangeToBuildWithAngular} />}
                                    label={<Typography style={{textAlign: "left", margin: "24px 0 0 0"}} variant="p">
                                                <strong style={{margin: "0 0 8px 0"}}>Angular</strong>
                                                <p style={{margin: 0, wordBreak: "break-word", width: "150px"}}>Build with Angular framework.</p>
                                            </Typography>} />
                        </RadioGroup>
                    </div>
                </ThemeProvider>
                </div>
            </div>
            <div className={`content-container ${selectedPreviewMenu === "tablet" ? 'content-container-tablet' : selectedPreviewMenu === "mobile" ? 'content-container-mobile' : 'content-container-desktop'}`}>
                <iframe src={projectURL} title="app preview" />
            </div>
            <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleCloseSnackBar}>
                <MuiAlert onClose={handleCloseSnackBar} severity={alertSeverity} sx={{ width: '100%' }}>
                    { alertMessage } 
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export const MyHome = (props) => {
    const { currentAppId } = props;
    const [projectURL, setProjectURL] = useState(null);

    useEffect(() => {
        getProjectDashboardById(currentAppId)
            .then(project => {
                setProjectURL(project ? project.appURL : false);
            })
            .catch(error => console.log(error));
    }, [ currentAppId ]);

    return (
        <div className="my-home-container">
            <div className="header-container">
                <div className="header-title">
                    <h1>My Home</h1>
                    <p>Your hub for posting, editing, and growing your app.</p>
                </div>
                <a className="header-link" href={projectURL} target="_blank" rel="noreferrer">Visit App</a>
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

    const pageActionStatus = {
        restore: {
            icon: <RestoreIcon/>,
            text: "Restoring...",
            bgColor: "#DBAF01"
        },
        trash: {
            icon: <DeleteIcon/>,
            text: "Trashing...",
            bgColor: "#E55054"
        },
        delete: {
            icon: <DeleteIcon/>,
            text: "Deleting...",
            bgColor: "#E55054"
        }
    };

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

        window.location.href = `/editor/${currentAppId}/page?action=create&copy=${currentPageId}`;
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

        disablePageRow("trash");
        updatePageStatusById(currentPageId, currentAppId, "trashed");

        delay(() => {
            enablePageRow();
        }, 2000);
    }

    const restoreCurrentPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        disablePageRow("restore");
        restorePageStatusById(currentPageId, currentAppId);

        delay(() => {
            enablePageRow();
        }, 2000);
    }

    const deleteCurrentPageOnClick = (e) => {
        const currentPageId = e.currentTarget.parentElement.id.split('_').slice(-1)[0];

        disablePageRow("delete");

        if (window.confirm("Delete this page permanently?")) {
            delay(() => {
                removePageById(currentPageId);
                enablePageRow();
            }, 2000);
        }
    }

    useOutsideClick(currentButtonRef, () => {
        currentButtonRef.current.classList.remove('more-vertical-menu-button');
        currentPageRef.current.classList.remove('show-list');
    });

    const enablePageRow = () => {
        let parentElement = currentButtonRef.current.parentElement.children[1];
        let textHolder = parentElement.children[1];

        setReloadPages(true);

        parentElement.style.display = "none";
        textHolder.innerHTML = "";

        currentPageRef.current.parentElement.classList.remove('unclickable-page-row');
        currentButtonRef.current.style.display = "block";
    }


    const disablePageRow = (action) => {
        let actionStatus = pageActionStatus[action];
        let parentElement = currentButtonRef.current.parentElement.children[1];
        let textHolder = parentElement.children[1];
        let iconHolder = parentElement.children[0];
        let icon = iconHolder.children[0];

        setReloadPages(false);

        icon.innerHTML = ReactDOMServer.renderToString(actionStatus.icon);
        parentElement.style.display = "flex";
        textHolder.innerHTML = actionStatus.text;
        iconHolder.style.backgroundColor = actionStatus.bgColor;

        currentPageRef.current.parentElement.classList.add('unclickable-page-row');
        currentButtonRef.current.style.display = "none";
    }

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
                            href={`/editor/${currentAppId}/page?action=create`}
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
                                <span className="time-created" title={convertTimestampToDateTime(page.updatedAt)}>
                                    <AccessTimeIcon/>
                                    {convertTimestampFromNow(page.updatedAt)}
                                </span>
                            </div>
                            <div className="action-page-status">
                                <span className="icon">
                                    <CheckOutlinedIcon/>
                                </span>
                                <span className="text">Page restored.</span>
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

    const [initialLoad, setInitialLoad] = useState(true);
    const [publishedTabActive, setPublishedTabActive] = useState(true);
    const [draftTabActive, setDraftTabActive] = useState(false);
    const [scheduledTabActive, setScheduledTabActive] = useState(false);
    const [trashedTabActive, setTrashedTabActive] = useState(false);
    const [pageSelected, setPageSelected] = useState("published_pages_tab");
    const [toggleSearchBar, setToggleSearchBar] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [showPopupCopy, setShowPopupCopy] = useState(false);
    const [pagesCount, setPagesCount] = useState(0);
    const [pagesList, setPagesList] = useState([]);
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
        let pages = pagesList;

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
                                            setReloadPages={setReloadPages}
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
                                                                href={`/editor/${currentAppId}/page?action=create`}
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
                                                                        href={`/editor/${currentAppId}/page?action=create`}
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
                                                                        href={`/editor/${currentAppId}/page?action=create`}
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

    const loadPagesList = () => {
        getPagesByProjectId(currentAppId)
            .then(project => {
                setPagesList(project ? project.pages.list : []);
                setPagesCount(project ? project.pages.count : null);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if (initialLoad) {
            setInitialLoad(false);
            setReloadPages(true);
        }

         if (reloadPages) {
            loadPagesList();
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
                            { pagesCount && pagesCount.published ? pagesCount.published : 0 }
                        </span>
                    </div>
                    <div className={`tab ${draftTabActive ? 'tab-active' : ''}`} onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="draft_pages_tab"></div>
                        <span className="tab-text">Drafts</span>
                        <span className="badge-pages-count">
                            { pagesCount && pagesCount.draft ? pagesCount.draft : 0 }
                        </span>
                    </div>
                    <div className={`tab ${scheduledTabActive ? 'tab-active' : ''}`}  onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="scheduled_pages_tab"></div>
                        <span className="tab-text">Scheduled</span>
                        <span className="badge-pages-count">
                            { pagesCount && pagesCount.scheduled ? pagesCount.scheduled : 0 }
                        </span>
                    </div>
                    <div className={`tab ${trashedTabActive ? 'tab-active' : ''}`}  onClick={handleTabOnClick}>
                        <div className="tab-clicker" id="trashed_pages_tab"></div>
                        <span className="tab-text">Trashed</span>
                        <span className="badge-pages-count">
                            { pagesCount && pagesCount.trashed ? pagesCount.trashed : 0 }
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