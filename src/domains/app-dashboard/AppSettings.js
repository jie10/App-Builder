import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    Snackbar,
    Alert
} from '@mui/material';

import "./AppSettings.css";

import { delay } from "../../utils/helpers/timing";
import { DEFAULT_GLOBAL_STYLE } from "../../utils/constants/dataMart";
import { getProjectById, updateProjectById } from "../../api/Projects";

const General = ({ appId }) => {
    const [saveSettings, setSaveSettings] = useState(false);
    const [appDetails, setAppDetails] = useState(null);
    const [defaultTheme, setDefaultTheme] = useState("scratch");
    const [defaultCategory, setDefaultCategory] = useState("Educational");
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [inputs, setInputs] = useState({});
    const [alertSeverity, setAlertSeverity] = useState("success");
    const [alertMessage, setAlertMessage] = useState("Settings saved successfully.");
    const [reloadContent, setReloadContent] = useState(true);
    const [defaultFontFamily, setDefaultFontFamily] = useState(null);
    const [defaultFontSize, setDefaultFontSize] = useState(null);
    const [defaultFontColor, setDefaultFontColor] = useState(null)

    const saveChanges = () => {
        setSaveSettings(true);

        inputs.defaultTheme = defaultTheme;

        delay(() => {
            updateProjectById(appId, inputs)
                .then(result => {
                    if (result) {
                        setAlertSeverity("success");
                        setAlertMessage("Settings saved successfully.");
                        setReloadContent(true);
                    } else {
                        setAlertSeverity("error");
                        setAlertMessage("Settings save failed.");
                    }
                })
                .catch(error => console.log(error));
            setSaveSettings(false);
            setOpenSnackBar(true);
        }, 2000);
    }

    const updateDefaultTheme = (e) => {
        setDefaultTheme(e.target.value);
        setDefaultFontFamily(DEFAULT_GLOBAL_STYLE[e.target.value].body.fontFamily);
        setDefaultFontSize(DEFAULT_GLOBAL_STYLE[e.target.value].body.fontSize);
        setDefaultFontColor(DEFAULT_GLOBAL_STYLE[e.target.value].body.color);
        setInputs(values => ({...values, [e.target.name]: e.target.value}));
    }

    const updateDefaultCategory = (e) => {
        setDefaultCategory(e.target.value);
        setInputs(values => ({...values, [e.target.name]: e.target.value}));
    }

    const handleFormChange = (e) =>{
        switch(e.target.name){
            case "fontFamily":
                setDefaultFontFamily(e.target.value);
                break;
            case "fontSize":
                setDefaultFontSize(e.target.value);
                break;
            case "color":
                setDefaultFontColor(e.target.value);
                break;
            default:
                break;
        }
        
        setInputs(values => ({...values, [e.target.name]: e.target.value}));
    } 

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    useEffect(() => {
        if (reloadContent) {
            getProjectById(appId)
            .then(data => {
                if (data) {
                    setAppDetails(data);
                    setDefaultTheme(data ? data.buildMode : "scratch");
                    setDefaultFontFamily(data.globalStyleSettings.body.fontFamily);
                    setDefaultFontSize(data.globalStyleSettings.body.fontSize);
                    setDefaultFontColor(data.globalStyleSettings.body.color);
                    setDefaultCategory(data ? data.category : "scratch");
                }
                setReloadContent(false);
            })
            .catch(error => console.log(error));
        }
    }, [appId, reloadContent]);
console.log(defaultFontFamily)
    return (
        <div className="general-settings-container">
            <header className="header-container">
                <div className="header-title">
                    <h1>General Settings</h1>
                    <p>Manage your site settings, including global styles, templates, and more.</p>
                </div>
            </header>
            <div className="section-container">
                <div className="section-header">
                    <div className="section-label">
                        <h2>Profile</h2>
                    </div> 
                    <div className="section-action">
                        <button
                            className={`save-settings-button ${ saveSettings ? "disabled-save-settings-button" : "" }`}
                            onClick={saveChanges}
                            disabled={ saveSettings ? true : false }>
                                { saveSettings ? "Saving..." : "Save settings" }
                        </button>
                    </div>
                </div>
                <div className="section-body">
                    <form>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="appName">Name</label>
                                <input 
                                    className="form-text-input"
                                    type="text"
                                    name="appName"
                                    id="appname"
                                    autoComplete="off"
                                    onChange={handleFormChange}
                                    defaultValue={appDetails ? appDetails.appName : ''} />
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="shortDesc">Description</label>
                                <input 
                                    className="form-text-input"
                                    type="text"
                                    name="shortDesc"
                                    id="shortDesc"
                                    autoComplete="off"
                                    onChange={handleFormChange}
                                    maxLength="150"
                                    defaultValue={appDetails ? appDetails.shortDesc : ''} />
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="category">Category</label>
                                <select 
                                    className="form-text-select"
                                    name="category"
                                    id="category"
                                    onChange={updateDefaultCategory}
                                    value={ defaultCategory }>
                                    <option value="Educational">Educational</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Productivity">Productivity</option>
                                    <option value="Business">Business</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="News">News</option>
                                    <option value="Communication">Communication</option>
                                    <option value="Blog">Blog</option>
                                    <option value="Community">Community</option>
                                </select>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="appURL">URL</label>
                                <input 
                                    className="form-text-input"
                                    type="text"
                                    name="appURL"
                                    id="appURL"
                                    autoComplete="off"
                                    onChange={handleFormChange}
                                    maxLength="150"
                                    defaultValue={appDetails ? appDetails.appURL : ''} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="section-container">
                <div className="section-header">
                    <div className="section-label">
                        <h2>Theme</h2>
                    </div> 
                    <div className="section-action">
                        <button
                            className={`save-settings-button ${ saveSettings ? "disabled-save-settings-button" : "" }`}
                            onClick={saveChanges}
                            disabled={ saveSettings ? true : false }>
                                { saveSettings ? "Saving..." : "Save settings" }
                        </button>
                    </div>
                </div>
                <div className="section-body">
                    <form>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="buildMode">Default Theme</label>
                                <select 
                                    className="form-text-select"
                                    name="buildMode"
                                    id="buildMode"
                                    onChange={updateDefaultTheme}
                                    value={ defaultTheme }>
                                    <option value="scratch">None</option>
                                    <option value="default_template">OMNIX</option>
                                    <option value="enterprise_template">Enterprise</option>
                                </select>
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="fontFamily">Font Family</label>
                                <input 
                                    className="form-text-input"
                                    type="text"
                                    name="fontFamily"
                                    id="fontFamily"
                                    autoComplete="off"
                                    onChange={handleFormChange}
                                    maxLength="50"
                                    value={defaultFontFamily} />
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="fontSize">Font Size</label>
                                <input 
                                    className="form-text-input"
                                    type="text"
                                    name="fontSize"
                                    id="fontSize"
                                    autoComplete="off"
                                    onChange={handleFormChange}
                                    maxLength="30"
                                    value={defaultFontSize} />
                            </div>
                        </div>
                        <div className="section-row">
                            <div className="form-fieldset">
                                <label htmlFor="color">Font Color</label>
                                <input 
                                    className="form-text-input"
                                    type="text"
                                    name="color"
                                    id="color"
                                    autoComplete="off"
                                    onChange={handleFormChange}
                                    maxLength="30"
                                    value={defaultFontColor} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleCloseSnackBar} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleCloseSnackBar} severity={alertSeverity} sx={{ width: '100%' }}>
                    { alertMessage } 
                </Alert>
            </Snackbar>
        </div>
    );
}

export const AppSettings = (props) => {
    const { subPageName } = props;
    const { id } = useParams();

    const loadContent = () => {
        switch(subPageName) {
            case "general":
                return <General appId={id} />
            default:
            return null;
        }
    }

    return (
        <div className="app-settings-container">
            { loadContent() }
        </div>
    )
}