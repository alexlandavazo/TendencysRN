import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import HomeTab from './HomeTab';
import {bindActionCreators} from 'redux';
import {getUsers} from './actions/users';
import {ActivityIndicator} from 'react-native';
import tailwind from 'tailwind-rn';
import Login from './views/Login';

const Routes = ({getUsers, session}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
    setLoading(false);
  }, []);
  if (loading) {
    return <ActivityIndicator size={'large'} style={tailwind('mt-64')} />;
  }
  return session ? <HomeTab /> : <Login />;
};
const mapStateToProps = (state) => ({
  session: state.session,
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: bindActionCreators(getUsers, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
