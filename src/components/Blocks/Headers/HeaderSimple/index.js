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

const HeaderSimple = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return(
        
        <div
            style={{
            width: '100%'
        }} onClick={() => getBlock(_id, block)}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
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
        <div className = 'cebapp-header-component rounded-buttom '
            style={{backgroundColor: block.parameters.backgroundColor,
                borderBottom: block.parameters.borderBottom,
                borderRadius: block.parameters.borderRadius,
                height: block.parameters.height}}>
            <figure style={{justifyContent: block.parameters.bannerImagePosition}}>
                <img alt="" src={block.parameters.image} 
                    style={{width: block.parameters.bannerImageWidth}}/>
            </figure>
            <div className = 'banner-content container height-small' style={{height: block.parameters.height}}>
                <div style={{display: block.parameters.backButton}} className= 'header-nav-btn'>
                    <span class="status-icon material-icons-round">arrow_back</span>
                </div>
                <span className = 'country text-blue' >
                    <p style={{textAlign: block.parameters.HeaderTitleAlignment,
                        color: block.parameters.HeaderTitleColor,
                        fontSize: block.parameters.HeaderTitleSize
                    }}>{block.parameters.title}</p>
                </span>
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
})(HeaderSimple)