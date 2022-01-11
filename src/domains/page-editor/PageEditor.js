import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectEditorById } from "../../api/Projects";

import "./PageEditor.css";

import {
    toggleInserter,
    toggleSettings
} from '../../stores/actions';

import EditNavBar from '../../components/NavBar/EditNavBar';

import PageEditorContent from './PageEditorContent';

const PageEditor = (props) => {
    const { id } = useParams();

    const [appName, setAppName] = useState(null);
    const [appURL, setAppURL] = useState(null);
    const [projectBuldMode, setProjectBuildMode] = useState(null);
    const [customGlobalStyleSettings, setCustomGlobalStyleSettings] = useState(null);
    const [isInserterEnabled, setInserterEnabled] = useState(false)
    const [isSettingsEnabled, setSettingsEnabled] = useState(false)
    const [inserterWidth, setInserterWidth] = useState('0%')
    const [canvasWidth, setCanvasWidth] = useState('100%')
    const [settingsWidth, setSettingsWidth] = useState('0%')
    const [selectedPreviewMenu, setSelectedPreviewMenu] = useState('desktop');

    props.toggleInserter(isInserterEnabled)

    const toggleInserter = () => {
        let toggle = !isInserterEnabled;
        setInserterEnabled(toggle);
        props.toggleInserter(toggle);
    }

    const toggleSettings = () => {
        let toggle = !isSettingsEnabled;
        setSettingsEnabled(toggle)
        props.toggleSettings(toggle)
    }

    useEffect(() => {
        getProjectEditorById(id)
        .then(result => {
            setAppName(result.appName);
            setAppURL(result.appURL);
            setProjectBuildMode(result.buildMode);
            setCustomGlobalStyleSettings(result.globalStyleSettings);
        }).catch(error => console.log(error));
    }, [id]);

    return (
        <Fragment>
            <EditNavBar
                appId={id}
                appName={appName}
                appURL={appURL}
                toggleInserter={toggleInserter}
                toggleSettings={toggleSettings}
                selectedPreviewMenu={selectedPreviewMenu}
                setSelectedPreviewMenu={setSelectedPreviewMenu} />
            <PageEditorContent
                projectBuldMode={projectBuldMode}
                customGlobalStyleSettings={customGlobalStyleSettings}
                selectedPreviewMenu={selectedPreviewMenu}
                inserterWidth={inserterWidth}
                canvasWidth={canvasWidth}
                isInserterEnabled={isInserterEnabled}
                isSettingsEnabled={isSettingsEnabled} />
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