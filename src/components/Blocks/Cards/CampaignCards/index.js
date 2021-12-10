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

const CampaignCards = (props) => {

    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock } = props

    return(
        <div id='page-content-wrapper'>
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
        <div className="c-campaigns__cards">
            <div className="c-campaigns__card ng-star-inserted">
                <div>
                    <img alt="" src={block.parameters.card1Image}/>
                </div>
                <div className="content">
                    <h6><strong>{block.parameters.card1Title}</strong></h6>
                    <p><p>As the country's leading carrier, Cebu Pacific celebrates its 25th year by continuously making air travel fun, safe, convenient, flexible, accessible, and affordable for everyJuan.</p></p>
                    <button className="o-btn fixed-size o-btn--primary-blue" type="button"> View more information</button>
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
})(CampaignCards)


