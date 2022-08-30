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

const MultiSelectField = (props) => {
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
            <div id="multi_select_component" className="multi-select-component" style={{ backgroundColor: block.parameters.background_color }}>
                <label htmlFor="multi_select">{ block.parameters.input_label }</label>
                <select id="multi_select" className="multi-select" name="new_multi_select" style={{ height: block.parameters.height, width: block.parameters.width, backgroundColor: block.parameters.input_background_color, color: block.parameters.input_color, fontSize: block.parameters.input_font_size }} multiple>
                    <option selected disabled>{ block.parameters.input_placeholder }</option>
                    { block.parameters.options && block.parameters.options.split(',').map(options => <option value={options}>{options}</option>) }
                </select>
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
})(MultiSelectField)