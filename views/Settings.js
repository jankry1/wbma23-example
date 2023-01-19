import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';

const Settings = () => {
  const {setIsLoggedIn} = useContext(MainContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Button
        style={styles.button}
        title="Log out"
        onPress={() => {
          setIsLoggedIn(false);
        }}
      />
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
  button: {
    fontFamily: 'LatoThin',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 30,
    fontFamily: 'LatoBold',
  },
});

export default Settings;
