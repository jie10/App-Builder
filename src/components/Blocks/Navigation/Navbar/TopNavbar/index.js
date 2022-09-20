import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';
import './index.css';

import {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
} from '../../../stores/actions'

const TopNavbar = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return(
        <div
            style={{
            width: '100%'
            
        }} onClick={() => getBlock(_id, block)}>
            <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                <Grid item onClick={() => moveUpBlock(_id)}>
                    <img 
                        className='buttoncontrols' 
                        alt='upbutton' 
                        src='/images/round_expand_less_black_24dp.png' />
                </Grid>
                <Grid item onClick={() => moveDownBlock(_id)}>
                    <img 
                        className='buttoncontrols' 
                        alt='downbutton' 
                        src='/images/round_expand_more_black_24dp.png' />
                </Grid>
                <Grid item onClick={() => deleteBlock(_id)}>
                    <img 
                        className='buttoncontrols' 
                        alt='deletebutton' 
                        src='/images/round_close_black_24dp.png' />
                </Grid>
            </Grid>
            <div className="top-navbar-component"
                    id="top_navbar_component"
                    style={{ backgroundColor: block.parameters.background_color }}>
                <div className="col">
                    {
                        block.parameters.visible_button_1 === "true" ? <button type="button" class="nav-button">
                                                                <span className="icon">
                                                                    <img src={ block.parameters.button_1_image_url } alt="button 1" />
                                                                </span>
                                                            </button> : null
                    }
                </div>
                <div className="col col-brand-title">
                    <span className="brand-title"
                        style={{ color: block.parameters.brand_title_font_color }}>{ block.parameters.brand_title }</span>
                </div>
                <div className="col">
                    {
                        block.parameters.visible_button_2 === "true" ? <button type="button" class="nav-button">
                                                                <span className="icon">
                                                                    <img src={ block.parameters.button_2_image_url } alt="button 2" />
                                                                </span>
                                                            </button> : null
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isInserterVisible: state.isInserterVisible
    }
}

export default connect(mapStateToProps, {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
})(TopNavbar)