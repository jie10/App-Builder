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

const BottomNavbar = (props) => {
    const { _id, block, deleteBlock, moveUpBlock, moveDownBlock, getBlock, themeStyle } = props

    if (block.status === "added") {
        block.parameters = themeStyle
    }

    return(
        <div style={{
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
        <div>
            <div class="main-bottom-navbar" style={{height:block.parameters.height,
                backgroundColor: block.parameters.backgroundColor}}>
                <div class="container d-flex justify-content-center" style={{height:block.parameters.height}}> 
                    <a class="text-center d-flex flex-column carpool-tab-button" style={{color: block.parameters.fontColor}}
                        name={block.parameters.BottomNavbarItem1Name} 
                        href="block.parameters.BottomNavbarItem1URL"> 
                        <span class="material-icons-round">{block.parameters.BottomNavbarItem1Icon}</span><label>{block.parameters.BottomNavbarItem1Name}</label>
                    </a> 
                    <a class="text-center d-flex flex-column shuttle-tab-button" style={{color: block.parameters.fontColor}}
                        name={block.parameters.BottomNavbarItem2Name}
                        href="block.parameters.BottomNavbarItem2URL"> 
                        <span class="material-icons-round">{block.parameters.BottomNavbarItem2Icon}</span><label>{block.parameters.BottomNavbarItem2Name}</label>
                    </a> 
                    <a class="text-center d-flex flex-column user-account-tab-button" style={{color: block.parameters.fontColor}}
                        name={block.parameters.BottomNavbarItem3Name}
                        href="block.parameters.BottomNavbarItem3URL"> 
                        <span class="material-icons-round">{block.parameters.BottomNavbarItem3Icon}</span><label>{block.parameters.BottomNavbarItem3Name}</label>
                    </a> 
                    <a class="text-center d-flex flex-column user-account-tab-button" style={{color: block.parameters.fontColor}}
                        name={block.parameters.BottomNavbarItem4Name}
                        href="block.parameters.BottomNavbarItem4URL"> 
                        <span class="material-icons-round">{block.parameters.BottomNavbarItem4Icon}</span><label>{block.parameters.BottomNavbarItem4Name}</label>
                    </a> 
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
})(BottomNavbar)