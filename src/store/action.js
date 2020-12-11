

// collection of actions, 
// preferable modularize the action in screen folders

export const setToggle = (bool) => dispatch => dispatch({ 'type': 'SET_TOGGLE', bool })