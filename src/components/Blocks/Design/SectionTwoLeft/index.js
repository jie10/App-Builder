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

const SectionTwoLeft = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return(
        <div 
        className='left_image_with_text_and_button_section'
        style={{
            width: '100%',
            height: block.parameters.height
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
        <div className='c-about-landing__two-columns c-about-landing__two-columns--space' 
            style={{ borderRadius: block.parameters.borderRadius,
                boxShadow: block.parameters.boxShadow,
                backgroundColor: block.parameters.backgroundColor}}>
            <div style={{ flexBasis: block.parameters.flexBasisLeft}}>
                <img src={block.parameters.image} alt="new section with text and button" />
            </div>
            <div style={{ flexBasis: block.parameters.flexBasisRight}}>
                <div style={{padding: '24px 24px 0'}}>
                    <h4 style={{
                        fontSize: '1.5em',
                        marginTop: '0',
                        color: block.parameters.titleColors
                    }}>{block.parameters.title}</h4>
                    <p>{block.parameters.text}</p>
                    <a class="o-btn o-btn--primary-blue" target="_self" href={block.parameters.url}
                        style={{background: block.parameters.buttonColor}}> View more information </a>
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
})(SectionTwoLeft)