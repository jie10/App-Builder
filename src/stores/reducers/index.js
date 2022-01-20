import { combineReducers } from 'redux'
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
} from '../actions/types'

const componentsReducer = (components = null, action) => {
    if(action.type === ACTION_GET_COMPONENTS){
        return action.payload
    }

    return components
}

const toggleInserterReducer = (mode = false, action) => {
    if(action.type === ACTION_TOGGLE_INSERTER){
        return action.payload
    }

    return mode
}

const toggleSettingsReducer = (mode = false, action) => {
    if(action.type === ACTION_TOGGLE_SETTINGS){
        return action.payload
    }

    return mode
}

const blockReducer = (block = {}, action) => {
    if(action.type === ACTION_GET_BLOCK){
        let block = action.payload
        return block
    }

    return block
}

const blocksReducer = (blocks = {}, action) => {
    switch (action.type) {
        case ACTION_GET_BLOCKS:
            return action.payload
        case ACTION_SEND_BLOCK:
            return { ...blocks, [action.payload.id]: action.payload.block }
        case ACTION_UPDATE_BLOCK:
            return { ...blocks, [action.payload.id]: action.payload.block }
        case ACTION_DELETE_BLOCK:
            const { [action.payload.id]: _, ...newData } = blocks
            return newData
        case ACTION_DELETE_BLOCKS:
            blocks = {}
            return blocks
        case ACTION_MOVE_UP_BLOCK:
            let keysUp = Object.keys( blocks )
            let indexUp = Object.keys(blocks).indexOf(action.payload.id)

            if(indexUp > 0){
                let blockUp = blocks[action.payload.id]
                let topBlockUp = blocks[`${keysUp[indexUp-1]}`]

                blocks[action.payload.id] = topBlockUp
                blocks[`${keysUp[indexUp-1]}`] = blockUp
            }

            return { ...blocks }

        case ACTION_MOVE_DOWN_BLOCK:
            let keysDown = Object.keys( blocks )
            let indexDown = Object.keys(blocks).indexOf(action.payload.id)

            if(indexDown < keysDown.length-1){
                let blockDown = blocks[action.payload.id]
                let topBlockDown = blocks[`${keysDown[indexDown+1]}`]

                blocks[action.payload.id] = topBlockDown
                blocks[`${keysDown[indexDown+1]}`] = blockDown
            }

            return { ...blocks }
            
        default:
            break;
    }

    return blocks
}

const notifReducer = (notif = {}, action) => {
    if (action.type === INITSOCKET) {
        let notif = action.payload;
        return notif;
    }

    return notif;
}

export default combineReducers({
    components: componentsReducer,
    isInserterVisible: toggleInserterReducer,
    isSettingsVisible: toggleSettingsReducer,
    blocks: blocksReducer,
    block: blockReducer,
    notif: notifReducer
})