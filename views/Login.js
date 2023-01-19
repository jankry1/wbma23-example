import React, { useEffect } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const {setIsLoggedIn} = useContext(MainContext);

  const logIn = async () => {
    console.log('Button pressed');
    setIsLoggedIn(true);
    try {
      await AsyncStorage.setItem('userToken', 'abc123');
    } catch (e) {
      console.warn('errorin storing token', e);
    }
  };

  const checkToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken === 'abc123') {
        setIsLoggedIn(true);
      }
    } catch (e) {
      console.log('no valid token', e);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Button style={styles.button} title="Sign in!" onPress={logIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#77A6F7',
  },
  text: {
    fontSize: 30,
    fontFamily: 'LatoBold',
  },
  button: {
    fontFamily: 'LatoThin',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
