const reducer = (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          names,
          location,
          issue,
          id,
        },
      });

    case 'DELETE_TICKET':
      let newState = { ...state };
      delete newState[id]; // use the delete fx t remove the key-value pair that corresponds to the action - this is the wrong way to do this, but as for rn it is ok
      return newState;
    default:
      return state;
  }
};

export default reducer;
