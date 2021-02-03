import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import tailwind from 'tailwind-rn';
import {connect} from 'react-redux';
import {removeLoginState} from '../actions/session';
import {bindActionCreators} from 'redux';
import Modal from 'react-native-modal';

const Profile = ({removeLoginStateAction, session, users}) => {
  const user = session.email ? session : users[0];
  const {avatar, first_name, last_name, email} = user;
  const [visible, setVisible] = useState(false);

  const signOut = () => {
    setVisible(true);
    setTimeout(() => {
      removeLoginStateAction();
    }, 2000);
  };

  return (
    <SafeAreaView style={tailwind('h-full bg-white')}>
      <Modal isVisible={visible}>
        <View style={tailwind('flex')}>
          <ActivityIndicator size={'large'} />
        </View>
      </Modal>
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
          onPress={signOut}
          style={tailwind(
            'mx-4 py-4 border border-gray-200 rounded-full mt-52',
          )}>
          <Text style={tailwind('text-gray-400 text-center')}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  session: state.session,
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  removeLoginStateAction: bindActionCreators(removeLoginState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
