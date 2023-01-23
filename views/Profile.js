import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';

const Profile = () => {
  const {user} = useContext(MainContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Full name: {user.full_name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77A6F7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;
