import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import {
    sendBlocks
} from '../../stores/actions'

let theme = createTheme({
    components: {
        MuiButtonBase: {
        defaultProps: {
            disableRipple: true
        },
        },
    }
});

const BlocksList = (props) => {
    const { sendBlocks } = props;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={() => sendBlocks({type: "HEADER", parameters: {
                backgroundColor: '#F4D03F',
                height: '160px',
                title: 'Header'
            }})}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                    <ListItemText primary="Header" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Sections" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => sendBlocks({type: "SECTION_SSO", parameters: {}})}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="SSO Login" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => sendBlocks({type: "SECTION_CARDS", parameters: {}})}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Cards" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => sendBlocks({type: "SECTION_CAROUSEL", parameters: {}})}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Carousel" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={() => sendBlocks({type: "FOOTER", parameters: {
                backgroundColor: '#F4D03F',
                height: '40px'
            }})}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Footer" />
            </ListItemButton>
            <ListItemButton onClick={() => sendBlocks({type: "SECTION", parameters: {
                backgroundColor: '#F4D03F',
                height: '40px'
            }})}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Section" />
            </ListItemButton>
        </List>
    );
}

const PatternsList = (props) => {
    return (
        <div>
            <p>Patterns List goes here!</p>
        </div>
    );
}

const TabPanel = (props) => {
    const { value, sendBlocks } = props;

    return (
        <Box>
            <div
                hidden={value !== 0 ? true : false}
                id={`simple-tabpanel-0`} >
                <BlocksList sendBlocks={sendBlocks} />
            </div>
            <div
                hidden={value !== 1 ? true : false}
                id={`simple-tabpanel-1`} >
                <PatternsList />
            </div>
        </Box>
    );
}

const ComponentTabs = (props) => {
    const { sendBlocks } = props
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <ThemeProvider theme={theme}>
            <Box>
                <Tabs
                    component="div"
                    id="nested-list-subheader"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange} >
                    <Tab 
                        label="Blocks"
                        id="component-tab-0"
                        aria-controls="component-tab-0"
                    />
                    <Tab 
                        label="Patterns"
                        id="component-tab-1"
                        aria-controls="component-tab-1"
                    />
                </Tabs>
                <TabPanel value={value} sendBlocks={sendBlocks} />
            </Box>
        </ThemeProvider>
    );
}

const Inserter = (props) => {
    const { isInserterVisible, sendBlocks } = props

    return(
        <Fragment>
            { isInserterVisible && <ComponentTabs sendBlocks={sendBlocks} /> }
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isInserterVisible: state.isInserterVisible
    }
}

export default connect(mapStateToProps, {
    sendBlocks
})(Inserter)