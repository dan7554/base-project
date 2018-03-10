import rp from 'request-promise';


//Initial State
const INITIAL_STATE = {
    userSubmitting: false
};

// Action Prefix
const _PREFIX = 'base/login/';

// Actions
const SUBMIT = `${_PREFIX}SUBMIT`;
const CREATE = `${_PREFIX}CREATE`;
const REMOVE = `${_PREFIX}REMOVE`;

// Reducer
export default function loginReducer(state = INITIAL_STATE, action = {}) {

    console.log('reducer',this)

    switch (action.type) {
        case SUBMIT:
            return { ...state, userSubmitting: true };
        case CREATE:
            return { ...state, userCreating: true };
        case REMOVE:
            return { ...state, userRemoving: true };
        default: return state;
    }
}

// Sync Action Creators
export function submitUser(userCred) {
    console.log('submitUser',this)
    return {
        type: SUBMIT,
        userCred
      }
}

// Async Action Creators
export function submitUserAsync(userCred) {
    console.log('submitUserAsync',this)

    var options = {
        uri: 'http://www.google.com',
        headers: {},
        json: true // Automatically parses the JSON string in the response
    };
    
    return (dispatch) => {
        rp(options)
            .then(function (htmlString) {
                dispatch({ type: CREATE, value: htmlString });

            })
            .catch(function (err) {
                dispatch({ type: REMOVE, value: err });
            });
    }
}

