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

const ShareRideTabPanel = (props) => {
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
            <div className="share-ride-tab-panel-component"
                    id="share_ride_tab_panel_component"
                    style={{ backgroundColor: block.parameters.backgroundColor,
                                borderTop: block.parameters.borderTop,
                                height: block.parameters.maxHeight,
                                marginTop: block.parameters.marginTop }}>
                <div className="input-container" style={{ width: block.parameters.inputContainerWidth }}>
                    <div id="button_text_input_field_component" className="button-text-input-field-component">
                        <input type={ block.parameters.input_type }
                                id="button_text_input_field"
                                className="button-text-input-field"
                                name="new_button_text_input_field"
                                placeholder={ block.parameters.inputPlaceholder }
                                maxLength={ block.parameters.inputMaxLength }
                                style={{ border: block.parameters.inputBorder }}
                                readOnly={true} />
                        <button class="button-text" type="button" id="button_text" style={{ borderColor: block.parameters.buttonBackgroundColor, backgroundColor: block.parameters.buttonBackgroundColor, color: block.parameters.buttonColor }}>
                            <svg style={{ fill: block.parameters.buttonColor }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
                        </button>
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
})(ShareRideTabPanel)