import {store} from '../store/configureStore';

export const removeLoginState = () => {
  return {
    type: 'REMOVE_LOGIN_STATE',
  };
};

export const setLoginState = (user) => {
  return {
    type: 'SET_LOGIN_STATE',
    session: user,
  };
};

export const login = (email) => (dispatch) => {
  try {
    const users = store.getState().users;
    users.map((user) => {
      if (user.email === email) {
        dispatch(setLoginState(user));
      }
    });
    dispatch(setLoginState(users[0]));
  } catch (err) {
    console.log(err);
  }
};
