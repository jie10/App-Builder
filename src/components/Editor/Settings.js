import React, { useState } from 'react'
import { connect } from 'react-redux'

import ListSubheader from '@mui/material/ListSubheader'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {
    updateBlock
} from '../../stores/actions'

import "./Settings.css";

const theme = createTheme({
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "12px 16px 8px 16px",
                    alignItems: "flex-start",
                    color: '#1e1e1e',
                    "&:hover": {
                        color: "#1e1e1e"
                    },
                    "&.Mui-selected": {
                        color: "#1e1e1e"
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    borderBottom: "2px solid #F0F0F0",
                    width: 250
                },
                indicator: {
                    height: "4px",
                    backgroundColor: "#68A9C3"
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: '#1e1e1e',
                    transform: "scale(-0.8, 0.8)",
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: '#1e1e1e',
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }
            }
        }
    }
});

const Settings = (props) => {
    const { block, updateBlock, isSettingsEnabled, isSettingsVisible } = props
    const [open, setOpen] = useState(false)
    const [blockKey, setBlockKey] = useState(null)
    const [blockParams, setBlockParams] = useState(null)
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setOpen(!open)
    }

    const _handleTextFieldChange = (e) => {
        setBlockParams(e)
        updateBlock(block.id, createPayload(block.block, e.target.value))
    }

    const styleSettingModeTabs = {
        position: "relative",
        margin: 0,
        height: 1,
        borderRight: "1.5px solid #F0F0F0",
        maxHeight: 1,
        overflow: "auto"
    };
    const styleTabs = { width: 1 };

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const createPayload = (block, textfieldValue) => {
        var blockParams = block.parameters
        blockParams[blockKey] = textfieldValue
  
        let newBlock = {
            type: block.type,
            parameters: blockParams
        }
        return newBlock
    }

    const componentList = (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                Page
            </ListSubheader>
            }>
            <ListItemButton>
                <ListItemText primary="Status and Visibility" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Revisions" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Tags" />
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="SSO Login" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    )

    const getSettings = (block) => {
        if(block.block !== undefined){
            var params = []
            var data = block.block.parameters
    
            Object.keys(data).forEach(function(key) {
                var obj = {}
                obj['key'] = key
                obj['value'] = data[key]
                params.push(obj)
              })

            return <List>
                {params.map(item => {
                    return <TextField 
                    key={item.key} 
                    style={{width: '80%', padding: '8px', marginBottom: '16px'}} 
                    id="outlined-basic" 
                    label={item.key} 
                    variant="outlined" 
                    value={  item.value }
                    placeholder={item.value} 
                    onFocus={() => setBlockKey(item.key)}
                    onChange={(e) => _handleTextFieldChange(e)} />
                })}
            </List>
        }else{
            return <p style={{fontSize: "1rem", textAlign: "center", alignSelf: "center"}}>Click on an element to modfy its settings</p>
        }

    }

    return(
        <div className={`settings-container ${isSettingsEnabled  ? '' : 'settings-container-hide'}`}>
            { isSettingsVisible && <ThemeProvider theme={theme}>
                <Box className="component-tabs" sx={styleSettingModeTabs}>
                    <div className="components-tabs-controls-container">
                        <Tabs
                            id="nested-list-subheader"
                            component="div"
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            sx={styleTabs}>
                            <Tab
                                label="Basic"
                                id="component-tab-0"
                                aria-controls="component-tab-0" />
                            <Tab
                                label="Advanced"
                                id="component-tab-1"
                                aria-controls="component-tab-1" />
                        </Tabs>
                    </div>
                    <Box sx={{ padding: '1rem 0.5rem' }}>
                        <div
                            hidden={value !== 0 ? true : false}
                            id={`simple-tabpanel-0`} >
                            {block && getSettings(block)}
                        </div>
                        <div
                            hidden={value !== 1 ? true : false}
                            id={`simple-tabpanel-1`} >
                        </div>
                    </Box>
                </Box>
            </ThemeProvider> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isSettingsVisible: state.isSettingsVisible,
        block: state.block,
        p_text: state.p_text
    }
}

export default connect(mapStateToProps, {
    updateBlock
})(Settings)