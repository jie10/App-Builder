import React from 'react';
import Grid from '@mui/material/Grid';

/** List of available project themes */
import { applyCustomTheme } from "../../themes/CustomTheme";
import BasicTheme from "../../themes/BasicTheme";
import OMNIXTheme from '../../themes/OMNIXTheme';
import EnterpriseTheme from '../../themes/EnterpriseTheme';
import { OMNIX_THEME_STYLE } from "../../themes/OMNIXTheme";
import { BASIC_THEME_STYLE } from "../../themes/BasicTheme";
import { ENTERPRISE_THEME_STYLE } from '../../themes/EnterpriseTheme';

import Canvas from '../../components/Editor/Canvas';
import Inserter from '../../components/Editor/Inserter_v2';
import Settings from '../../components/Editor/Settings';

import "./PageEditorContent.css";

const PageEditorContent = (props) => {
    const { projectBuldMode, customGlobalStyleSettings, inserterWidth, canvasWidth, settingsWidth, selectedPreviewMenu } = props;

    const loadProjectThemeStyle = (buildMode) => {
        switch (buildMode) {
            case "scratch":
                return BASIC_THEME_STYLE;
            case "default_template":
                return OMNIX_THEME_STYLE;
            case "enterprise_template":
                return ENTERPRISE_THEME_STYLE;
            default:
                return BasicTheme;
        }
    }

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

    const inserterContainerStyle = {
                                        width: inserterWidth,
                                        backgroundColor: '#ffffff',
                                        height: 'calc(100vh - 50px)'
                                    };

    const settingsContainerStyle = {
                                        width: settingsWidth,
                                        backgroundColor: '#ffffff',
                                        height: 'calc(100vh - 50px)'
                                    };

    return (
        <Grid container style={{marginTop: '50px'}}>
            <Grid item style={inserterContainerStyle}>
                <Inserter />
            </Grid>
            <Grid item style={{width: canvasWidth, margin: '0px', backgroundColor: "#EDEDED"}}>
                { loadProjectTheme(projectBuldMode) }
                { loadCustomGlobalStyleSettings() }
                <Canvas themeStyle={loadProjectThemeStyle(projectBuldMode)} selectedPreviewMenu={selectedPreviewMenu} />
            </Grid>
            <Grid item style={settingsContainerStyle}>
                <Settings settingsWidth={settingsWidth} />
            </Grid>
        </Grid>
    );
}

export default PageEditorContent;