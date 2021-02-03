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
  const user = route.params.user;
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [validationMessage, setValidationMessage] = useState([]);

  const saveChanges = () => {
    if (!validationFields()) return;
    const editedUser = {
      ...user,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    editUser(editedUser);
    navigation.navigate('Users');
  };

  const validationFields = () => {
    let validation = true;
    const regEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (firstName.length == 0) {
      validation = false;
      setValidationMessage({
        firstName: 'The first name field cant be empty',
      });
    }
    if (lastName.length == 0) {
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
        {user.avatar ? (
          <Image
            source={{uri: user.avatar}}
            style={tailwind('h-32 w-32 rounded-full ml-36')}
          />
        ) : (
          <View
            style={tailwind('h-32 w-32 rounded-full ml-36 bg-blue-600')}></View>
        )}
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
            style={tailwind('h-10 border border-gray-100 rounded')}
            value={email}
            onChangeText={setEmail}
          />
          {validationMessage.email && (
            <Text style={tailwind('mx-4 text-red-500')}>
              {validationMessage.firstName}
            </Text>
          )}
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
