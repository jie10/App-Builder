import { v4 as uuidv4 } from 'uuid'
import openSocket from "socket.io-client"

import { 
    ACTION_GET_COMPONENTS, 
    ACTION_TOGGLE_INSERTER,
    ACTION_TOGGLE_SETTINGS,
    ACTION_GET_BLOCKS,
    ACTION_GET_BLOCK,
    ACTION_SEND_BLOCK,
    ACTION_DELETE_BLOCK,
    ACTION_DELETE_BLOCKS,
    ACTION_MOVE_UP_BLOCK,
    ACTION_MOVE_DOWN_BLOCK,
    ACTION_UPDATE_BLOCK,
    INITSOCKET
 } from './types'

 import { SOCKETURL } from '../../utils/constants/socket'

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

export const deleteBlocks = () => async dispatch => {
    dispatch({type: ACTION_DELETE_BLOCKS})
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

export const getProjectNotif = () => async dispatch => {
    const sessionID = uuidv4();
    dispatch(initSocket(sessionID));
}

const initSocket = (sessionID) => async dispatch => {
    const socket = openSocket(SOCKETURL, {  transports: ['websocket'], 
                                            reconnection: true,
                                            reconnectionAttempts: Infinity,
                                            reconnectionDelay: 1000,
                                            reconnectionDelayMax: 5000,
                                            randomizationFactor: 0.5
                                        });

    socket.emit("chat_message", `hello from web widget ${sessionID}`);

    socket.on("chat_message", sf => {
        dispatch({type: INITSOCKET, payload: { socketID: socket.id, message: sf }});
    });

    socket.on(sessionID, async data => {
        console.log(data);
    });

    socket.open();
}