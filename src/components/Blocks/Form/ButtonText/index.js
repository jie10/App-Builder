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

const ButtonText = (props) => {
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
            <div id="button_text_component" className="button-with-text-component" style={{ backgroundColor: block.parameters.background_color }}>
                <button type={ block.parameters.button_type }
                        id="button_text"
                        className="button-text"
                        src={ block.parameters.button_src_url }
                        style={{ width: block.parameters.width,
                                padding: block.parameters.padding,
                                backgroundColor: block.parameters.button_background_color, 
                                color: block.parameters.button_color, 
                                fontSize: block.parameters.button_font_size, 
                                borderRadius: block.parameters.button_border_radius, 
                                borderWidth: block.parameters.button_border_width, 
                                borderColor: block.parameters.button_border_color, 
                                borderStyle: block.parameters.button_border_style }}
                        disabled={ block.parameters.button_is_disabled === "false" ? false : true }>
                    { block.parameters.button_text_label }
                </button>
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
})(ButtonText)