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

    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock } = props

    return(
        <div className = 'cebapp-header-component ng-tns-c13-32 height-small background-yellow rounded-buttom ng-star-inserted'
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
        <figure class="ng-tns-c7-33 ng-star-inserted">
            <img class="ng-tns-c7-33" alt="" src={block.parameters.image}/>
            
         </figure>
        <div className = 'banner-content container height-small'>
            <span className = 'country text-blue'>
                <p>{block.parameters.title}</p>
                </span>
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