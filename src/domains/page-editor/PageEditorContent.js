import React from 'react';
import Grid from '@mui/material/Grid';

/** List of available project themes */
import { applyCustomTheme } from "../../themes/CustomTheme";
import BasicTheme from "../../themes/BasicTheme";
import OMNIXTheme from '../../themes/OMNIXTheme';
import EnterpriseTheme from '../../themes/EnterpriseTheme';

import Canvas from '../../components/Editor/Canvas';
import Inserter from '../../components/Editor/Inserter_v2';
import Settings from '../../components/Editor/Settings';

import "./PageEditorContent.css";

const PageEditorContent = (props) => {
    const { projectBuldMode, customGlobalStyleSettings, inserterWidth, canvasWidth, settingsWidth} = props;

    const loadProjectTheme = (buildMode) => {
        switch (buildMode) {
            case "scratch":
                return BasicTheme;
            case "default_template":
                return OMNIXTheme;
            case "enterprise_template":
                return EnterpriseTheme;
            default:
                return BasicTheme;
        }
    }

    const loadCustomGlobalStyleSettings = () => customGlobalStyleSettings ? applyCustomTheme(customGlobalStyleSettings) : null;

    return (
        <Grid container style={{marginTop: '50px'}}>
            <Grid item style={{width: inserterWidth, margin: '0px', backgroundColor: '#fff', height: 'calc(100vh - 5rem)'}}>
                <Inserter />
            </Grid>
            <Grid item style={{width: canvasWidth, margin: '0px', backgroundColor: '#fff', height: 'calc(100vh - 5rem)'}}>
                { loadProjectTheme(projectBuldMode) }
                { loadCustomGlobalStyleSettings() }
                <Canvas />
            </Grid>
            <Grid item style={{width: settingsWidth, margin: '0px', backgroundColor: '#fff', height: 'calc(100vh - 5rem)'}}>
                <Settings />
            </Grid>
        </Grid>
    );
}

export default PageEditorContent;