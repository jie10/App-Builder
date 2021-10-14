import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'

import ListSubheader from '@mui/material/ListSubheader'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'

import {
    updateBlock
} from '../../stores/actions'

const Settings = (props) => {
    const { block, updateBlock, isSettingsVisible } = props
    const [open, setOpen] = useState(false)
    const [blockKey, setBlockKey] = useState(null)
    const [blockParams, setBlockParams] = useState(null)

    const handleClick = () => {
        setOpen(!open)
    }

    const _handleTextFieldChange = (e) => {
        setBlockParams(e)
        updateBlock(block.id, createPayload(block.block, e.target.value))
    }

    const createPayload = (block, textfieldValue) => {
        var blockParams = block.parameters
        blockParams[blockKey] = textfieldValue
  
        let newBlock = {
            type: block.type,
            parameters: blockParams
        }
        return newBlock
    }

    /*
    const getParameters = (parameters) => {
        var rows = []
        for (var key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                rows.push(<TextField key={key} style={{width: '80%', padding: '8px', marginBottom: '16px'}} id="outlined-basic" label={key} variant="outlined" placeholder={parameters[key]} onChange={() => console.log(key)} />)
            }
        }

        return rows
    }*/

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

    // { isSettingsVisible && componentList }
    /*
    return(
        <Fragment>
            <div style={{height: '60px'}}></div>
            <List>
                {params.map(item => {
                    return <TextField 
                    key={item.key} 
                    style={{width: '80%', padding: '8px', marginBottom: '16px'}} 
                    id="outlined-basic" 
                    label={item.key} 
                    variant="outlined" 
                    placeholder={item.value} 
                    onFocus={() => setBlockKey(item.key)}
                    onChange={(e) => _handleTextFieldChange(e)} />
                })}
            </List>
        </Fragment>
    )
    */

    const getSettings = (block) => {
        if(block.block != undefined){
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
                    value={item.value}
                    placeholder={item.value} 
                    onFocus={() => setBlockKey(item.key)}
                    onChange={(e) => _handleTextFieldChange(e)} />
                })}
            </List>
        }else{
            return <p>Loading</p>
        }

    }
    
    return(
        <Fragment>
            <div style={{height: '60px'}}></div>
            {block && getSettings(block)}
        </Fragment>
    )
}

//<TextField style={{width: '80%', padding: '8px'}} id="outlined-basic" label="Background Color" variant="outlined" />
//<Button variant="text" onClick={() => updateBlock(block.id, createPayload(block.block))}>Color Update</Button>

const mapStateToProps = state => {
    return {
        isSettingsVisible: state.isSettingsVisible,
        block: state.block
    }
}

export default connect(mapStateToProps, {
    updateBlock
})(Settings)