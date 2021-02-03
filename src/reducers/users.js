export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.users;
    case 'REMOVE_USER': {
      const users = state.filter((user) => user.id !== action.id);
      return users;
    }
    case 'EDIT_USER': {
      const users = state.map((user) => {
        if (user.id == action.user.id) {
          return action.user;
        } else {
          return user;
        }
      });
      return users;
    }
    default:
      return state;
  }
};
