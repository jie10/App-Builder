import React, { useState, useEffect } from 'react';

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
import FormBlockModal from '../../components/Modals/FormBlockModal/index'

import "./PageEditorContent.css";

const PageEditorContent = (props) => {
    const { projectBuldMode, customGlobalStyleSettings, selectedPreviewMenu, isInserterEnabled, isSettingsEnabled } = props;

    const [openFormBlockModal, setOpenFormBlockModal] = useState(false);

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

    useEffect(() => {
        console.log(openFormBlockModal)
    }, [openFormBlockModal]);

    return (
        <div className='page-editor-content-container'>
            <Inserter isInserterEnabled={isInserterEnabled} setOpenFormBlockModal={setOpenFormBlockModal} />
            <>
                { loadProjectTheme(projectBuldMode) }
                { loadCustomGlobalStyleSettings() }
                <Canvas isInserterEnabled={isInserterEnabled} isSettingsEnabled={isSettingsEnabled} themeStyle={loadProjectThemeStyle(projectBuldMode)} selectedPreviewMenu={selectedPreviewMenu} />
            </>
            <Settings isSettingsEnabled={isSettingsEnabled} />
            <FormBlockModal openFormBlockModal={openFormBlockModal} setOpenFormBlockModal={setOpenFormBlockModal} />
        </div>
    );
}

export default PageEditorContent;