import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import tailwind from 'tailwind-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editUser} from '../actions/users';

const EditUser = ({navigation, route, editUser}) => {
  const user = route.params;
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const saveChanges = () => {
    const editedUser = {
      ...user,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    editUser(editedUser);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <View style={tailwind('mt-10')}>
        <Image
          source={{uri: user.avatar}}
          style={tailwind('h-32 w-32 rounded-full ml-36')}
        />
        <View style={tailwind('mx-4 mt-8')}>
          <Text style={tailwind('text-base text-gray-800')}>First Name</Text>
          <TextInput
            style={tailwind('h-10 border border-gray-100 rounded')}
            value={firstName}
            onChangeText={setFirstName}
          />
          <Text style={tailwind('text-base text-gray-800')}>Last Name</Text>
          <TextInput
            style={tailwind('h-10 border border-gray-100 rounded')}
            value={lastName}
            onChangeText={setLastName}
          />
          <Text style={tailwind('text-base text-gray-800')}>Email</Text>
          <TextInput
            style={tailwind('h-10 border border-gray-100 rounded')}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity
          onPress={saveChanges}
          style={tailwind(
            'mx-4 py-4 border border-gray-200 rounded-full mt-52',
          )}>
          <Text style={tailwind('text-gray-400 text-center')}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editUser: bindActionCreators(editUser, dispatch),
});

export default connect(null, mapDispatchToProps)(EditUser);
