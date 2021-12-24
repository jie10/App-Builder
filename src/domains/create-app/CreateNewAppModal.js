import React, { useState, useEffect, useReducer } from 'react';

import { Search as SearchIcon } from '@mui/icons-material';

import "./CreateNewAppModal.css";
import "./CreateNewAppModal.mobile.css";

import { appCategories, appTemplates, DEFAULT_PREVIEW_IMAGE } from "../../utils/constants/dataMart";
import { correctURL } from "../../utils/helpers/validate";
import { useQuery } from "../../utils/helpers/hooks";
import { addNewProject } from "../../api/Projects";
import { addNewPage } from "../../api/Pages";
import { addNewBlock } from "../../api/Blocks";

const MAX_STEPS = 3;

const ProgressStepper = (props) => {
    const { stepper } = props;
    let steps = [];

    for (let i=1; i <= MAX_STEPS; i++) {
        if (i < stepper.count) {
            steps.push(<div className="step done" key={i}>{i}</div>)
        } else if (i === stepper.count) {
            steps.push(<div className="step current" key={i}>{i}</div>)
        } else {
            steps.push(<div className="step" key={i}>{i}</div>)
        }
    }

    return (
        <div className="progress-stepper">
            <div className="steps">
                { steps }
            </div>
        </div>
    );
}

const ModalFormPartOne = (props) => {
    const { setHiddenCreateNewAppModal, setAppInfo, stepper, dispatchStepper } = props;

    const [category, setCategory] = useState(null);
    const [inputFocus, setInputFocus] = useState(false);
    const [visibleSuggestionList, setVisibleSuggestionList] = useState(false);
    const [disableButton, setDisableButton] = useState(true);

    const checkCategory = (currentCategory) => appCategories.findIndex(category => category.toLowerCase() === currentCategory.toLowerCase()) > -1;

    const showSuggestionList = () => {
        let filteredCategories = appCategories.filter(appCategory => new RegExp(`${category}`, 'gi').test(appCategory) === true);
        let suggestionList = null;

        if (category && filteredCategories.length > 0) {
            suggestionList = filteredCategories.sort()
                .map((category, i) => {
                    return <span className="item"
                            key={i}
                            onClick={ handleSuggestionOnClick }>
                                {category}
                        </span>;
                });
        } else if (filteredCategories.length < 1) {
            suggestionList = null;
        } else {
            suggestionList = appCategories.sort()
                .map((category, i) => {
                    return <span className="item"
                            key={i}
                            onClick={ handleSuggestionOnClick }>
                                {category}
                        </span>;
                });
        }

        return <div className="type-suggestion-list" style={{ visibility: visibleSuggestionList && suggestionList ? 'visible' : "hidden" }}>
                    <h3>Suggestions</h3>
                    <div className="list">
                        { suggestionList }
                    </div>
                </div>;
    }

    const handleInputOnClick = () => {
        setInputFocus(true);
        setVisibleSuggestionList(true);
    }

    const handleInputOnChange = (e) => {
        setCategory(e.target.value);
        setInputFocus(true);
        setVisibleSuggestionList(true);
    }

    const handleInputOnBlur = () => setInputFocus(category ? true : false);

    const handleSuggestionOnClick = (e) => {
        setCategory(e.target.innerHTML);
        setInputFocus(true);
        setVisibleSuggestionList(false);
    }

    const moveToSecondStep = () => {
        if (stepper.count >= 1 && stepper.count < MAX_STEPS) {
            dispatchStepper({type: 'increment'});
            setAppInfo({category})
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setCategory(null);
            setAppInfo(null);
            setInputFocus(false);
            setDisableButton(true);
        }
    }

    useEffect(() => {
        let status = category && checkCategory(category) === true ? false : true;
        setDisableButton(status);
    }, [category]);

    return (
        <div className={`modal-form ${stepper.count === 1 ? "modal-form-part-one" : ""}`}>
            <h1 className="header-title">What kind of project?</h1>
            <div className="search-app-type-container">
                <div className={`search-input-container ${inputFocus ? 'search-input-focus' : ''}`}>
                    <div className="search-input-icon">
                        <SearchIcon />
                    </div>
                    <input className="search-input-form"
                        type="text"
                        placeholder="Search for a category"
                        value={ category ? category : '' }
                        maxLength={20}
                        onClick={ handleInputOnClick }
                        onChange={ handleInputOnChange }
                        onBlur={ handleInputOnBlur } />
                </div>
                <button className="next-button" disabled={ disableButton } onClick={moveToSecondStep}>Next</button>
            </div>
            { showSuggestionList() }
        </div>
    );
}

