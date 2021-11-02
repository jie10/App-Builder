import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from '@mui/material'
import './style.css'

import {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
} from '../../../../stores/actions'

const Sidebar = (props) => {

    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock } = props

    return(
        <div id="sidebar-wrapper" className="sidebar">
        <div style={{
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
        <div>
            <div class="c-baggage__sidebar ng-tns-c14-33 ng-star-inserted">
                <div class="desktop-only">
                    <h6 class="ng-tns-c14-33 ng-star-inserted">CORPORATE PROFILE</h6>
                    <div class="list">
                        <div class="item ng-tns-c14-33 ng-star-inserted">
                            <a class="ng-tns-c14-33" href="javascript: void(0)">Board of Directors, Management Team and Executive Officers</a>
                        </div>
                        <div class="item ng-tns-c14-33 ng-star-inserted">
                            <a class="ng-tns-c14-33" href="javascript: void(0)">Shareholdings Structure</a>
                        </div>
                        <div class="item ng-tns-c14-33 ng-star-inserted">
                            <a class="ng-tns-c14-33" href="javascript: void(0)">Internal and External Auditor</a>
                        </div>
                        <div class="item ng-tns-c14-33 ng-star-inserted">
                            <a class="ng-tns-c14-33" href="javascript: void(0)">Articles of Incorporation and By Laws</a>
                        </div>
                        <div class="item ng-tns-c14-33 ng-star-inserted">
                            <a class="ng-tns-c14-33" href="javascript: void(0)">Organizational Structure and Conglomerate Map</a>
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
})(Sidebar)