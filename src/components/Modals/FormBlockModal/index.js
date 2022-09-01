import React, { useState, useEffect } from 'react'
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
        width: 450,
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
            case "login_form":                         
                break;
            case "login_pincode_form":
                break;
            case "forgot_pincode_form":
                break;
            case "signup_form":
                let signup_block = {
                    type: "Signup_Form",
                    status: "added",
                    parameters: {
                        "placeholder": "Enter your CEB Email",
                        "placeholder2": "92xx xxx xxx",
                        "label1": "Email",
                        "label2": "Mobile Number",
                        "label3": "Target Location",
                        "label4": "No Landmark",
                        "text1": "Your preferred pickup or drop off used in carpool matching",
                        "text2": "Region, province, municipality, Barangay",
                        "fontSize1": "",
                        "fontFamily1": "",
                        "fontWeight1": "",
                        "color1": "",
                        "fontSize": "",
                        "fontFamily": "",
                        "fontWeight": "",
                        "color": "",
                        "borderRadius": "",
                        "fontSize2": "",
                        "fontFamily2": "",
                        "fontWeight2": "",
                        "color2": "",
                        "fontSize3": "",
                        "fontFamily3": "",
                        "fontWeight3": "",
                        "color3": "",
                        "btnHeight": "",
                        "btnWidth": "",
                        "btnColor": "",
                        "btnRadius": "",
                        "imgHeight": "",
                        "imgWidth": "",
                        "textSize1": "",
                        "textFamily1": "",
                        "textWeight1": "",
                        "textcolor1": "",
                        "textSize2": "",
                        "textFamily2": "",
                        "textWeight2": "",
                        "textcolor2": "",
                        "btnradius2": "",
                        "btnHeight2": "",
                        "btnWidth2": "",
                        "btnColor2": ""
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
                            handleFormBlockType("login_form");
                            handleClose();
                        }}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Login</span>
                        </button>
                        <button type='button' className='form-options' onClick={() => {
                            handleFormBlockType("login_pincode_form");
                            handleClose();
                        }}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Login PIN Code</span>
                        </button>
                        <button type='button' className='form-options' onClick={() => {
                            handleFormBlockType("forgot_pincode_form");
                            handleClose();
                        }}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Forgot PIN Code</span>
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