import API from '../api/users';

export const getUsersState = (users) => {
  return {
    type: 'GET_USERS',
    users: users,
  };
};

export const removeUser = (id) => {
  return {
    type: 'REMOVE_USER',
    id: id,
  };
};

export const editUser = (user) => {
  return {
    type: 'EDIT_USER',
    user: user,
  };
};

export const getUsers = () => (dispatch) => {
  const usersApi = new API();
  try {
    usersApi
      .get()
      .then((response) => {
        const users = response.data.data;
        dispatch(getUsersState(users));
      })
      .catch((err) => console.error(err));
  } catch (err) {
    console.log(err);
  }
};
