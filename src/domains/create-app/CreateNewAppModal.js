import React, { useState, useEffect, useReducer } from 'react';

import { Search as SearchIcon } from '@mui/icons-material';

import "./CreateNewAppModal.css"

import { appCategories } from "../../constants/sample-data";

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

    const handleNextButton = () => {
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
        <div className="modal-form modal-form-part-one" style={{ display: stepper.count === 1 ? 'block' : 'none' }}>
            <h1 className="header-title">What kind of application are you creating?</h1>
            <div className="search-app-type-container">
                <div className={`search-input-container ${inputFocus ? 'search-input-focus' : ''}`}>
                    <div className="search-input-icon">
                        <SearchIcon />
                    </div>
                    <input className="search-input-form"
                        type="text"
                        placeholder="Search for your applicaton type"
                        value={ category ? category : '' }
                        onClick={ handleInputOnClick }
                        onChange={ handleInputOnChange }
                        onBlur={ handleInputOnBlur } />
                </div>
                <button className="next-button" disabled={ disableButton } onClick={handleNextButton}>Next</button>
            </div>
            { showSuggestionList() }
        </div>
    );
}

const ModalFormPartTwo = (props) => {
    const { setHiddenCreateNewAppModal, stepper, dispatchStepper, appInfo, setAppInfo } = props;

    const handleOptionOneOnClick = (e) => {
        e.preventDefault();

        if (stepper.count >= 2 && stepper.count < MAX_STEPS) {
            let buildMode = { buildMode: 'template' };
            dispatchStepper({type: 'increment'});
            setAppInfo({...appInfo, ...buildMode});
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setAppInfo(null);
        }
    }

    const handleOptionTwoOnClick = (e) => {
        e.preventDefault();

        if (stepper.count >= 2 && stepper.count < MAX_STEPS) {
            let buildMode = { buildMode: 'scratch' };
            dispatchStepper({type: 'increment'});
            setAppInfo({...appInfo, ...buildMode});
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setAppInfo(null);
        }
    }

    return (
        <div className="modal-form modal-form-part-two" style={{ display: stepper.count === 2 ? 'block' : 'none' }}>
            <h2>Choose how you want to create your application:</h2>
            <div className="choose-options-container">
                <div className="options option-one">
                    <h3>Start with a Template</h3>
                    <p>Create an application with a ready-made template to start with.</p>
                    <button className="button-option-one" onClick={handleOptionOneOnClick}>Start Now</button>
                </div>
                <div className="options-divider">
                    <span className="text">OR</span>
                </div>
                <div className="options option-two">
                    <h3>Start from Scratch</h3>
                    <p>Build from an empty canvas, let your creativity flow.</p>
                    <button className="button-option-two" onClick={handleOptionTwoOnClick}>Start Now</button>
                </div>
            </div>
        </div>
    );
}

const ModalFormPartThree = (props) => {
    const { setHiddenCreateNewAppModal, stepper, dispatchStepper, appInfo, setAppInfo, setCreateSuccess } = props;

    const [appName, setAppName] = useState(null);
    const [shortDesc, setShortDec] = useState(null);
    const [inputAppNameFocus, setInputAppNameFocus] = useState(false);
    const [inputShortDescFocus, setInputShortDescFocus] = useState(false);
    const [inputAppNameLength, setInputAppNameLength] = useState(0);
    const [inputShortDescLength, setInputShortDescLength] = useState(0);
    const [disableButton, setDisableButton] = useState(true);

    const handleInputOnClick = (e) => {
        switch (e.target.name) {
            case "app_name":
                setInputAppNameFocus(true);
            break;
            case "short_description":
                setInputShortDescFocus(true);
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
                setShortDec(e.target.value);
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
            default:
            break;
        }
    }

    const handleSubmitOnClick = () => {
        if (stepper.count === MAX_STEPS) {
            dispatchStepper({type: 'increment'});
            setInputAppNameFocus(false);
            setInputShortDescFocus(false);
            setInputAppNameLength(0);
            setInputShortDescLength(0);
            setDisableButton(true);
            setAppInfo({...appInfo, ...{appName, shortDesc}});
            setCreateSuccess(true);
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setInputAppNameFocus(false);
            setInputShortDescFocus(false);
            setInputAppNameLength(0);
            setInputShortDescLength(0);
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
    
            return validAppName && validShortDesc ? true : false;
        }

        if (appName && shortDesc && checkValidation()) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [appName, inputAppNameLength, inputShortDescLength, shortDesc]);

    return (
        <div className="modal-form modal-form-part-three" style={{ display: stepper.count === 3 ? 'block' : 'none' }}>
            <h2>Describe your new application:</h2>
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
            </div>
            <button className="submit-app-button"
                    disabled={ disableButton }
                    onClick={handleSubmitOnClick}>
                Submit
            </button>
        </div>
    );
}

const ModalFormSuccess = (props) => {
    const { stepper} = props;

    return (
        <div className="modal-form modal-form-success" style={{ display: stepper.count > 3 ? 'block' : 'none' }}>
            <h2>New App has been created successfully!</h2>
            <div className="form-buttons">
                <a href="/" target="_self">Edit New App</a>
                <a href="/" target="_self">Go to Dashboard</a>
            </div>
        </div>
    );
}

const CreateNewAppModal = (props) => {
    const { hiddenCreateNewAppModal, setHiddenCreateNewAppModal } = props;

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

    const handleBackButtonOnClick = () => {
        if (stepper.count > 1 && stepper.count <= MAX_STEPS) {
            dispatchStepper({type: 'decrement'});
        } else {
            if (createSuccess) window.location.href = "/account/apps";

            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setAppInfo(null);
        }
    }

    return (
        <div className="create-new-app-modal-container" style={{ display: hiddenCreateNewAppModal ? 'none' : 'block'  }}>
            <div className="create-new-app-modal-box">
                <ProgressStepper stepper={stepper} />
                <ModalFormPartOne setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} setAppInfo={setAppInfo} />
                <ModalFormPartTwo setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} appInfo={appInfo} setAppInfo={setAppInfo} />
                <ModalFormPartThree setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} appInfo={appInfo} setAppInfo={setAppInfo} setCreateSuccess={setCreateSuccess} />
                <ModalFormSuccess setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} />
                <button className="back-button" onClick={ handleBackButtonOnClick }>Back</button>
            </div>
        </div>
    );
}

export default CreateNewAppModal;