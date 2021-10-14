import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'

import ListSubheader from '@mui/material/ListSubheader';
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

const Inserter = (props) => {
    const { isInserterVisible, sendBlocks } = props
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open);
    };

    const componentList = (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                Blocks
            </ListSubheader>
            }>
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
    )

    return(
        <Fragment>
            { isInserterVisible && componentList }
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