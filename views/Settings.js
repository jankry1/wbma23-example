import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
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

export default Settings;
