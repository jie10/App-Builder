import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { connect } from 'react-redux'
import { Modal } from '@mui/material'

import './index.css';

import { ReactComponent as GridViewImage } from "../../../assets/svgs/grid_view_black_36dp.svg"

import {
    sendBlocks
} from '../../../stores/actions'

function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 480,
        backgroundColor: '#ffffff',
        padding: '36px 24px'
    },
}));

const FormBlockModal = (props) => {
    const { openFormBlockModal, setOpenFormBlockModal, sendBlocks } = props;
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const handleClose = () => {
        setOpenFormBlockModal(false);
    };

    const handleFormBlockType = (formBlockType) => {
        switch(formBlockType) {
            case "feedback_form":
                let feedback_block = {
                    type: "FEEDBACK_FORM",
                    status: "added",
                    "parameters": {
                        "action": "#",
                        "method": "",
                        "form_id": "feedback_form",
                        "background_color": "#FFFFFF",
                        "form_fields_padding": "2rem",
                        "label_font_size": "1rem",
                        "button_width": "auto",
                        "button_background_color": "#212a89",
                        "button_text_color": "#ffffff",
                        "button_border_radius": "0.25rem",
                        "button_border_color": "#212a89",
                        "input_field_max_length": 150,
                        "input_field_background_color": "#f2f3f5",
                        "input_field_border": "1px solid #f2f3f5",
                        "input_field_text_color": "#212529",
                        "textarea_field_background_color": "#f2f3f5",
                        "textarea_field_text_color": "#212529",
                        "textarea_field_border": "1px solid #f2f3f5",
                        "textarea_field_max_length": 300,
                        "textarea_field_resize": "vertical"
                    }
                };
                console.log(feedback_block)
                sendBlocks(feedback_block);

                break;
            case "login_pincode_form":
                let login_block = {
                    type: "PINCODE_INPUT",
                    status: "added",
                    "parameters": {
                        "action": "#",
                        "method": "",
                        "form_id": "login_pin_code_form",
                        "label_text": "PIN Code",
                        "input_placeholder": "Enter your PIN Code",
                        "input_max_length": 6,
                        "background_color": "#FFFFFF",
                        "form_fields_padding": "2rem",
                        "label_font_size": "1rem",
                        "button_border_radius": "24px"
                    }
                };

                sendBlocks(login_block);

                break;
            case "signup_form":
                let signup_block = {
                    type: "SIGNUP_FORM",
                    status: "added",
                    "parameters": {
                        "action": "#",
                        "method": "",
                        "form_id": "sign_up_form",
                        "background_color": "#FFFFFF",
                        "form_fields_width": "80%",
                        "label_font_size": "1rem",
                        "button_background_color": "rgb(13, 110, 253)",
                        "button_text_color": "#ffffff",
                        "button_border_radius": "24px"
                    }
                };

                sendBlocks(signup_block);

                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={openFormBlockModal}
                onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <div className='form-options-header'>
                        <h3>Form Blocks</h3>
                        <p>Please select which type of form you want to add to the canvas</p>
                    </div>
                    <div className='form-options-list'>
                    <button type='button' className='form-options' onClick={() => {
                            handleFormBlockType("feedback_form");
                            handleClose();
                        }}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Feedback</span>
                        </button>
                        <button type='button' className='form-options' onClick={() => {
                            handleFormBlockType("login_pincode_form");
                            handleClose();
                        }}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Login PIN</span>
                        </button>
                        <button type='button' className='form-options' onClick={() => {
                            handleFormBlockType("signup_form");
                            handleClose();
                        }}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Sign Up</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        blocks: state.blocks
    }
}

export default connect(mapStateToProps, {
    sendBlocks
})(FormBlockModal)