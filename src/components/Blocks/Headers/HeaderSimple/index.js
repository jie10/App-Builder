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
        <p style={{
            marginLeft: '3em',
            fontSize: '1.5em'
        }}>{block.parameters.title}</p>
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