import {ADD} from './constants';

const defaultState = {
    title = '',
};

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD: {
            return {
                ...state,
                title: action.add
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;
