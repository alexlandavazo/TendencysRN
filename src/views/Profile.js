import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import tailwind from 'tailwind-rn';

const Profile = () => {
  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};
export default Profile;
