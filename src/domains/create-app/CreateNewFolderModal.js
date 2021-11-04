import React, { useState } from 'react'
import { Tooltip, Zoom } from '@mui/material';

import {
    CloseOutlined as CloseOutlinedIcon,
    Error as ErrorIcon
} from '@mui/icons-material';

import "./CreateNewFolderModal.css"


const CreateNewFolderModal = (props) => {
    const { hiddenCreateNewFolderModal, setHiddenCreateNewFolderModal } = props;

    const [userInput, setUserInput] = useState(null);

    const handleCloseModal = (e) => {
        e.preventDefault();
        setUserInput(null);
        setHiddenCreateNewFolderModal(true);
    }

    const handleUserInput = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }

    return(
        <div className={`create-new-folder-modal-container ${ hiddenCreateNewFolderModal === true ? 'hidden' : ''}`}>
            <div className="create-new-folder-modal-box">
                <div className="modal-box modal-box-header">
                    <span className="header-title">Create New Folder</span>
                    <button
                        className="header-close-button"
                        onClick={handleCloseModal}>
                            <CloseOutlinedIcon />
                    </button>
                </div>
                <div className="modal-box modal-box-body">
                    <div className="body-form-label-container">
                        <label className="form-label">Name your folder, then move any app to this folder via Actions.</label>
                    </div>
                    <div className="body-form-input-container">
                        <input
                            className={`form-input ${ userInput === null ? '' : userInput && userInput.length > 0 ? '' : 'form-error' }`}
                            type="text"
                            maxLength="300"
                            placeholder="e.g. In Progress"
                            onChange={handleUserInput}
                            value={ userInput ? userInput : '' } />
                        <span
                            className={`form-error-icon ${ userInput === null ? 'hidden' : userInput && userInput.length > 0 ? 'hidden' : ''}`}>
                            <Tooltip
                                TransitionComponent={Zoom}
                                sx={{
                                    position: "absolute",
                                    top: "14px",
                                    right: "8px"
                                }}
                                title={<span
                                            className="form-tooltip" 
                                            style={{ display: "block", width: "150px", fontSize: "14px", padding: "8px", wordBreak: "break-word" }}>
                                                Folder names should be between 1 and 256 characters long.
                                        </span>}
                                placement="top"
                                describeChild
                                arrow>
                                <ErrorIcon />
                            </Tooltip>
                        </span>
                    </div>
                </div>
                <div className="modal-box modal-box-footer">
                    <div className="footer-buttons-container">
                        <button className="footer-button" onClick={handleCloseModal}>Cancel</button>
                        <button
                            className={`footer-button ${ userInput && userInput.length > 0 ? 'footer-main-button' : 'disabled-button' }`}
                            disabled={ userInput && userInput.length > 0  ? false : true }>
                                Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateNewFolderModal;