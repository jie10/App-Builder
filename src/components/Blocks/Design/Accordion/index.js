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

const Accordion = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    const [open, setOpen] = React.useState(false);

    return(
        <div
        className='accordion_section'
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
        <div className='dynamic-accordion'>
            <div class="container">
                <omnix-dynamic-accordion-item className="ng-tns-c15-34 ng-star-inserted">
                    <div className={'dynamic-accordion__item ' + (open ? "open" : "")} onClick={() => {setOpen(!open);}}>
                        <div className="ng-tns-c15-34">
                            <div className="row">
                                <div className="col-md-8 col-lg-9 my-auto ng-tns-c15-34 ng-star-inserted">
                                    <h3 className="ng-tns-c15-34 ng-star-inserted">{block.parameters.title}</h3>
                                    <div className="markdown-content" markdown-external-link=""></div>
                                </div>
                            </div>
                            <a className="drop ng-tns-c15-34 ng-star-inserted"></a>
                        </div>
                        <div className="content">
                            <omnix-markdown-content className="ng-star-inserted">
                                <div className="markdown-content left" markdown-external-link="">
                                    <p>{block.parameters.text}</p>
                                </div>
                            </omnix-markdown-content>
                        </div>
                    </div>
                </omnix-dynamic-accordion-item>
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
})(Accordion)


