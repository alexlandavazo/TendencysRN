export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const lastUser = state[state.length - 1];
      const user = {...action.user, id: lastUser.id + 1};
      return [...state, user];
    }
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
