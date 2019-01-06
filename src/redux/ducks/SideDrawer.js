import {fromJS,toJS} from 'immutable'

//Initial State
const INITIAL_STATE = {
    isOpen: false
}

// Action Prefix
const _PREFIX = 'sideDrawer/'

// Actions
const TOGGLE = `${_PREFIX}toggle`

// Reducer
export default function sideDrawerReducer(state = INITIAL_STATE, action = {}) {
    let newState = fromJS(state)
    switch (action.type) {
        case TOGGLE:
            const toggleState = newState.get('isOpen')
            return newState.set('isOpen', !toggleState).toJS()
        default: 
            return newState.toJS()
    }
}

// Sync Action Creators
export function toggleDrawer(username) {
    return {
        type: TOGGLE
      }
}