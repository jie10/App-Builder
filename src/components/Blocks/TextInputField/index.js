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

const TextInputField = (props) => {
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
            <div id="text_input_field_component" className="text-input-field-component" style={{ backgroundColor: block.parameters.background_color }}>
                <label htmlFor="text_input_field">{ block.parameters.input_label }</label>
                <input type={ block.parameters.input_type }
                        id="text_input_field"
                        className="text-input-field"
                        name="new_text_input_field"
                        placeholder={ block.parameters.input_placeholder }
                        maxLength={ block.parameters.input_max_length }
                        min={ block.parameters.input_num_min }
                        max={ block.parameters.input_num_max }
                        step={ block.parameters.input_num_step }
                        pattern={ block.parameters.input_regex_pattern }
                        defaultValue={ block.parameters.input_default_value }
                        style={{ width: block.parameters.width, backgroundColor: block.parameters.input_background_color, color: block.parameters.input_color, fontSize: block.parameters.input_font_size }} />
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
})(TextInputField)