import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { Modal } from '@mui/material'

import './index.css';

import { ReactComponent as GridViewImage } from "../../../assets/svgs/grid_view_black_36dp.svg"

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
    const { openFormBlockModal } = props;
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(true);
    const [formBlockType, setFormBlockType] = useState(null);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(formBlockType)
    }, [formBlockType]);

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <div className='form-options-header'>
                        <h3>Form Blocks</h3>
                        <p>Please select which type of form you want to add to the canvas</p>
                    </div>
                    <div className='form-options-list'>
                        <button type='button' className='form-options' onClick={() => setFormBlockType("login_form")}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Login</span>
                        </button>
                        <button type='button' className='form-options' onClick={() => setFormBlockType("signup_form")}>
                            <span className='icon'><GridViewImage /></span>
                            <span className='label'>Sign Up</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default FormBlockModal;