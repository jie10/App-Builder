import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import "./PageEditor.css";

import {
    toggleInserter,
    toggleSettings
} from '../../stores/actions';

import EditNavBar from '../../components/NavBar/EditNavBar';

import PageEditorContent from './PageEditorContent';

const PageEditor = (props) => {
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

    return(
        <Fragment>
            <EditNavBar toggleInserter={toggleInserter} toggleSettings={toggleSettings} />
            <PageEditorContent inserterWidth={inserterWidth} canvasWidth={canvasWidth} settingsWidth={settingsWidth} />
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
})(PageEditor)