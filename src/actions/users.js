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
    let users = [];
    usersApi
      .get(1)
      .then((response) => {
        users = response.data.data;
        usersApi
          .get(2)
          .then((response) => {
            const merged = users.concat(response.data.data);
            console.log(merged);
            dispatch(getUsersState(merged));
          })
          .catch((err) => consoleo.error(err));
      })
      .catch((err) => console.error(err));
  } catch (err) {
    console.log(err);
  }
};