const ModalFormPartTwo = (props) => {
    const { setHiddenCreateNewAppModal, stepper, dispatchStepper, appInfo, setAppInfo } = props;
    const [templatePreview, setTemplatePreview] = useState("default_template");

    const moveToThirdStep = (chosenTemplate) => {
        if (stepper.count >= 2 && stepper.count < MAX_STEPS) {
            let buildMode = { buildMode: chosenTemplate };
            dispatchStepper({type: 'increment'});
            setAppInfo({...appInfo, ...buildMode});
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setAppInfo(null);
        }
    }
    const handleChooseWithTemplate = () => moveToThirdStep(templatePreview);

    const handleChooseFromScratch = () => moveToThirdStep("scratch");

    const handleChooseTemplate = (e) => setTemplatePreview(e.target.value);

    return (
        <div className={`modal-form ${stepper.count === 2 ? "modal-form-part-two" : ""}`}>
            <h2>Choose how you want to create your application:</h2>
            <div className="choose-options-container">
                <div className="options option-one">
                    <h3>Start with a Template</h3>
                    <p>Create an application with a ready-made template to start with.</p>
                    <div className="preview-template-view">
                        <img src={DEFAULT_PREVIEW_IMAGE[templatePreview]} alt="template preview" />
                    </div>
                    <div className="choose-template-control-panel">
                        <select
                            className="choose-template-select"
                            defaultValue={templatePreview}
                            onChange={handleChooseTemplate}>
                            { appTemplates && appTemplates.map(template => <option value={template.value}>{template.name}</option>) }
                        </select>
                        <button className="button-option-one" onClick={handleChooseWithTemplate}>Start Now</button>
                    </div>
                </div>
                <div className="options-divider">
                    <span className="text">OR</span>
                </div>
                <div className="options option-two">
                    <h3>Start from Scratch</h3>
                    <p>Build from an empty canvas, let your creativity flow.</p>
                    <button className="button-option-two" onClick={handleChooseFromScratch}>Start Now</button>
                </div>
            </div>
        </div>
    );
}

