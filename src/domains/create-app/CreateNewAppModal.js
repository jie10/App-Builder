import React, { useState, useEffect, useReducer } from 'react'

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
    const { setHiddenCreateNewAppModal, category, setCategory, stepper, dispatchStepper } = props;

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
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setCategory(null);
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
    const { setHiddenCreateNewAppModal, stepper, dispatchStepper, setBuildMode } = props;

    const handleOptionOneOnClick = () => {
        if (stepper.count >= 2 && stepper.count < MAX_STEPS) {
            dispatchStepper({type: 'increment'});
            setBuildMode('template');
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setBuildMode(null);
        }
    }

    const handleOptionTwoOnClick = () => {
        if (stepper.count >= 2 && stepper.count < MAX_STEPS) {
            dispatchStepper({type: 'increment'});
            setBuildMode('scratch');
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setBuildMode(null);
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
    const { setHiddenCreateNewAppModal, stepper, dispatchStepper, setAppInfo } = props;

    return (
        <div className="modal-form modal-form-part-three" style={{ display: stepper.count === 3 ? 'block' : 'none' }}>
            <h2>Describe your new application:</h2>
            <div className="input-forms-container">
                <div className="input-form">
                    <input className="app-name-input-form" type="text" placeholder="Application Name" maxLength="50" />
                </div>
                <div className="input-form">
                    <input className="url-link-input-form" type="text" placeholder="URL link" maxLength="50" />
                </div>
                <div className="input-form">
                    <input className="short-description-input-form" type="text" placeholder="Short Description" maxLength="150" />
                </div>
            </div>
            <button className="submit-app-button">Submit</button>
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

    const [category, setCategory] = useState(null);
    const [buildMode, setBuildMode] = useState(null);
    const [appInfo, setAppInfo] = useState(null);

    const handleBackButtonOnClick = () => {
        if (stepper.count > 1 && stepper.count <= MAX_STEPS) {
            dispatchStepper({type: 'decrement'});
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setCategory(null);
            setBuildMode(null);
        }
    }

    return (
        <div className="create-new-app-modal-container" style={{ display: hiddenCreateNewAppModal ? 'none' : 'block'  }}>
            <div className="create-new-app-modal-box">
                <ProgressStepper stepper={stepper} />
                <ModalFormPartOne setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} category={category} setCategory={setCategory} />
                <ModalFormPartTwo setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} setBuildMode={setBuildMode} />
                <ModalFormPartThree setHiddenCreateNewAppModal={setHiddenCreateNewAppModal} stepper={stepper} dispatchStepper={dispatchStepper} setAppInfo={setAppInfo} />
                <button className="back-button" onClick={ handleBackButtonOnClick }>Back</button>
            </div>
        </div>
    );
}

export default CreateNewAppModal;