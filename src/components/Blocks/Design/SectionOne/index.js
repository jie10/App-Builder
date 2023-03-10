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

const SectionOne = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return(
        <div className='image_with_text_section'
        style={{
            width: '100%',
        }} onClick={() => getBlock(_id, block)}>
            <div class="justify-content-md-center row">
                <div class='col-md-5'
                    style={{ 
                        height: block.parameters.height,
                        backgroundColor: block.parameters.backgroundColor,
                        borderRadius: block.parameters.borderRadius,
                        boxShadow: block.parameters.boxShadow}}>
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
                <div class='text-left'>
                    <div class="photo">
                        <img src={block.parameters.image} alt="new section with text" />
                    </div>
                    <div style={{padding: block.parameters.paddingContent}}>
                        <h4 style={{
                            fontSize: '1.5em',
                            color: block.parameters.titleColors
                        }}>{block.parameters.title}</h4>
                        <p style={{
                        }}>{block.parameters.text}</p>
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
})(SectionOne)