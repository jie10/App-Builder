import { v4 as uuidv4 } from 'uuid'

import { 
    ACTION_GET_COMPONENTS, 
    ACTION_TOGGLE_INSERTER,
    ACTION_TOGGLE_SETTINGS,
    ACTION_GET_BLOCKS,
    ACTION_GET_BLOCK,
    ACTION_SEND_BLOCK,
    ACTION_DELETE_BLOCK,
    ACTION_MOVE_UP_BLOCK,
    ACTION_MOVE_DOWN_BLOCK,
    ACTION_UPDATE_BLOCK
 } from './types'

export const getComponents = () => async dispatch => {
    var components = [
        {id: 0, name: 'Paragraph'},
        {id: 1, name: 'Heading'},
        {id: 2, name: 'Quote'},
        {id: 3, name: 'Code'},
        {id: 4, name: 'Classic'},
        {id: 5, name: 'List'}
    ]
    dispatch({type: ACTION_GET_COMPONENTS, payload: components})
}

export const getBlocks = () => async dispatch => {
    var blocks = {}
    dispatch({type: ACTION_GET_BLOCKS, payload: blocks})
}

export const getBlock = (id, block) => async dispatch => {
    console.log(id)
    dispatch({type: ACTION_GET_BLOCK, payload: {id: id, block: block}})
}

export const updateBlock = (id, block) => async dispatch => {
    dispatch({type: ACTION_UPDATE_BLOCK, payload: {id: id, block: block}})
}

export const sendBlocks = (block) => async dispatch => {
    let _id = uuidv4()
    dispatch({type: ACTION_SEND_BLOCK, payload: {id: _id, block: block}})
}

export const deleteBlock = (id) => async dispatch => {
    dispatch({type: ACTION_DELETE_BLOCK, payload: {id: id}})
}

export const moveUpBlock = (id) => async dispatch => {
    dispatch({type: ACTION_MOVE_UP_BLOCK, payload: {id: id}})
}

export const moveDownBlock = (id) => async dispatch => {
    dispatch({type: ACTION_MOVE_DOWN_BLOCK, payload: {id: id}})
}

export const toggleInserter = (mode) => async dispatch => {
    dispatch({type: ACTION_TOGGLE_INSERTER, payload: mode})
}

export const toggleSettings = (mode) => async dispatch => {
    dispatch({type: ACTION_TOGGLE_SETTINGS, payload: mode})
}
