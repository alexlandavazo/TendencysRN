import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Users from './views/Users';
import EditUser from './views/EditUser';
import User from './views/User';
import AddUser from './views/AddUser';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Users'} component={Users} />
      <Stack.Screen name={'Edit User'} component={EditUser} />
      <Stack.Screen name={'User'} component={User} />
      <Stack.Screen name={'Add User'} component={AddUser} />
    </Stack.Navigator>
  );
};

export default HomeStack;
