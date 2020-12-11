import { combineReducers } from "redux";

const initState = {
    toggle: false,
    //... 
}

const test = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TOGGLE':

            return { ...state, toggle: action.bool }

        default:
            return state;
    }
}


export default combineReducers({
    test
});