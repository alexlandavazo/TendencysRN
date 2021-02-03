import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Users from './views/Users';
import User from './views/User';
import AddUser from './views/AddUser';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Users'} component={Users} />
      <Stack.Screen name={'User'} component={User} />
      <Stack.Screen name={'Add User'} component={AddUser} />
    </Stack.Navigator>
  );
};

export default HomeStack;
