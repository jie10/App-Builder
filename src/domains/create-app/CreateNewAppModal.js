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
            steps.push(<div className="step done">{i}</div>)
        } else if (i === stepper.count) {
            steps.push(<div className="step current">{i}</div>)
        } else {
            steps.push(<div className="step">{i}</div>)
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

const CreateNewAppModal = (props) => {
    const { hiddenCreateNewAppModal, setHiddenCreateNewAppModal } = props;

    function stepperReducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            case 'reset':
                return {count: 1};
            default:
            throw new Error();
        }
    }

    const [stepper, dispatchStepper] = useReducer(stepperReducer, { count: 1 });
    const [inputFocus, setInputFocus] = useState(false);
    const [visibleSuggestionList, setVisibleSuggestionList] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [category, setCategory] = useState(null);

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

    const handleBackButtonOnClick = () => {
        if (stepper.count > 1 && stepper.count <= MAX_STEPS) {
            dispatchStepper({type: 'decrement'});
        } else {
            dispatchStepper({type: 'reset'});
            setHiddenCreateNewAppModal(true);
            setCategory(null);
            setInputFocus(false);
            setDisableButton(true);
        }
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
        <div className="create-new-app-modal-container" style={{ display: hiddenCreateNewAppModal ? 'none' : 'block'  }}>
            <div className="create-new-app-modal-box">
                <ProgressStepper stepper={stepper} />
                <div className="modal-form modal-form-part-one">
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
                <button className="back-button" onClick={ handleBackButtonOnClick }>Back</button>
            </div>
        </div>
    );
}

export default CreateNewAppModal;