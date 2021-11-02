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

const FooterSimple = (props) => {

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
        <div>
            <div className="c-footer__copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 d-none d-lg-block">
                            <ul>
                                <li className="ng-star-inserted"><a href="javascript:void(0);">Privacy and Cookie Policy</a></li>
                                <li className="ng-star-inserted"><a href="javascript:void(0);">Website Terms of Use</a></li>
                                <li className="ng-star-inserted"><a href="javascript:void(0);">Security</a></li>
                                <li className="ng-star-inserted"><a href="javascript:void(0);">Accessibility</a></li>
                                <li className="ng-star-inserted"><a href="javascript:void(0);">Site Map</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-center text-lg-right">
                            <p>© Copyright 2021 Cebu Pacific</p>
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
})(FooterSimple)