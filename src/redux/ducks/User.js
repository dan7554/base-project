import fetch from 'isomorphic-fetch';

//Initial State
const INITIAL_STATE = {
    submitting: false,
    created: false,
    removed: false,
    username: null
};

// Action Prefix
const _PREFIX = 'user/';

// Actions
const SUBMIT = `${_PREFIX}submit`;
const CREATE = `${_PREFIX}create`;
const REMOVE = `${_PREFIX}remove`;

// Reducer
export default function userReducer(state = INITIAL_STATE, action = {}) {

    switch (action.type) {
        case SUBMIT:
            return { ...state, user: { submitting: true, username: action.username } };
        case CREATE:
            return{ ...state, user: { created: true } };
        case REMOVE:
            return { ...state, user: { removed: true } }
        default: 
            return state;
    }
}

// Sync Action Creators
export function submitUser(username) {
    return {
        type: SUBMIT,
        username
      }
}

// Async Action Creators
export function submitUserAsync(userCred) {
  
    return (dispatch) => {
        fetch('http://www.dchristiani.com', {
            method: 'get',
            mode: 'no-cors',
            headers: {}
        }).then((res,a) => {
            console.log('Works!',res,a);
        }).catch((error,a) => {
            console.log('error!',error,a);
         });
    }
}
