import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import tailwind from 'tailwind-rn';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, editUser} from '../actions/users';

const AddUser = ({navigation, addUserAction, route, editUserAction}) => {
  const type = route.params.type;
  const initialState = {
    firstName: route.params.user ? route.params.user.first_name : '',
    lastName: route.params.user ? route.params.user.last_name : '',
    email: route.params.user ? route.params.user.email : '',
  };

  const [firstName, setFirstName] = useState(initialState.firstName);
  const [lastName, setLastName] = useState(initialState.lastName);
  const [email, setEmail] = useState(initialState.email);
  const [validationMessage, setValidationMessage] = useState([]);

  const saveChanges = () => {
    if (!validationFields()) {
      return;
    }
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    if (type === 'add') {
      addUserAction(newUser);
    } else {
      const editedUser = {
        ...route.params.user,
        ...newUser,
      };
      editUserAction(editedUser);
    }
    navigation.navigate('Users');
  };

  const validationFields = () => {
    let validation = true;
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (firstName.length === 0) {
      validation = false;
      setValidationMessage({
        firstName: 'The first name field cant be empty',
      });
    }
    if (lastName.length === 0) {
      validation = false;
      setValidationMessage({
        lastName: 'The last name field cant be empty',
      });
    }
    if (!regEmail.test(email)) {
      validation = false;
      setValidationMessage({
        email: 'The email will be a format valid',
      });
    }
    return validation;
  };

  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <View style={tailwind('mt-10')}>
        <View style={tailwind('mx-4 mt-8')}>
          <Text style={tailwind('text-base text-gray-800')}>First Name</Text>
          <TextInput
            style={tailwind('h-10 border border-gray-100 rounded')}
            value={firstName}
            onChangeText={setFirstName}
          />
          {validationMessage.firstName && (
            <Text style={tailwind('mx-4 text-red-500')}>
              {validationMessage.firstName}
            </Text>
          )}
          <Text style={tailwind('text-base text-gray-800')}>Last Name</Text>
          <TextInput
            style={tailwind('h-10 border border-gray-100 rounded')}
            value={lastName}
            onChangeText={setLastName}
          />
          {validationMessage.lastName && (
            <Text style={tailwind('mx-4 text-red-500')}>
              {validationMessage.lastName}
            </Text>
          )}
          <Text style={tailwind('text-base text-gray-800')}>Email</Text>
          <TextInput
            autoCapitalize={'none'}
            style={tailwind('h-10 border border-gray-100 rounded')}
            value={email}
            onChangeText={setEmail}
          />
          {validationMessage.email && (
            <Text style={tailwind('mx-4 text-red-500')}>
              {validationMessage.email}
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={saveChanges}
          style={tailwind(
            'mx-4 py-4 border border-gray-200 rounded-full mt-52',
          )}>
          <Text style={tailwind('text-gray-400 text-center')}>
            {type === 'add' ? 'Add User' : 'Save Changes'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addUserAction: bindActionCreators(addUser, dispatch),
  editUserAction: bindActionCreators(editUser, dispatch),
});

export default connect(null, mapDispatchToProps)(AddUser);
