import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './index.css'

import {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
} from '../../../../stores/actions'

const FindPoolTabPanel = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return(
        <div style={{ width: "100%", backgroundColor: "#ffffff" }} onClick={() => getBlock(_id, block)}>
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
            <div className="find-pool-tab-panel-component"
                    id="find_pool_tab_panel_component"
                    style={{ backgroundColor: block.parameters.backgroundColor,
                                borderTop: block.parameters.borderTop,
                                height: block.parameters.maxHeight,
                                marginTop: block.parameters.marginTop }}>
                <div className="input-container" style={{ width: block.parameters.inputContainerWidth }}>
                    <div id="clickable_text_input_field_component" className="clickable-text-input-field-component">
                        <input type="text"
                                id="clickable_text_input_field"
                                className="clickable-text-input-field"
                                name="new_clickable_text_input_field"
                                placeholder={ block.parameters.inputPlaceholder }
                                style={{ border: block.parameters.inputBorder, cursor: "pointer" }}
                                readOnly={true} />
                    </div>
                </div>
                <div className="list-container">
                    <div className="find-carpool-address-list" id="find_carpool_address_list">
                        <p>No created trips found</p>
                    </div>
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
})(FindPoolTabPanel)