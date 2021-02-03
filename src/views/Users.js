import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import tailwind from 'tailwind-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeUser} from '../actions/users';

const Users = ({navigation, removeUser, users}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('User', item)}
        style={tailwind('rounded-lg  bg-white my-3 mx-4')}>
        <View style={tailwind('flex flex-row')}>
          <View
            style={tailwind(
              'pl-4 items-center flex flex-col items-center justify-center',
            )}>
            <Text style={tailwind('text-2xl')}>{item.id}</Text>
          </View>
          <View style={tailwind('w-4/5')}>
            <View style={tailwind('flex flex-row justify-between pt-2 pb-2')}>
              <Text style={tailwind('ml-4 font-semibold mt-2 ')}>
                {item.first_name} {item.last_name}
              </Text>
              <View style={tailwind('justify-end flex flex-row')}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Edit User', {user: item})}
                  style={tailwind(
                    'bg-green-200 px-3 font-light text-base py-1 rounded-lg mr-2',
                  )}>
                  <Text style={tailwind('text-xs text-gray-500')}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeUser(item.id)}>
                  <Text style={tailwind('text-xs text-gray-500 mr-2 mt-1')}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Add User')}
        style={tailwind('py-4 rounded-full mx-4 bg-blue-400 mt-4')}>
        <Text style={tailwind('text-center font-semibold text-white')}>
          Add User
        </Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  removeUser: bindActionCreators(removeUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