const ModalFormPartThree = (props) => {
    const { setHiddenCreateNewAppModal, stepper, dispatchStepper, appInfo, setAppInfo, setCreateSuccess } = props;

    const [appName, setAppName] = useState(null);
    const [shortDesc, setShortDesc] = useState(null);
    const [appURL, setAppURL] = useState(null);
    const [inputAppNameFocus, setInputAppNameFocus] = useState(false);
    const [inputShortDescFocus, setInputShortDescFocus] = useState(false);
    const [inputAppURLFocus, setInputAppURLFocus] = useState(false);
    const [inputAppNameLength, setInputAppNameLength] = useState(0);
    const [inputShortDescLength, setInputShortDescLength] = useState(0);
    const [inputAppURLLength, setInputAppURLLength] = useState(0);
    const [disableButton, setDisableButton] = useState(true);

    const handleInputOnClick = (e) => {
        switch (e.target.name) {
            case "app_name":
                setInputAppNameFocus(true);
            break;
            case "short_description":
                setInputShortDescFocus(true);
            break;
            case "app_url":
                setInputAppURLFocus(true);
            break;
            default:
            break;
        }
    }

    const handleInputOnChange = (e) => {
        switch (e.target.name) {
            case "app_name":
                setInputAppNameFocus(true);
                setInputAppNameLength(e.target.value.length);
                setAppName(e.target.value);
            break;
            case "short_description":
                setInputShortDescFocus(true);
                setInputShortDescLength(e.target.value.length);
                setShortDesc(e.target.value);
            break;
            case "app_url":
                setInputAppURLFocus(true);
                setInputAppURLLength(e.target.value.length);
                setAppURL(e.target.value);
            break;
            default:
            break;
        }
    }

    const handleInputOnBlur = (e) => {
        switch (e.target.name) {
            case "app_name":
                setInputAppNameFocus(false);
            break;
            case "short_description":
                setInputShortDescFocus(false);
            break;
            case "app_url":
                setInputAppURLFocus(false);
            break;
            default:
            break;
        }
    }

    const moveToSubmitForm = () => {
        if (stepper.count === MAX_STEPS) {
            dispatchStepper({type: 'increment'});
            setInputAppNameFocus(false);
            setInputShortDescFocus(false);
            setInputAppURLFocus(false);
            setInputAppNameLength(0);
            setInputShortDescLength(0);
            setInputAppURLLength(0);
            setDisableButton(true);

            addNewProject({...appInfo, ...{appName, shortDesc, appURL}})
                .then(newApp => {
                    addNewPage(newApp.appId, null)
                        .then(newPage => {
                            addNewBlock(newPage.defaultPageId, {
                                "name": "header",
                                "text": "Index Page",
                                "icon": "/icons/svg/table_chart_outlined_black_36dp.svg",
                                "type": "HEADER",
                                "group": "Default",
                                "template": "Default",
                                "parameters": {
                                    "backgroundColor": "#fbe700",
                                    "height": "160px",
                                    "title": "Index Page",
                                    "image": "https://cdn.media.amplience.net/i/cebupacificair/BKK-Bangkok-Thailand-SightSeeing2-6000x4000?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}?&amp;fmt=jpg&amp;fmt.options=interlaced"
                                },
                                "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "preview_image": "/images/preview/header-preview.png"
                            }, 1)
                                .then(newBlock => {
                                    if (newBlock) {
                                        setAppInfo({...appInfo, ...{ newAppId: newApp.appId, defaultPageId: newPage.defaultPageId }});
                                    }
                                }).catch(error => console.log(error));
                        }).catch(error => console.log(error));
                }).catch(error => console.log(error));

            setCreateSuccess(true);
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setInputAppNameFocus(false);
            setInputShortDescFocus(false);
            setInputAppURLFocus(false);
            setInputAppNameLength(0);
            setInputShortDescLength(0);
            setInputAppURLLength(0);
            setDisableButton(true);
            setAppInfo(null);
        }
    }

    useEffect(() => {
        const checkValidation = () => {
            const MAX_APP_NAME_LENGTH = 5;
            const MAX_SHORT_DESC_LENGTH = 5;
    
            let validAppName = inputAppNameLength >= MAX_APP_NAME_LENGTH;
            let validShortDesc = inputShortDescLength >= MAX_SHORT_DESC_LENGTH;
            let validAppURL = correctURL(appURL);
    
            return validAppName && validShortDesc && validAppURL ? true : false;
        }

        if (appName && shortDesc && checkValidation()) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [appName, appURL, inputAppNameLength, inputShortDescLength, shortDesc]);

    return (
        <div className={`modal-form ${stepper.count === 3 ? "modal-form-part-three" : ""}`}>
            <h2>Describe your new project.</h2>
            <div className="input-forms-container">
                <div className={`input-form ${ inputAppNameFocus ? 'input-form-focus' : '' }`}>
                    <input className="app-name-input-form"
                            name="app_name"
                            type="text"
                            placeholder="Application Name"
                            maxLength="50"
                            autoComplete="off"
                            value={appName ? appName : ''}
                            onClick={handleInputOnClick}
                            onChange={handleInputOnChange}
                            onBlur={handleInputOnBlur} />
                    <span className="input-length">{inputAppNameLength} / 50</span>
                </div>
                <div className={`input-form ${ inputShortDescFocus ? 'input-form-focus' : '' }`}>
                    <input className="short-description-input-form"
                            name="short_description"
                            type="text"
                            placeholder="Short Description"
                            maxLength="150"
                            autoComplete="off"
                            value={shortDesc ? shortDesc : ''}
                            onClick={handleInputOnClick}
                            onChange={handleInputOnChange}
                            onBlur={handleInputOnBlur} />
                    <span className="input-length">{inputShortDescLength} / 150</span>
                </div>
                <div className={`input-form ${ inputAppURLFocus ? 'input-form-focus' : '' }`}>
                    <input className="app-url-input-form"
                            name="app_url"
                            type="text"
                            placeholder="URL"
                            maxLength="150"
                            autoComplete="off"
                            value={appURL ? appURL : ''}
                            onClick={handleInputOnClick}
                            onChange={handleInputOnChange}
                            onBlur={handleInputOnBlur} />
                    <span className="input-length">{inputAppURLLength} / 150</span>
                </div>
            </div>
            <button className="submit-app-button"
                    disabled={ disableButton }
                    onClick={moveToSubmitForm}>
                Submit
            </button>
        </div>
    );
}

const ModalFormSuccess = (props) => {
    const { stepper, appInfo } = props;

    return (
        <div className="modal-form modal-form-success" style={{ display: stepper.count > 3 ? 'block' : 'none' }}>
            <h2>Project created successfully!</h2>
            <div className="form-buttons">
                <a href={`/editor/${appInfo.newAppId}/page/${appInfo.defaultPageId}`} target="_self">Edit New App</a>
                <a href={`/dashboard/${appInfo.newAppId}/home`} target="_self">Go to Dashboard</a>
            </div>
        </div>
    );
}

const CreateNewAppModal = (props) => {
    const { hiddenCreateNewAppModal, setHiddenCreateNewAppModal } = props;
    let query = useQuery();

    const initialStepper = { count: 1 };
    const stepperReducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            case 'reset':
                return initialStepper;
            default:
            throw new Error();
        }
    }
    const [stepper, dispatchStepper] = useReducer(stepperReducer, initialStepper);

    const [appInfo, setAppInfo] = useState(null);
    const [createSuccess, setCreateSuccess] = useState(false);

    const handleBackButtonOnClick = (e) => {
        let action = query.get("action");

        e.preventDefault();

        if ((action && stepper.count <= 1) || (createSuccess && stepper.count >= MAX_STEPS)) {
            window.location.href = "/account/apps";
        } else if (stepper.count > 1 && stepper.count <= MAX_STEPS) {
            dispatchStepper({type: 'decrement'});
        } else {
            setAppInfo(null);
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            
        }
    }

    return (
        <div className="create-new-app-modal-container" style={{ display: hiddenCreateNewAppModal ? 'none' : 'block'  }}>
            <div className="create-new-app-modal-box">
                <ProgressStepper stepper={stepper} />
                <ModalFormPartOne setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} setAppInfo={setAppInfo} />
                <ModalFormPartTwo setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} appInfo={appInfo} setAppInfo={setAppInfo} />
                <ModalFormPartThree setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} appInfo={appInfo} setAppInfo={setAppInfo} setCreateSuccess={setCreateSuccess} />
                { appInfo ? <ModalFormSuccess stepper={stepper} dispatchStepper={dispatchStepper} appInfo={appInfo} /> : '' } 
                <button className="back-button" onClick={ handleBackButtonOnClick }>Back</button>
            </div>
        </div>
    );
}

export default CreateNewAppModal;