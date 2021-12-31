import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import './style.css'

import {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
} from '../../../../stores/actions'

const FilterSection = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return(
        <div
        className='filter_section'
        style={{
            width: '100%',
            height: block.parameters.height,
            backgroundColor: block.parameters.backgroundColor
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
        
        
        <div class='' style={{ justifyContent: block.parameters.alignment}}>
            <div class="c-city-guides-filter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <h2 class="title">City Guides</h2>
                            <p class="description">Looking for an adventure? We have more destinations to choose from!</p>
                        </div>
                        <div class="col-sm-4">
                            <div class="o-form_input filter-destinations ng-pristine ng-valid ng-touched">
                                <span class="title ng-tns-c8-5 ng-star-inserted">Filter by</span>
                                <input class="o-form_input__field readonly ng-pristine ng-valid ng-touched" autocomplete="off" type="text" placeholder="Select destinations" readonly=""/>
                                <span class="plane-text">✈</span>
                                <i class="dropdown-caret"></i>
                            </div>
                        </div>
                    </div>
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
})(FilterSection)











