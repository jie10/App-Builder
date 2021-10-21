import React, { Component, Fragment, useState } from 'react'
import { connect } from 'react-redux'

import {
    toggleInserter,
    toggleSettings
} from '../../stores/actions'

import Grid from '@mui/material/Grid'
import Header from './Header'
import Canvas from './Canvas'
import Inserter from './Inserter'
import Settings from './Settings'

const Editor = (props) => {
    const [isInserterEnabled, setInserterEnabled] = useState(false)
    const [isSettingsEnabled, setSettingsEnabled] = useState(false)
    const [inserterWidth, setInserterWidth] = useState('0%')
    const [canvasWidth, setCanvasWidth] = useState('100%')
    const [settingsWidth, setSettingsWidth] = useState('0%')
    props.toggleInserter(isInserterEnabled)

    const toggleInserter = () => {
        if(!isInserterEnabled && !isSettingsEnabled){
            setInserterWidth('25%')
            setCanvasWidth('75%')
            setSettingsWidth('0%')
            setInserterEnabled(true)
            props.toggleInserter(!isInserterEnabled)
        }else if (isInserterEnabled && !isSettingsEnabled) {
            setInserterWidth('0%')
            setCanvasWidth('100%')
            setSettingsWidth('0%')
            setInserterEnabled(false)
            props.toggleInserter(!isInserterEnabled)
        }else if (!isInserterEnabled && isSettingsEnabled) {
            setInserterWidth('25%')
            setCanvasWidth('57%')
            setSettingsWidth('18%')
            setInserterEnabled(true)
            props.toggleInserter(!isInserterEnabled)
        }else if (isInserterEnabled && isSettingsEnabled) {
            setInserterWidth('0%')
            setCanvasWidth('82%')
            setSettingsWidth('18%')
            setInserterEnabled(false)
            props.toggleInserter(!isInserterEnabled)
        }
    }

    const toggleSettings = () => {
        if(!isInserterEnabled && !isSettingsEnabled){
            setInserterWidth('0%')
            setCanvasWidth('82%')
            setSettingsWidth('18%')
            setSettingsEnabled(true)
            props.toggleSettings(!isSettingsEnabled)
        }else if (!isInserterEnabled && isSettingsEnabled) {
            setInserterWidth('0%')
            setCanvasWidth('100%')
            setSettingsWidth('0%')
            setSettingsEnabled(false)
            props.toggleSettings(!isSettingsEnabled)
        }else if (isInserterEnabled && !isSettingsEnabled) {
            setInserterWidth('25%')
            setCanvasWidth('57%')
            setSettingsWidth('18%')
            setSettingsEnabled(true)
            props.toggleSettings(!isSettingsEnabled)
        }else if (isInserterEnabled && isSettingsEnabled) {
            setInserterWidth('25%')
            setCanvasWidth('75%')
            setSettingsWidth('0%')
            setSettingsEnabled(false)
            props.toggleSettings(!isSettingsEnabled)
        }
    }

    return (
        <Fragment>
            <Header toggleInserter={toggleInserter} toggleSettings={toggleSettings} />
            <Grid container style={{marginTop: '66px'}}>
                <Grid item style={{width: inserterWidth, margin: '0px', backgroundColor: '#fff', height: 'calc(100vh - 5rem)'}}>
                    <Inserter />
                </Grid>
                <Grid item style={{width: canvasWidth, margin: '0px', backgroundColor: '#fff', height: 'calc(100vh - 5rem)'}}>
                    <Canvas />
                </Grid>
                <Grid item style={{width: settingsWidth, margin: '0px', backgroundColor: '#fff', height: 'calc(100vh - 5rem)'}}>
                    <Settings />
                </Grid>
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isInserterVisible: state.isInserterVisible
    }
}

export default connect(mapStateToProps, {
    toggleInserter, 
    toggleSettings
})(Editor)

