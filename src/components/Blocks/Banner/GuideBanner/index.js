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

const GuideBanner = (props) => {

    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock } = props

    return(
        <div className='cebapp-banner-component-guide ng-tns-c13-33 height-medium background-yellow ng-star-inserted' 
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
        <div className="">
            <div className="banner-content container height-medium">
                <div className="content left design-b">
                    <div className="content-wrap left">
                        <span className="country text-blue">
                            <h1><strong>{block.parameters.title}</strong></h1>
                        </span>
                        <span className="description text-blue">
                            <p>{block.parameters.text}</p>
                        </span>
                    </div>
                    <a className="o-btn fixed-size o-btn--primary-blue" href="{block.parameters.buttonLink}" target="_self">{block.parameters.button}</a>
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
})(GuideBanner)