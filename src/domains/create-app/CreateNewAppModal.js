import React, { useState, useEffect } from 'react'

import { Search as SearchIcon } from '@mui/icons-material';

import "./CreateNewAppModal.css"

import { appCategories } from "../../constants/sample-data";

const CreateNewAppModal = (props) => {
    const { hiddenCreateNewAppModal, setHiddenCreateNewAppModal } = props;

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
        setHiddenCreateNewAppModal(true);
        setCategory(null);
        setInputFocus(false);
        setDisableButton(true);
        
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

    useEffect(() => {
        let status = category && checkCategory(category) === true ? false : true;
        setDisableButton(status);
    }, [category]);

    return (
        <div className="create-new-app-modal-container" style={{ display: hiddenCreateNewAppModal ? 'none' : 'block'  }}>
            <div className="create-new-app-modal-box">
                <div className="modal-form">
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
                        <button className="next-button" disabled={ disableButton }>Next</button>
                    </div>
                    { showSuggestionList() }
                </div>
                <button className="back-button" onClick={ handleBackButtonOnClick }>Back</button>
            </div>
        </div>
    );
}

export default CreateNewAppModal;