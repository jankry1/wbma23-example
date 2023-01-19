import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';

const Login = ({navigation}) => {
  const {setIsLoggedIn} = useContext(MainContext);
  const logIn = () => {
    console.log('Button pressed');
    setIsLoggedIn(true);
  };
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
