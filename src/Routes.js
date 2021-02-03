import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import HomeTab from './HomeTab';
import {bindActionCreators} from 'redux';
import {getUsers} from './actions/users';
import {ActivityIndicator} from 'react-native';
import tailwind from 'tailwind-rn';
import Login from './views/Login';

const Routes = ({getUsersAction, session}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsersAction();
    setLoading(false);
  }, [getUsersAction]);
  return loading ? (
    <ActivityIndicator size={'large'} style={tailwind('mt-64')} />
  ) : session ? (
    <HomeTab />
  ) : (
    <Login />
  );
};
const mapStateToProps = (state) => ({
  session: state.session,
});
const mapDispatchToProps = (dispatch) => ({
  getUsersAction: bindActionCreators(getUsers, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
