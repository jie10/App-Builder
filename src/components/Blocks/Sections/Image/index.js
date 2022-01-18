import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@mui/material';

import './style.css';

import {
    deleteBlock,
    moveUpBlock,
    moveDownBlock,
    getBlock
} from '../../../../stores/actions';

const ImageSection = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return (
        <div className="image_only_section"
            style={{
                width: '100%',
                height: block.parameters.height
            }}
            onClick={() => getBlock(_id, block)}>
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
        
        <div className='row' style={{ justifyContent: block.parameters.alignment}}>
            <div className='col-md-5' style={{ borderRadius: block.parameters.borderRadius,
                boxShadow: block.parameters.boxShadow,
                backgroundColor: block.parameters.backgroundColor}}>
                <div className='text-left'>
                    <div className="photo">
                        <img src={block.parameters.image} style={{ borderRadius: block.parameters.borderRadius}}/>
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
})(ImageSection)