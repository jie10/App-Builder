import React from 'react';
import Grid from '@mui/material/Grid';

import Canvas from '../../components/Editor/Canvas';
import Inserter from '../../components/Editor/Inserter_v2';
import Settings from '../../components/Editor/Settings';

import "./PageEditorContent.css";

const PageEditorContent = (props) => {
    const { inserterWidth, canvasWidth, settingsWidth} = props;

    return(
        <Grid container style={{marginTop: '50px'}}>
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
    )
}

export default PageEditorContent;