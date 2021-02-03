import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Users from './views/Users';
import EditUser from './views/EditUser';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Users'} component={Users} />
      <Stack.Screen name={'EditUser'} component={EditUser} />
    </Stack.Navigator>
  );
};

export default HomeStack;
