import React from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

const User = ({navigation, route}) => {
  const {avatar, first_name, last_name, email} = route.params;

  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <View style={tailwind('mt-10')}>
        {avatar ? (
          <Image
            source={{uri: avatar}}
            style={tailwind('h-32 w-32 rounded-full ml-36')}
          />
        ) : (
          <View style={tailwind('h-32 w-32 rounded-full ml-36 bg-blue-600')} />
        )}
        <View style={tailwind('mx-4 mt-8')}>
          <Text style={tailwind('text-base text-gray-800')}>First Name</Text>
          <Text style={tailwind('h-10 border border-gray-100 rounded')}>
            {first_name}
          </Text>
          <Text style={tailwind('text-base text-gray-800')}>Last Name</Text>
          <Text style={tailwind('h-10 border border-gray-100 rounded')}>
            {last_name}
          </Text>
          <Text style={tailwind('text-base text-gray-800')}>Email</Text>
          <Text style={tailwind('h-10 border border-gray-100 rounded')}>
            {email}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Add User', {user: route.params, type: 'edit'})
          }
          style={tailwind(
            'mx-4 py-4 border border-gray-200 rounded-full mt-52',
          )}>
          <Text style={tailwind('text-gray-400 text-center')}>Edit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default User;
