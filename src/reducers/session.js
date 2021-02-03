export const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOGIN_STATE':
      return action.session;
    case 'REMOVE_LOGIN_STATE':
      return null;
    default:
      return state;
  }
};
