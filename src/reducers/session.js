const initialState = {
  first_name: '',
  last_name: '',
  phone: '',
};
const usersReducerDefaultState = initialState;

export const sessionReducer = (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_STATE':
      return {
        ...state,
        ...action.session, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
    case 'REMOVE_LOGIN_STATE':
      return null;
    default:
      return state;
  }
};
