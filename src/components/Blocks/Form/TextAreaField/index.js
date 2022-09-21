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

const TextAreaField = (props) => {
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
            <div id="text_area_field_component" className="text-area-field-component" style={{ backgroundColor: block.parameters.background_color }}>
                <label htmlFor="text_area_field">{ block.parameters.input_label }</label>
                <textarea id="text_area_field"
                        className="text-area-field"
                        name="new_text_area_field"
                        maxLength={ block.parameters.input_max_length }
                        placeholder={ block.parameters.input_placeholder }
                        style={{ height: block.parameters.height, width: block.parameters.width, backgroundColor: block.parameters.input_background_color, color: block.parameters.input_color, fontSize: block.parameters.input_font_size, resize: block.parameters.input_resize }}>
                    { block.parameters.input_default_value }
                </textarea>
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
})(TextAreaField)