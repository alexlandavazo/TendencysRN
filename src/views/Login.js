import React, {useState} from 'react';
import tailwind from 'tailwind-rn';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/session';

const Login = ({login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <View style={tailwind('mx-8 mt-32')}>
        <Text style={tailwind('text-base text-gray-800')}>Email:</Text>
        <TextInput
          autoCapitalize={'none'}
          style={tailwind('h-10 rounded border border-gray-200')}
          onChangeText={setEmail}
        />
        <Text style={tailwind('text-base text-gray-800')}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={tailwind('h-10 rounded border border-gray-200')}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          login(email);
        }}
        style={tailwind('mx-8 py-4 border border-gray-200 rounded-full mt-24')}>
        <Text style={tailwind('text-gray-400 text-center')}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(login, dispatch),
});
export default connect(null, mapDispatchToProps)(Login);
