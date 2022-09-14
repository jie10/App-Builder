import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';
import './index.css';

import {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
} from '../../../../stores/actions'

const HeaderCustom = (props) => {
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
            <header className="header-custom-component" style={{ backgroundColor: block.parameters.background_color, color: block.parameters.text_color }}>
                <div className='header-bg' style={{ backgroundImage: `url(${ block.parameters.background_image })` }}></div>
                <div className='text-wrap-container'>
                    <h1 className='page-title'>{ block.parameters.page_title }</h1>
                    <p className='page-excerpt'>{ block.parameters.page_excerpt }</p>
                    <div id="button_text_component" className="button-with-text-component" >
                        <button type="button"
                                id="button_text"
                                className="button-text"
                                style={{ backgroundColor: block.parameters.button_background_color,
                                            color: block.parameters.button_text_color,
                                            borderColor: block.parameters.button_border_color,
                                            borderRadius: block.parameters.button_border_radius,
                                            pointerEvents: "none" }}>
                            { block.parameters.button_text }
                        </button>
                    </div>
                </div>
            </header>
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
})(HeaderCustom)