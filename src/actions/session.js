export const removeLoginState = (token) => {
  return {
    type: 'REMOVE_LOGIN_STATE',
    token: token,
  };
};

export const setLoginState = (sessionData) => {
  return {
    type: 'SET_LOGIN_STATE',
    session: sessionData,
  };
};

export const login = (user) => {
  return async (dispatch) => {
    // don't forget to use dispatch here!
    try {
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = (token) => {
  return (dispatch) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
