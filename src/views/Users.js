import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import tailwind from 'tailwind-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUsers, removeUser} from '../actions/users';

const Users = ({navigation, getUsers, removeUser, users}) => {
  useEffect(() => {
    getUsers();
  }, []);
  const renderItem = ({item}) => {
    return (
      <View style={tailwind('rounded-lg  bg-white my-3 mx-4')}>
        <View style={tailwind('flex flex-row')}>
          <View
            style={tailwind(
              'pl-4 items-center flex flex-col items-center justify-center',
            )}>
            <Image
              style={tailwind('w-10 h-10 rounded-full self-center')}
              source={{
                uri: item.avatar,
              }}
            />
          </View>
          <View style={tailwind('w-4/5')}>
            <View style={tailwind('flex flex-row justify-between pt-2 pb-2')}>
              <Text style={tailwind('ml-4 font-semibold ')}>
                {item.first_name} {item.last_name}
              </Text>
              <TouchableOpacity onPress={() => removeUser(item.id)}>
                <Text style={tailwind('text-xs text-gray-500 mr-2')}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>

            <View style={tailwind('flex flex-row justify-between')}>
              <Text style={tailwind('ml-4 text-xs text-gray-500')}>
                {item.email}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditUser', item)}
                style={tailwind(
                  'bg-green-200 px-3 font-light text-base py-1 rounded-lg ',
                )}>
                <Text style={tailwind('text-xs text-gray-500')}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: bindActionCreators(getUsers, dispatch),
  removeUser: bindActionCreators(removeUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
